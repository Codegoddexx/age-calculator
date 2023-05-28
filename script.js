let labelday = document.querySelector("#day");
let labelmonth = document.querySelector("#month");
let labelyear = document.querySelector("#year");
let inputdd = document.querySelector("#dd");
let inputyy = document.querySelector("#yy");
let inputmm = document.querySelector("#mm");
let pday = document.querySelector("#pday");
let pmonth = document.querySelector("#pmonth");
let pyear = document.querySelector("#pyear");
let spanday = document.querySelector("#spanday");
let spanmonth = document.querySelector("#spanmonth");
let spanyear = document.querySelector("#spanyear");
let submitbutton = document.querySelector("#submitbtn"),
    currentDate = new Date(),
    birthday,
    years,
    month,
    days,
    age;



function validateinput() {
    if (inputdd.value === "") {
        pday.innerHTML = "Enter a valid day.";
        inputdd.className = "inputError";
        pday.className = "pError";
        labelday.className = "pError";
    } else if (inputdd.value < 1 || inputdd.value > 31) {
        pday.innerHTML = "Must be a valid day.";
        inputdd.className = "inputError";
        pday.className = "pError";
        labelday.className = "pError";
    } else {
        pday.innerHTML = "";
        inputdd.className = "";
        pday.className = "";
        labelday.className = "";
    }
}
        inputdd.addEventListener("focusout", validateinput);


function valinput() {
    if (inputmm.value === "") {
        pmonth.innerHTML = "Enter a valid month.";
        inputmm.className = "inputError";
        pmonth.className = "pError";
        labelmonth.className = "pError";
    } else if (inputmm.value < 1 || inputmm.value > 12) {
        pmonth.innerHTML = "Must be a valid month.";
        inputmm.className = "inputError";
        pmonth.className = "pError";
        labelmonth.className = "pError";
    } else {
        pmonth.innerHTML = "";
        inputmm.className = "";
        pmonth.className = "";
        labelmonth.className = "";
    }
}
    inputmm.addEventListener("focusout", valinput);


function inputvalidation() {
    if (inputyy.value === "") {
        pyear.innerHTML = "Enter a valid year.";
        inputyy.className = "inputError";
        pyear.className = "pError";
        labelyear.className = "pError";
    } else if (inputyy.value > currentDate.getFullYear()) {
        pyear.innerHTML = "Must be in the past";
        inputyy.className = "inputError";
        pyear.className = "pError";
        labelyear.className = "pError";
    } else if (String(inputyy.value).length != 4) {
        pyear.innerHTML = "Must be a valid year.";
        inputyy.className = "inputError";
        pyear.className = "pError";
        labelyear.className = "pError";
    } else {
        pyear.innerHTML = "";
        inputyy.className = "";
        pyear.className = "";
        labelyear.className = "";
    }
    let dateString = `${inputyy.value}-${inputmm.value}-${inputdd.value}`;
    birthday = new Date(dateString);
    console.log(birthday);
}
inputyy.addEventListener("focusout", inputvalidation);


function outputresult() {
    if (inputdd.value != birthday.getDate() ||
        inputmm.value != (birthday.getMonth() + 1) ||
        inputyy.value > currentDate.getFullYear() ||
        inputyy.value != birthday.getFullYear()) {
        pyear.innerHTML = "";
        pmonth.innerHTML = "";
        pday.innerHTML = "Must be a valid date";
        inputdd.className = "inputError";
        pday.className = "pError";
        labelday.className = "pError";
        inputmm.className = "inputError";
        pmonth.className = "pError";
        labelmonth.className = "pError";
        inputyy.className = "inputError";
        pyear.className = "pError";
        labelyear.className = "pError";
    } else {
        age = currentDate.getTime() - birthday.getTime();
        age = age / (24 * 3600 * 1000); //convert to days
        years = Math.floor(age / 365.2425);
        months = Math.floor((age % 365.2425) / 30);
        days = Math.floor((age % 365.2425) % 30);

        spanyear.innerHTML = years;
        spanmonth.innerHTML = months;
        spanday.innerHTML = days;
    }
}

submitbutton.addEventListener("click", outputresult);