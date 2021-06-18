import Conversores from "./conversores.js"
const conversores = new Conversores

export default class FetchApi {
    constructor(api) {
        this.api = api
        
        this.h1 = document.querySelector('h1')
        this.spanGraus = document.querySelector('.graus')
        this.spanFah = document.querySelector('.fahrenheit')
        this.spanTempo = document.querySelector('.tempo')
        this.wind = document.querySelector('.wind')
        this.clouds = document.querySelector('.clouds')
        this.humidity = document.querySelector('.humidity')
        this.tempMax = document.querySelector('.temp-max')
        this.tempMin = document.querySelector('.temp-min')

    }

    fetch = async () => {
        try {
            const promiss = await fetch(this.api)
            const resultJson = await promiss.json()
            
            this.h1.innerText = `${resultJson.name}, ${resultJson.sys.country}`
            this.spanGraus.innerText = `C ${conversores.convCelsius(resultJson.main.temp)}°`
            this.spanFah.innerText = `F ${conversores.convFah(resultJson.main.temp)}°`
            this.spanTempo.innerText = `${resultJson.weather[0].description.toUpperCase()}`
            this.wind.innerText = `${conversores.convMph(resultJson.wind.speed)} km/h`
            this.clouds.innerText = `${resultJson.clouds.all} %`
            this.humidity.innerText = `${resultJson.main.humidity} %`
            this.tempMax.innerText = `${conversores.convCelsius(resultJson.main.temp_max)}° ${conversores.convFah(resultJson.main.temp_max)}°`
            this.tempMin.innerText = `${conversores.convCelsius(resultJson.main.temp_min)}° ${conversores.convFah(resultJson.main.temp_min)}°`

            console.log(resultJson)
            
        } catch {
            console.log(Error())
        }
    }
}