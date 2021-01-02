const firebaseConfig = {
    apiKey: "AIzaSyAO_ml9bYT2k8rSC_TFheB4-55zqx2qU-A",
    authDomain: "test-web-tutorial.firebaseapp.com",
    databaseURL: "https://test-web-tutorial.firebaseio.com",
    projectId: "test-web-tutorial",
    storageBucket: "test-web-tutorial.appspot.com",
    messagingSenderId: "477439235921",
    appId: "1:477439235921:web:c27e1569025872d10d2570",
    measurementId: "G-6DDKTQT9WW"
};
firebase.initializeApp(firebaseConfig);



function Ready(){
    cusIDV = document.getElementById('cusID').value;
    prodIDV = document.getElementById('prodID').value
    dateV = document.getElementById('date').value;
    unitV = document.getElementById('unit').value;
    unitV = parseInt(unitV);
    mobNoV = document.getElementById('num').value;
}
var prodName, cost, cusName, profit, totalBuyNow, totalSelNow;
var maxValue, cusCost;
var currentTotalProfit, currentTotalSell; 

// Onload Works Bug

function tap(){
    Ready();
    if (cusIDV == "" || cusIDV == null || prodIDV == "" || prodIDV == null ||  unitV == "" || unitV == null || mobNoV == "" || mobNoV == null) {
        alert("All field Must be filled out");
        return false;
      }
    else if(dateV == "" || dateV == null){
        alert("Date field Must be filled out");
        // Start
        return false;
    }
    else{
        // Add totalbBuyNow = 0 Condition and token ID + 2 solve
        ref = firebase.database().ref('inventory/'+ prodIDV);
        ref.once('value', (snapshot) => {
                //var childSnapshot = 'customer';
                // snapshot.forEach(childSnapshot => {
                //     var id = childSnapshot.key;

                    const val = snapshot.val();
                    var setCost = val['unitcost'];
                    setCost = parseInt(setCost);
                    var buyCost = val['buycost'];
                    buyCost = parseInt(buyCost);
                    totalBuyNow = val['amount'];
                    totalBuyNow = parseInt(totalBuyNow);
                    totalSelNow = val['totalsel'];
                    totalSelNow = parseInt(totalSelNow);
                    prodName = val['name'];
                    cost = setCost * unitV;
                    profit = (setCost - buyCost) * unitV
                    profit = parseInt(profit);
                    console.log(prodName);
                    console.log(cost);

                    //console.log(childSnapshot.val())
                    //simplyfy korte hobe
                });
                
                refTwo = firebase.database().ref('customer/'+ cusIDV);
                refTwo.once('value', (snapshot) => {
                    //var childSnapshot = 'customer';
                    // snapshot.forEach(childSnapshot => {
                        //     var id = childSnapshot.key;
                        
                        const valTwo = snapshot.val();
                        cusName = valTwo['name'];
                        cusCost = valTwo['totalPaid'];
                        cusCost = parseInt(cusCost);
                        //console.log(cusName);
                        //console.log(typeof(cusName));


                        //console.log(childSnapshot.val())                            //simplyfy korte hobe
                });
                
                refThree = firebase.database().ref('tokenRecord/totalProfit');
                refThree.once('value', (snapshot) => {

                    currentTotalProfit = snapshot.val();
                    currentTotalProfit = parseInt(currentTotalProfit)
                    console.log('totalProfit');
                    console.log(snapshot.val());
                });
                refFour = firebase.database().ref('tokenRecord/totalSell');
                refFour.once('value', (snapshot) => {

                    currentTotalSell = snapshot.val();
                    currentTotalSell = parseInt(currentTotalSell);
                    console.log('totalSell');
                    console.log(snapshot.val());
                });

            var loader = document.getElementById("classId");
            loader.style.visibility = "visible";
            setTimeout(function() {
                swith(prodName, cost, cusName);
            }, 5000); 
        }
        
    }
    
    function swith(prodName, cost, cusName) {
        document.getElementById("prodIDP").innerHTML = prodIDV;
        document.getElementById("prodNP").innerHTML = prodName;
        document.getElementById("unitP").innerHTML = unitV;
        document.getElementById("billP").innerHTML = cost;
        document.getElementById("cusIDP").innerHTML = cusName;
        var div = document.getElementById("cusform");
        div.style.visibility = "hidden";
        var loader = document.getElementById("classId");
        loader.style.visibility = "hidden";
        var div2 = document.getElementById("billShowID");
        div2.style.visibility = "visible";
        //window.location.assign("inventoryPage.html");
        //console.log("Hellllo2");
        // Service
        maxValueRef = firebase.database().ref('tokenRecord/currentToken');
        maxValueRef.once('value', (snapshot) => {
            maxValue = snapshot.val();
            maxValue += 1; ///////
            console.log(maxValue);
        });
}

function serviceInfo(){
    Ready();
   
    console.log(maxValue);
    setTimeout(wait,2000);
    addValue(maxValue);
    setTimeout(wait2,2000);
}
function wait() {
    alert("waiting");
}
function wait2(){
    window.location.assign("service.html");

}
function addValue(maxValue){
    console.log(document.getElementById("prodIDP"));
    
    firebase.database().ref('tokenRecord/' + maxValue).set({
        tokenID: maxValue,
        amount: unitV,
        customerID: cusIDV,
        payBill: cost,
        prodID: prodIDV,
        profit: profit,
        serviceDate: dateV
    });


    // BUg and Bug 
    //maxValue += 1;
    currentTotalProfit = parseInt(currentTotalProfit);
    currentTotalSell = parseInt(currentTotalSell);
    profit = parseInt(profit);
    cost = parseInt(cost);

    currentTotalProfit = currentTotalProfit + profit;
    currentTotalSell = currentTotalSell + cost;

    firebase.database().ref('tokenRecord/').update({
        currentToken: maxValue,
        totalProfit: currentTotalProfit,
        totalSell: currentTotalSell
    });

    totalBuyNow = totalBuyNow - unitV;
    totalSelNow = totalSelNow + unitV;
    firebase.database().ref('inventory/' + prodIDV).update({
        amount: totalBuyNow,
        totalsel: totalSelNow
    });
    cost += cusCost;
    firebase.database().ref('customer/'+ cusIDV).update({
        totalPaid: cost
    });

}