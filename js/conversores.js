export default class Conversores {

    // Converte de Kelvin para Graus
    convCelsius(valor) {
        return Math.floor(valor - 273.15)
    }

    // Converte de Kelvin para Fahrenheit
    convFah(valor) {
        return Math.floor((valor - 273.15) * 9 / 5 + 32)
    }
}