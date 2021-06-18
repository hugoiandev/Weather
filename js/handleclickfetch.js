import initFetchApi from "./fetch.js"

let cidade
const buscaCidade = document.querySelector('.busca-cidade')

export default class initHandleClick {
    constructor(seletor) {
        this.seletor = seletor
        this.element = document.querySelector(seletor)
    }

    initEvent() {
        this.element.addEventListener('click', this.buscaCidade)
    }

    buscaCidade() {
        cidade = buscaCidade.value
        const fetchApi = new initFetchApi(`http://api.openweathermap.org/data/2.5/weather?q=${cidade},br&APPID=c3083241c1c8d585022a63795c5c94fa`)
        fetchApi.fetch()
    }
}