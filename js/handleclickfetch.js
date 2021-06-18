import initFetchApi from "./fetch.js"

let cidade
const buscaCidade = document.querySelector('.busca-cidade')
const update = document.querySelector('.link-update')

export default class initHandleClick {
    constructor(seletor) {
        this.seletor = seletor
        this.element = document.querySelector(seletor)
    }

    buscaCidade() {
        cidade = buscaCidade.value
        this.fetchApi1 = new initFetchApi(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&APPID=c3083241c1c8d585022a63795c5c94fa`)
        this.fetchApi1.fetch()
    }

    updateWeather(event) {
        event.preventDefault()
        this.fetchApi2 = new initFetchApi(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&APPID=c3083241c1c8d585022a63795c5c94fa`)
        this.fetchApi2.fetch()

        console.log('Clicou')
    }

    initEvent() {
        this.element.addEventListener('click', this.buscaCidade)
        this.initEventUpdate()
    }

    initEventUpdate() {
        update.addEventListener('click', this.updateWeather)
    }
}
