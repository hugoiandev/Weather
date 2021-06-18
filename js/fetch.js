import Conversores from "./conversores.js"
const conversores = new Conversores

export default class FetchApi {
    constructor(api) {
        this.api = api
        this.h1 = document.querySelector('h1')
        this.spanGraus = document.querySelector('.graus')
        this.spanFah = document.querySelector('.fahrenheit')
        this.spanTempo = document.querySelector('.tempo')

    }

    fetch = async () => {
        try {
            const promiss = await fetch(this.api)
            const resultJson = await promiss.json()
            this.h1.innerText = `${resultJson.name}, ${resultJson.sys.country}`
            this.spanGraus.innerText = `C ${conversores.convCelsius(resultJson.main.temp)}°`
            this.spanFah.innerText = `F ${conversores.convFah(resultJson.main.temp)}°`
            this.spanTempo.innerText = `${resultJson.weather[0].description.toUpperCase()}`

            console.log(resultJson)
            
        } catch {
            console.log(Error())
        }
    }
}