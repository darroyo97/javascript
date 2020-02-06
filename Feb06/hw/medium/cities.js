var cities = [
    { name: 'Los Angeles', temperature: 60.0 },
    { name: 'Houston', temperature: 100.0 },
    { name: 'New York', temperature: 40.0 },
    { name: 'Miami', temperature: 90.0 },
    { name: 'Seattle', temperature: 30.0 },
]

let coldCity = cities.filter(function (city) {
    if (city.temperature < 70.0) {
        return city
    }
})
console.log(coldCity)