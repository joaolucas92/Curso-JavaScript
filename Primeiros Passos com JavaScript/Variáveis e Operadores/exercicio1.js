const precoCombustivel = 4.29;
const gastoMedio = 12.5;
const distancia = 550;
let valorViagem;

valorViagem = (precoCombustivel / gastoMedio) * distancia;

console.log('O valor da viagem é: ' + valorViagem.toFixed(2));