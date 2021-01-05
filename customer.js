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



document.getElementById("body").onload = function () {
    //console.log("hellohi22");
        var createRowElem = function(value) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(value));
            return td;
        }

        //new
        
        var ref = firebase.database().ref('customer');
        
        //ref2 = firebase.database().ref('customer');
        ref.once('value', (snapshot) => {
                //var childSnapshot = 'customer';
                var table = document.getElementById('customer_table');
                snapshot.forEach(childSnapshot => {
                    var childKey = childSnapshot.key;
                    var childData = childSnapshot.val();
                    //console.log(childKey);
                    //console.log(childData['name']);

                    var trBody = document.createElement('tr');

                    trBody.appendChild(createRowElem(childData['name']));
                        trBody.appendChild(createRowElem(childData['id']));
                        trBody.appendChild(createRowElem(childData['totalDue']));
                        trBody.appendChild(createRowElem(childData['totalPaid']));
                        trBody.appendChild(createRowElem(childData['email']));
                        trBody.appendChild(createRowElem(childData['phone']));
                        trBody.appendChild(createRowElem(childData['address']));
                        trBody.appendChild(createRowElem(childData['regDate']));
                                //}
                    table.appendChild(trBody);
                });
        });

}

// SearchBTN
function clik(){
    const val = document.getElementById("addbtn");
    window.location.assign("addCustomer.html");
}

function mysfunc() {
    console.log("Hello3333");
    var input, filter, table, tr, td, i, txtvalue;
    input = document.getElementById("myinput");
    filter = input.value.toUpperCase();
    table = document.getElementById("customer_table");
    tr = table.getElementsByTagName("tr");


    for(i = 0; i<tr.length; i++){
        td = tr[i].getElementsByTagName("td")[0];
        if(td){
            txtvalue = td.textContent || td.innerText;
            if(txtvalue.toUpperCase().indexOf(filter) > -1){

                tr[i].style.display = "";
            }
            else tr[i].style.display = "none";
        }
    }
}