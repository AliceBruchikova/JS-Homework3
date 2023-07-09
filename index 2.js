let developer1 = {
    firstName: 'Maria',
    lastName: 'Y.',
    country: 'Cyprus',
    continent: 'Europe',
    age: 30,
    language: 'Javascript'
}

let developer2 = {
    firstName: 'Victoria',
    lastName: 'T.',
    country: 'Puerto Rico',
    continent: 'Americas',
    age: 23,
    language: 'Python'
}

function getLocation () {
    console.log("Контитент: " + developer1.continent + ", Страна: " + developer1.country),
    console.log("Контитент: " + developer2.continent + ", Страна: " + developer2.country)
}
getLocation()
