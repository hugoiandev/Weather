import initFetchApi from "./fetch.js"

let cidade = 'Hortolandia'
const buscaCidade = document.querySelector('.busca-cidade')
const update = document.querySelector('.link-update')
const iconUpdate = document.querySelector('.icon-update')

export default class initHandleClick {
    constructor(seletor) {
        this.seletor = seletor
        this.element = document.querySelector(seletor)
    }

    buscaCidade() {
        if (buscaCidade.value === '') {
            alert('Digite uma cidade para continuar!')
        } else {
            cidade = buscaCidade.value
        }

        this.fetchApi1 = new initFetchApi(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&APPID=c3083241c1c8d585022a63795c5c94fa`)
        this.fetchApi1.fetch()
    }

    updateWeather(event) {
        event.preventDefault()
        iconUpdate.classList.add('ativo')
        setTimeout(() => {
            if (iconUpdate.classList.contains('ativo')) {
                iconUpdate.classList.remove('ativo')
            }
        }, 3000)

        this.fetchApi2 = new initFetchApi(`https://api.openweathermap.org/data/2.5/weather?q=${cidade},br&APPID=c3083241c1c8d585022a63795c5c94fa`)
        this.fetchApi2.fetch()
    }

    initEvent() {
        this.element.addEventListener('click', this.buscaCidade)
        this.initEventUpdate()
    }

    initEventUpdate() {
        update.addEventListener('click', this.updateWeather)
    }
}
