let getActivityBtn=document.getElementById("getActivityBtn");
let result=document.getElementById("result");
let activityName=document.getElementById("activityName");
let activityType=document.getElementById("activityType");
let activityImg=document.getElementById("activityImg");
let spinner=document.getElementById("spinner");

getActivityBtn.addEventListener("click",function(){
    spinner.classList.remove("d-none");
    let options={
        method:"GET",
    };
    let url="https://apis.ccbp.in/random-activity";
    fetch(url,options)
    .then(function(response){
        return response.json();
    })
    .then(function(jsonData){
        spinner.classList.add("d-none");
        activityName.textContent=jsonData.activity;
        activityType.textContent=jsonData.type;
        activityImg.src=jsonData.image;
    });
});