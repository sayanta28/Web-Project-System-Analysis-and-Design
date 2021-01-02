//Firebase config start
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
//console.log("hellohi");

//Firebase config end

// Table Load Start
document.getElementById("body").onload = function () {
    //console.log("hellohi22");
    var createRowElem = function(value) {
        var td = document.createElement('td');
        td.appendChild(document.createTextNode(value));
        return td;
    }
    let sum = 0;
    let sumTempProfit = 0;
        var ref = firebase.database().ref('inventory');
            ref.once('value', (snapshot) => {
        // console.log('Hello');

            ////let dataObj = snapshot.val();
            //console.log(dataObj)
            ////let data = Object.values(snapshot.val());

            
                var table = document.getElementById('inventory-table');
                
                let temp = 0;
                let tempProfit = 0;
                
                snapshot.forEach(childSnapshot => {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    
                    tempProfit = childData['totalbuy'] * childData['buycost'];
                    sumTempProfit += tempProfit;
                    temp = childData['totalsel'] * childData['unitcost'];
                    sum += temp;
                    console.log("TempPro: ", temp);
                    //console.log(childKey);
                    //console.log(childData['name']);

                    var trBody = document.createElement('tr');

                    trBody.appendChild(createRowElem(childData['name'].toUpperCase()));
                        trBody.appendChild(createRowElem(childData['amount']));
                        trBody.appendChild(createRowElem(childData['totalbuy']));
                        trBody.appendChild(createRowElem(childData['totalsel']));
                        trBody.appendChild(createRowElem(childData['unitcost']));
                                //}
                    table.appendChild(trBody);
            });

            let str = sum.toString() + " Taka";
            document.getElementById("totalsel").innerHTML = str;
            
            let str2 = sumTempProfit.toString() + " Taka";
            document.getElementById("totalInvest").innerHTML = str2;


        });

        refTwo = firebase.database().ref('tokenRecord/totalProfit');
        refTwo.once('value',(snapshot) => {
            totalProfit = snapshot.val();
            let str = totalProfit.toString() + " Taka";
            document.getElementById("totalProfit").innerHTML = str;
        });


        //Old
    //     let sum = 0;
    //     let temp = 0;
    //     data.map((number) => {
    //         temp = number['totalsel'] * number['unitcost'];
    //         sum += temp;
    //         var trBody = document.createElement('tr');

    //         trBody.appendChild(createRowElem(number['name'].toUpperCase()));
    //             trBody.appendChild(createRowElem(number['amount']));
    //             trBody.appendChild(createRowElem(number['totalbuy']));
    //             trBody.appendChild(createRowElem(number['totalsel']));
    //             trBody.appendChild(createRowElem(number['unitcost']));
    //                     //}
    //         table.appendChild(trBody);
    //     });
    //     let str = sum.toString() + " Taka";
    //     //console.log("sum: " + sum)
        
    //     document.getElementById("totalsel").innerHTML = str;
                    
    // });
}
// Table load end

//Log out btn
function log(){
    window.location.assign("index.html");
}

// Total Sell Info
