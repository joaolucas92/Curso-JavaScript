const altura = 1.72;
const peso = 100;
const imc = peso / Math.pow(altura, 2);

console.log('O IMC da pessoa é de: ' + imc.toFixed(2));

if (imc < 18.5) {
    console.log('Abaixo do peso!');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal!');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso!');
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso!');
} else {
    console.log('Obesidade grave!');
}