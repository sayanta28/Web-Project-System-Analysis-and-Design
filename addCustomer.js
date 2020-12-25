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


function Ready(){
    nameV = document.getElementById('name').value
    idV = document.getElementById('id').value;
    dateV = document.getElementById('date').value;
    emailV = document.getElementById('email').value;
    numV = document.getElementById('num').value;
    addV = document.getElementById('address').value;
}



document.getElementById('addbutton').onclick = function () {
    Ready();
    if (nameV == "" || nameV == null || idV == "" || idV == null || emailV == "" || emailV == null || numV == "" || numV == null || addV == "" || addV == null) {
        alert("All field Must be filled out");
        return false;
      }
    else if(dateV == "" || dateV == null){
        alert("Date field Must be filled out");
        return false;
    }
    else {
    var div = document.getElementById('classId');
    div.style.visibility = "visible";
    firebase.database().ref('customer/' + idV).set({
        address: addV,
        id: idV,
        email: emailV,
        name: nameV,
        phone: numV,
        regDate: dateV,
        totalDue: 0,
        totalPaid: 0

    });

    // console.log('Tapp Tapp');
    setTimeout(swith, 5000);
    // console.log('Tapp Tapp2');
    }
    
}

function swith() {
    window.location.assign("customer.html");
    //console.log("Hellllo2");
}