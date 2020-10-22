/* document.getElementById("try").innerHTML = "joke";

fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        var joke = data.value;
        console.log("Joke", joke);    
    })
    .catch();


//location.href = "userPage.html";

*/

var obj = {
    name: "Sayanta",
    age: 24,
    add: "Chittagong"
};
var str="";
for(i=0 ; i<5; i++){
    str += "My name is "+obj.name+" ;  Age: "+i+"     Address:"+ obj.add +"<br>";
}
document.getElementById("try").innerHTML=str;