
const button = document.getElementById("botao")
const select = document.getElementById("select")

const dolar = 5.61
const euro = 6.35

const clickButton = () =>{
    const inputReais = document.getElementById("input").value
    const inputRealValue = document.getElementById("real-value-text")
    const valuefinished = document.getElementById("currency-value")

    inputRealValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputReais)

    if (select.value === "€ Euro") {
        valuefinished.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputReais / euro)
    }

    if (select.value === "US$ Dólar Americano") {
        valuefinished.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputReais / dolar)
    }
}

const changeSelect = () => {

    
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if (select.value === "€ Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"
    }

    if (select.value === "US$ Dólar Americano") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src ="./assets/EUA.png"
    }
    clickButton()
}

button.addEventListener("click" , clickButton)
select.addEventListener("change" ,changeSelect)