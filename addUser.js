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
    idV = document.getElementById('id').value;
    nameV = document.getElementById('name').value
    dateV = document.getElementById('date').value;
    amountV = document.getElementById('amount').value;
    buyCostV = document.getElementById('buyCost').value;
    sellCostV = document.getElementById('sellCost').value;
    mobNoV = document.getElementById('mobNo').value;
}

function tap() {
    // alert("Tap Tap");
    // console.log('Tap 2');
    Ready();

    if (nameV == "" || nameV == null || idV == "" || idV == null || amountV == "" || amountV == null || buyCostV == "" || buyCostV == null || sellCostV == "" || sellCostV == null || mobNoV == "" || mobNoV == null) {
        alert("All field Must be filled out");
        return false;
      }
    else if(dateV == "" || dateV == null){
        alert("Date field Must be filled out");
        // Start

        return false;
    }
    else{
       if(idV.length >= 4){
           var test = false;
            ref = firebase.database().ref('inventory');
            ref.once('value', (snapshot) => {
                    //var childSnapshot = 'customer';
                    snapshot.forEach(childSnapshot => {
                        var id = childSnapshot.key;
                        //console.log(childSnapshot.val());

                        //simplyfy korte hobe
                            if(id == idV){
                                test = true;
                                alert("Product ID must be unique!");
                                return false;
                                //test = true;
                            }
                    });
                    if(test == false){
                        insert();
                    } 
                    //else return false;
            });

       }
        else {
            alert("Product ID must be Length 4 or more!");
            return false;
        }
            // console.log('Tapp Tapp');
            // console.log('Tapp Tapp2');
    }
}

function insert(){
    amountV = parseInt(amountV);
    buyCostV = parseInt(buyCostV);
    sellCostV = parseInt(sellCostV);
    var div = document.getElementById('classId');
    div.style.visibility = "visible";
    firebase.database().ref('inventory/' + idV).set({
            id: idV,
            name: nameV,
            regDate: dateV,
            amount: amountV,
            buycost: buyCostV,
            unitcost: sellCostV,
            totalbuy: amountV,
            totalsel: 0
        });

    setTimeout(swith, 5000); 
}

function swith() {
    window.location.assign("inventoryPage.html");
    //console.log("Hellllo2");
}