let inputAmount = document.querySelector(".js-amount");
let formButton = document.querySelector(".js-form__button");
let selectFirst = document.querySelector(".js-form__selectFirst");
let selectSecond = document.querySelector(".js-form__selectSecond");
let form = document.querySelector(".js-currencyConverter__form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let pln = 1;
    let eur = Number(document.querySelector(".js-eur").innerHTML);
    let usd = Number(document.querySelector(".js-usd").innerHTML);
    let gbp = Number(document.querySelector(".js-gbp").innerHTML);
    let amount = Number(inputAmount.value);
    let result = "";
    let from = 1;
    let symbol = "PLN";
    if (selectFirst.value === "pln") {
        pln;
        eur = pln / eur;
        usd = pln / usd;
        gbp = pln / gbp;
    } else if (selectFirst.value === "eur") {
        pln = eur;
        eur = 1;
        usd = pln / usd;
        gbp = pln / gbp;
    } else if (selectFirst.value === "usd") {
        pln = usd;
        eur = pln / eur;
        usd = 1;
        gbp = pln / gbp;
    } else {
        pln = gbp;
        eur = pln / eur;
        usd = pln / usd;
        gbp = 1;
    }
if (selectSecond.value === "pln"){
    result = amount*pln;
    symbol;
} else if (selectSecond.value === "eur"){
    result = amount*eur;
    symbol = "EUR";
} else if (selectSecond.value === "usd"){
    result = amount*usd;
    symbol = "USD";
} else {
    result = amount*gbp;
    symbol = "GBP";
}
    document.querySelector(".js-currencyConverter__result").innerHTML= `${result.toFixed(2)} ${symbol}`;

});