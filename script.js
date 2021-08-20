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

var likecount = 37;
var updateLikes = document.querySelector(".like-btn2");

function updateLikes () {

    likecount++;
    console.log(likecount);
    updateLikes.innerText = likecount +' '+ "Likes";
    console.log(updateLikes);
}