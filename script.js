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

var likecounter = 37;
var likeElement = document.querySelector("#like-btn-2");

function updateLikes(){

    likecounter++;
    console.log(likecounter);
    likeElement.innerText = likecounter +' '+ "Likes";
    console.log(likeElement);
}