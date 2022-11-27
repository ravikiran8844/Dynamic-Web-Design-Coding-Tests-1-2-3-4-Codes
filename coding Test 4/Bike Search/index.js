let searchResults = document.getElementById("searchResults");
let searchInput = document.getElementById("searchInput");
let breakEl=document.createElement("br");
let url = "https://apis.ccbp.in/city-bikes?bike_name=";


function createAndAppend(bikes) {
    for (let eachBike of bikes){
        console.log(eachBike)
        let titleEl=document.createElement("p");
 let descEl=document.createElement("p");
    titleEl.textContent="Bike Name: "+eachBike.name;
    descEl.textContent="City: "+eachBike.city;
    searchResults.appendChild(titleEl);
    searchResults.appendChild(descEl);
    }
}
searchInput.addEventListener("keydown", function(event) {

    let searchValue = event.target.value;
    if (event.key === "Enter") {
        url = "https://apis.ccbp.in/city-bikes?bike_name=" + searchValue;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let bikes = jsonData
                console.log(bikes)
                createAndAppend(bikes);
            })

    }
})
function onPageLoad(){
    searchResults.textContent="";
        let options = {
            method: "GET"
        };
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                let bikes = jsonData;
                // console.log(bikes)
                createAndAppend(bikes);
            });
}
onPageLoad();