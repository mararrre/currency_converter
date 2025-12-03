const API_KEY = "4bbe3cbe2004105df96aba94";

// элементы
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const fromAmount = document.getElementById("fromAmount");
const toAmount = document.getElementById("toAmount");
const convertBtn = document.getElementById("convert_btn");
const errorBox = document.getElementById("error_box");

// запуск по клику кнопки
convertBtn.addEventListener("click", convert);

// основная функция конвертации
async function convert() {
    clearError();

    const from = fromCurrency.value.toUpperCase().trim();
    const to = toCurrency.value.toUpperCase().trim();
    const amount = Number(fromAmount.value.trim());

    // валидация
    if (!from || !to) {
        showError("Enter currency codes (for example: USD, KGS).");
        return;
    }

    if (from.length !== 3 || to.length !== 3) {
        showError("The currency code must contain exactly 3 letters.");
        return;
    }

    if (!/^[A-Z]+$/.test(from) || !/^[A-Z]+$/.test(to)) {
        showError("The currency code can only contain the letters A–Z.");
        return;
    }

    if (!amount || amount <= 0) {
        showError("Please enter an amount greater than 0.");
        return;
    }

    try {
        const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`;
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === "success") {
            toAmount.value = data.conversion_result;
        } else {
            showError("API Error: Check currency codes.");
        }
    } catch (error) {
        showError("Internet or API problem.");
        console.error(error);
    }
}

// функции показа ошибок
function showError(msg) {
    errorBox.textContent = msg;
    errorBox.classList.add("show");
    setTimeout(() => {
        errorBox.classList.remove("show");
        errorBox.textContent = "";
    }, 7000);
}

function clearError() {
    errorBox.textContent = "";
    errorBox.classList.remove("show");
}