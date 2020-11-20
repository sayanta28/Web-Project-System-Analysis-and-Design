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
console.log("hellohi");

//Firebase config end

document.getElementById("body").onload = function () {
    console.log("hellohi22");
        var ref = firebase.database().ref('inventory');
        ref.on('value', function(snapshot){
        console.log('Hello');

        let dataObj = snapshot.val();
        console.log(dataObj)
        let data = Object.values(snapshot.val());

        var createRowElem = function(value) {
            var td = document.createElement('td');
            td.appendChild(document.createTextNode(value));
            return td;
        }
        var table = document.getElementById('inventory-table');
        
            
        data.map((number) => {
            var trBody = document.createElement('tr');

            trBody.appendChild(createRowElem(number['name'].toUpperCase()));
                trBody.appendChild(createRowElem(number['amount']));
                trBody.appendChild(createRowElem(number['totalbuy']));
                trBody.appendChild(createRowElem(number['totalsel']));
                trBody.appendChild(createRowElem(number['unitcost']));
                        //}
            table.appendChild(trBody);
        });
                    
    });
}


function log(){
    window.location.assign("index.html");
}
