import initHandleClick from "./handleclickfetch.js"
import initFetchApi from "./fetch.js"

// Classe evento
const handleClick = new initHandleClick('button')
handleClick.initEvent()

// Classe que faz o fetch
const fetchApi = new initFetchApi('http://api.openweathermap.org/data/2.5/weather?q=Hortolandia,br&APPID=c3083241c1c8d585022a63795c5c94fa')
fetchApi.fetch()