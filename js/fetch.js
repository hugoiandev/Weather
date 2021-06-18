import Conversores from "./conversores.js"
const conversores = new Conversores

export default class FetchApi {
    constructor(api) {
        this.api = api
        this.h1 = document.querySelector('h1')
        this.span = document.querySelector('.graus')
        this.span2 = document.querySelector('.fahrenheit')

    }

    fetch = async () => {
        try {
            const promiss = await fetch(this.api)
            const resultJson = await promiss.json()
            this.h1.innerText = resultJson.name
            this.span.innerText = conversores.convKelvin(resultJson.main.temp) + '°'
            this.span2.innerText = conversores.convFah(resultJson.main.temp) + '°'

            console.log(resultJson)
            
        } catch {
            console.log(Error())
        }
    }
}