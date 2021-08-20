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

var count = 37;
var updateLikes = document.querySelector(".like-btn2");

function add() {

    count++;
    console.log(count);
    updateLikes.innerText = count +' '+ "Likes";
    console.log(updateLikes);
}