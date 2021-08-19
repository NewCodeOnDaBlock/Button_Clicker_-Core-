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


function changeTotal(element){

    if(likeBtnClicked){

    element.innerText = "38 Likes";

    }
}
changeTotal(element);
