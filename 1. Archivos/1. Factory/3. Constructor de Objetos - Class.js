//? https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes

class Auto {
    constructor(ruedas, cambios, inteligente, combustible) {
        this.ruedas = ruedas
        this.cambios = cambios
        this.inteligente = inteligente
        this.combustible = combustible
        this.arrancar = function () {
            console.log('Brum, brum');
        }
    }
}

const fiat = new Auto(2, 'automáticos', true, 'energía solar', 'bla bla');

console.log(fiat);
console.log(fiat.constructor);