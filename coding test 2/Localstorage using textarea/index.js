let saveButton=document.getElementById("saveButton");
let inputText=document.getElementById("inputText");

// let storedValue=localStorage.setItem("yourStory",textValue);

saveButton.onclick=function(){
    let textValue=inputText.value;
    if (textValue===""){
        textValue=localStorage.getItem("yourStory",textValue);
    }
    else{
        textValue=localStorage.setItem("yourStory",textValue);

    }
};