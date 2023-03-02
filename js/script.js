{
    const calculateResult = (amount, currency) => {

        const EUR = 0.21;
        const USD = 0.22;
        const CZK = 4.99;

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

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const resultElement = document.querySelector(".js-result");

        const amount = amountElement.value;
        const currency = currencyElement.value;
        const result = calculateResult(amount, currency);

        if (amount > Math.pow(100, 9)) {
            resultElement.innerText = "Za duża wartość";
            amountElement.classList.add("form__input--wrong");
            return;
        }

        amountElement.classList.remove("form__input--wrong");
        resultElement.innerText = result.toFixed(2);
    }

    const init = () => {

        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("input", onFormInput);

    }

    init();
}
