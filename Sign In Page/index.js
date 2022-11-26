let inputElement=document.getElementById("inputElement");
let passwordElement=document.getElementById("passwordElement");
let messageText=document.getElementById("messageText");

function signIn(){
    if (inputElement.value===""){
        messageText.textContent="Please Enter Username";
    }
    else if(passwordElement.value===""){
        messageText.textContent="Please Enter Password";

    }
    else{
                messageText.textContent="Welcome";

    }
}