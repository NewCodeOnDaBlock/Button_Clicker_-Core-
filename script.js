/* Login & Log Out */

let login = true;

function logOut(element){

    if(login){

        element.innerText = "Logout";
        login =false;
    }
    else {
        element.innerText = "Login";
        login = true;
    }   
}
logOut(element);

/* hide the button */

function hide(element) {

    element.remove();

}

hide(element);


/* alert message */

function alertMessage(element) {

    element.alert("Ninja was liked!")

}
alertMessage(element);

/* Increment attempt */

var counter = 37;
var updatedElement = document.querySelector(".ninjalikes");

function add1(){

    counter++;
    console.log(counter);
    updatedElement.innerText = counter +' '+ "Likes";
    console.log(updatedElement);
}
add1();