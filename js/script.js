import initHandleClick from "./modules/handleclickfetch.js"
import initFetchApi from "./modules/fetch.js"

// Classe evento
const handleClick = new initHandleClick('.btn-buscar')
handleClick.initEvent()

// Classe que faz o fetch
const fetchApi = new initFetchApi('https://api.openweathermap.org/data/2.5/weather?q=Hortolandia,br&APPID=c3083241c1c8d585022a63795c5c94fa')
fetchApi.fetch()