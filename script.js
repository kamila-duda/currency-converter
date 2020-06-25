{
    const chooseCurrency = (selected) => {
        if(selected==="pln") {
            return 1; 
        }
        return Number(document.querySelector(`.js-${selected}`).innerHTML);
    }
    const calculate = () => {
        const selectFirst = document.querySelector(".js-form__selectFirst");
        const selectSecond = document.querySelector(".js-form__selectSecond");
        const amount = Number(document.querySelector(".js-amount").value);
        const currency1 = chooseCurrency(selectFirst.value);
        const currency2 = chooseCurrency(selectSecond.value);
        const result = amount*currency1/currency2;
        const symbol = selectSecond.value;
        document.querySelector(".js-currencyConverter__result").innerHTML = `${result.toFixed(2)} ${symbol}`;

    };
    const onSubmitForm = (event) => {
        event.preventDefault();
        calculate();
        
    };
    const form = document.querySelector(".js-currencyConverter__form");
    form.addEventListener("submit", onSubmitForm);
}
