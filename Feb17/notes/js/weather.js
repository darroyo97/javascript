//
function myFunc() {
    let variable = document.getElementById('input_id').value;
    let userCity = document.getElementById('nameCity')
    userCity.innerHTML = 'The city you picked is : ' + variable;
    console.log(variable)
    var userUrl = `https://api.openweathermap.org/data/2.5/weather?q=` + variable + `&APPID=9cd5ceea03f0af9dfe6cda9fc0684c66`
    // console.log(userUrl)
    fetch(userUrl)
        .then((response) => {
            return response.json();
        })
        .then((weatherObj) => {
            // console.log(weatherObj.main.temp)
            let celsius = weatherObj.main.temp - 273.15
            // console.log(celsius)
            let degCRound = Math.floor(celsius)
            // console.log(degCRound)
            let degF = degCRound * 1.8 + 32;
            // console.log(degF)
            let degFRound = Math.floor(degF)
            console.log(degFRound)
            let answer = document.querySelector('#tempResult');
            answer.innerHTML = degFRound.toString()

        })

}

// console.log(variable)
// let url = `https://api.openweathermap.org/data/2.5/weather?q=Houston&APPID=9cd5ceea03f0af9dfe6cda9fc0684c66`
// fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((weatherObj) => {
//         // console.log(weatherObj.main.temp)
//         let celsius = weatherObj.main.temp - 273.15
//         // console.log(celsius)
//         let degCRound = Math.floor(celsius)
//         // console.log(degCRound)
//         let degF = degCRound * 1.8 + 32;
//         // console.log(degF)
//         let degFRound = Math.floor(degF)
//         console.log(degFRound)
//         let body = document.querySelector('body');
//         body.innerHTML = degFRound.toString()

//     })