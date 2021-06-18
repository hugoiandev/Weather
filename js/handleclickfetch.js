import initFetchApi from "./fetch.js"
const fetchApi = new initFetchApi('http://api.openweathermap.org/data/2.5/weather?q=Hortolandia,br&APPID=c3083241c1c8d585022a63795c5c94fa')

export default class initHandleClick {
    constructor(seletor) {
        this.seletor = seletor
        this.element = document.querySelector(seletor)
    }

    initEvent() {
        this.element.addEventListener('click', fetchApi.fetch)
    }
}