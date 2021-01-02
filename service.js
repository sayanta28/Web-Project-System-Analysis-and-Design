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


document.getElementById("body").onload = function () {
    //console.log("hellohi22");
        var createRowElem = function(value) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(value));
            return td;
        }

        //new
        
        var ref = firebase.database().ref('tokenRecord');
        
        //ref2 = firebase.database().ref('customer');
        ref.once('value', (snapshot) => {
                //var childSnapshot = 'customer';
                var table = document.getElementById('tableTwo');
                snapshot.forEach(childSnapshot => {
                    var childKey = childSnapshot.key;
                    var childKey2 = parseInt(childKey);
                    // console.log();
                    if(childKey != 'currentToken' && childKey != 'totalProfit' && childKey != 'totalSell' ){
                    
                        var childData = childSnapshot.val();
                        //console.log(childKey);
                        //console.log(childData['name']);
    
                        var trBody = document.createElement('tr');
    
                        trBody.appendChild(createRowElem(childData['tokenID']));
                        trBody.appendChild(createRowElem(childData['customerID']));
                        trBody.appendChild(createRowElem(childData['prodID']));
                            trBody.appendChild(createRowElem(childData['amount']));
                            trBody.appendChild(createRowElem(childData['payBill']));
                            trBody.appendChild(createRowElem(childData['profit']));
                            trBody.appendChild(createRowElem(childData['serviceDate']));
                                    //}
                        table.appendChild(trBody);
                       // break;
                    }
                    else{

                    }
                });
        });

        
}

function mysfunc() {
    console.log("Hello3333");
    var input, filter, table, tr, td, i, txtvalue;
    input = document.getElementById("myinput");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableTwo");
    tr = table.getElementsByTagName("tr");


    for(i = 0; i<tr.length; i++){
        td = tr[i].getElementsByTagName("td")[1];
        if(td){
            txtvalue = td.textContent || td.innerText;
            if(txtvalue.toUpperCase().indexOf(filter) > -1){

                tr[i].style.display = "";
            }
            else tr[i].style.display = "none";
        }
    }
}