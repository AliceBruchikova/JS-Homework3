let obj = {
    id: 1,
    name: "Пылесос",
    firm: "Bosh",
    quantity: 3,
    price: "1200.00 €",
    cost: "3600.00 €"
}
for (let key in obj) {
    console.log("Ключ: " + key + ", значение: " + obj[key])
}
