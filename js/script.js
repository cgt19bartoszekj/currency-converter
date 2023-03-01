{
    const calculateResult = (amount, currency) => {

        let EUR = 0.21;
        let USD = 0.22;
        let CZK = 4.99;

        switch (currency) {
            case "EUR":
                return amount * EUR;
            case "USD":
                return amount * USD;
            case "CZK":
                return amount * CZK;
        }

    }

    const onFormInput = () => {

        let amountElement = document.querySelector(".js-amount");
        let currencyElement = document.querySelector(".js-currency");
        let resultElement = document.querySelector(".js-result");

        let amount = amountElement.value;
        let currency = currencyElement.value;
        let result = calculateResult(amount, currency);

        if (amount > Math.pow(100, 9)) {
            resultElement.innerText = "Za duża wartość";
            amountElement.classList.add("form__input--wrong");
            return;
        }

        amountElement.classList.remove("form__input--wrong");
        resultElement.innerText = result.toFixed(2);
    }

    const init = () => {

        let formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormInput);

    }

    init();
}
