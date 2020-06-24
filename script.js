{
    const choseCurency = (selected) => {
        let currency = 1;
        if(selected!=="pln") {
             currency = Number(document.querySelector(".js-"+selected).innerHTML);
        }
        return currency;
    }
    const calculate = () => {
        const selectFirst = document.querySelector(".js-form__selectFirst");
        const selectSecond = document.querySelector(".js-form__selectSecond");
        const amount = Number(document.querySelector(".js-amount").value);
        let result = "";
        let symbol = "PLN";
        const currency1 = choseCurency(selectFirst.value);
        const currency2 = choseCurency(selectSecond.value);
        result = amount*currency1/currency2;
        symbol = selectSecond.value;
        document.querySelector(".js-currencyConverter__result").innerHTML = `${result.toFixed(2)} ${symbol}`;

    };
    const onSubmitForm = (event) => {
        event.preventDefault();
        calculate();
        
    };
    const form = document.querySelector(".js-currencyConverter__form");
    form.addEventListener("submit", onSubmitForm);
}
