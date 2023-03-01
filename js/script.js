let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let EUR = 0.21;
let USD = 0.22;
let CZK = 4.99;

formElement.addEventListener("input", () => {
    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result = resultElement.value;


    if (amount > Math.pow(100, 9)) {
        resultElement.innerText = "Za duża wartość";
        amountElement.classList.add("form__input--wrong");
        return;
    }
    amountElement.classList.remove("form__input--wrong");

    switch (currency) {
        case "EUR":
            result = amount * EUR;
            break;
        case "USD":
            result = amount * USD;
            break;
        case "CZK":
            result = amount * CZK;
            break;
    }

    resultElement.innerText = result.toFixed(2);
});

