const precoEtanol = 3.57;
const precoGasolina = 5.69;
const tipoCombustivel = 'Etanol';
const gastoMedio = 12.5;
const distancia = 500;
let valorViagem;

if (tipoCombustivel === 'Etanol') {
    valorViagem = (precoEtanol / gastoMedio) * distancia;
    console.log('O valor da viagem é de ' + valorViagem.toFixed(2) + 'reais!')
} else if (tipoCombustivel === 'Gasolina') {
    valorViagem = (precoGasolina / gastoMedio) * distancia;
    console.log('O valor da viagem é de ' + valorViagem.toFixed(2) + 'reais!')
} else {
    console.log('Tipo de combustível inválido!');
}