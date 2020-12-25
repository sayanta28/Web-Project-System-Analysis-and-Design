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
    nameV = document.getElementById('name').value;
    idV = document.getElementById('id').value;
    dateV = document.getElementById('date').value;
    emailV = document.getElementById('email').value;
    numV = document.getElementById('num').value;
    addV = document.getElementById('address').value;
}

document.getElementById('addbutton').onclick = function () {
    Ready();
    firebase.database().ref('customer/' + idV).set({
        address: addV,
        email: emailV,
        name: nameV,
        phone: numV,
        regDate: dateV,
        totalDue: 0,
        totalPaid: 0
    });
    console.log('Tapp Tapp');
}