let myForm = document.getElementById("myForm");
let nameEl = document.getElementById("name");
let nameErrMsg = document.getElementById("nameErrMsg");
let password = document.getElementById("password");
let passwordErrMsg = document.getElementById("passwordErrMsg");
let resultMsg = document.getElementById("resultMsg");
let submitButton = document.getElementsByClassName("submit-button");

nameEl.addEventListener("blur", function() {
    if (nameEl.value === "") {
        nameErrMsg.textContent = "Required*";
    } else {
        nameErrMsg.textContent = "";
    }
});
password.addEventListener("blur", function() {
    if (password.value === "") {
        passwordErrMsg.textContent = "Required*";
    } else {
        passwordErrMsg.textContent = "";
    }
});

myForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if (nameEl.value !== "" & password.value !== "") {
        resultMsg.textContent = "Login Success";


    } else if (nameEl.value === "" & password.value === "") {
        resultMsg.textContent = "Fill in the required details";
        nameErrMsg.textContent = "Required*";
        passwordErrMsg.textContent = "Required*";
    } else if (nameEl.value === "") {
        resultMsg.textContent = "Fill in the required details";
        nameErrMsg.textContent = "Required*";
    } else if (password.value === "") {
        resultMsg.textContent = "Fill in the required details";
        passwordErrMsg.textContent = "Required*";
    }
});