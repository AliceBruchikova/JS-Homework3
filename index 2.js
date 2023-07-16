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
    console.log("Континент: " + this.continent, ", Страна: " + this.country);
}

developer1.f = getLocation;
developer2.f = getLocation;

developer1.f();
developer2.f();