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
        var ref = firebase.database().ref('customer');
        ref.on('value', function(snapshot){
        //console.log('Hello');
        //console.log(snapshot);

        let dataObj = snapshot.val();
        console.log(dataObj);
        let data = Object.values(snapshot.val());

        var createRowElem = function(value) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(value));
            return td;
        }
        var table = document.getElementById('customer_table');
        
        
        data.map((number) => {
        
            var trBody = document.createElement('tr');

            trBody.appendChild(createRowElem(number['name']));
                trBody.appendChild(createRowElem(number['id']));
                trBody.appendChild(createRowElem(number['totalDue']));
                trBody.appendChild(createRowElem(number['totalPaid']));
                trBody.appendChild(createRowElem(number['email']));
                trBody.appendChild(createRowElem(number['phone']));
                trBody.appendChild(createRowElem(number['address']));
                trBody.appendChild(createRowElem(number['regDate']));
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