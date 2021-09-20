var name = "Ale"
var email = "aleoliva9@hotmail.com"
var age = 23

function getName(){
    console.log(name);
    var myNameElement = document.getElementById("name");
    myNameElement.innerHTML = name;
}
function getEmail(){
    console.log(email);
    var myEmailElement = document.getElementById("email");
    myEmailElement.innerHTML = '<b>' + email + '</b>';
}
function getAge(){
    console.log.apply(age);
    var myAgeElement = document.getElementById("age");
    myAgeElement.innerHTML = '<h1>' + age + '</h1>';
    myAgeElement.style.color = "#0000FF";
}
