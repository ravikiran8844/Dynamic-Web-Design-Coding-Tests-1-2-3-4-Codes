let countries = {
    paris: "France",
    london: "United Kingdom",
    newYork: "USA",
    newDelhi: "India"
};
let paris=document.getElementById("paris");
let london=document.getElementById("london");
let newyork=document.getElementById("newyork")
let capitalCountry = document.getElementById("capitalCountry");
let result = document.getElementById("result");
let delhi=document.getElementById("delhi");

result.textContent = "India";

capitalCountry.addEventListener("change", function(event) {
    let capital = event.target.value;
    if (capitalCountry.value === "Paris") {
        result.textContent = "France";
        paris.selected;
    } else if (capitalCountry.value === "London") {
        result.textContent = "United Kingdom";
                london.selected;

    } else if (capitalCountry.value === "New York") {
        result.textContent = "USA";
                newyork.selected;

    } else if (capitalCountry.value === "New Delhi") {
        result.textContent = "India";
                delhi.selected;
    }
});