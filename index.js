function login(){
    const login = document.getElementById("logbtn");
        let mailID = document.getElementById("email");
        let password = document.getElementById("pass");
        if(mailID.value === "admin@baiust.com" && password.value ==="1234"){
            alert("Matched");
            window.location.assign("admin_homepage.html");
        }
        else{
            alert("Not matched");
        }
}