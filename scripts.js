const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelectUp = document.querySelector(".currency-select-up")

const convertValues = async () => {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") //valor em real
    const currencyValueConverted = document.querySelector(".currency-value") // outras moedas (dollar, euro)

     const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then( response => response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high
    const realToday = 1 


    if (currencySelectUp.value == "dolar-1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelectUp.value == "euro-1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelectUp.value == "real-1") {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)

    }

    if (currencySelectUp.value == "bitcoin-1") {
    const bitcoinValue = (inputCurrencyValue / bitcoinToday).toLocaleString("en-US", {
        minimumFractionDigits: 8,
        maximumFractionDigits: 8
    });
    currencyValueToConvert.innerHTML = `₿ ${bitcoinValue}`;
    }
   
    //-----------------------------------------------------------------------------
   
    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }

    if (currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)

    }

    if (currencySelect.value == "bitcoin") {
    const bitcoinValue = (inputCurrencyValue / bitcoinToday).toLocaleString("en-US", {
        minimumFractionDigits: 8,
        maximumFractionDigits: 8
    });
    currencyValueConverted.innerHTML = `₿ ${bitcoinValue}`;
    }

}

function changeCurrency() {
    const nameCurrency = document.getElementById("name-currency")
    const imageCurrency = document.querySelector(".img-currency")
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")
    


    if (currencySelectUp.value == "real-1") {
        nameCurrency.innerHTML = "Real Brasileiro"
        imageCurrency.src = "./assets/real.png"    
    }

    if (currencySelectUp.value == "euro-1") {
        nameCurrency.innerHTML = "Euro"
        imageCurrency.src = "./assets/euro.png"    
    }

    if (currencySelectUp.value == "dolar-1") {
        nameCurrency.innerHTML = "Dólar Americano"
        imageCurrency.src = "./assets/dolar.png"   
    }

    if (currencySelectUp.value == "bitcoin-1") {
        nameCurrency.innerHTML = "Bitcoin"
        imageCurrency.src = "./assets/bitcoin.png"
    }

    //------------------------------------------------------


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/dolar.png"   
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"    
    }

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"    
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    

    convertValues()
}

currencySelectUp.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


