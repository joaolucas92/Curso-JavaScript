const numero = 7;

const numeroPar = (numero % 2) === 0;
console.log(numeroPar);

if (numeroPar) {
    console.log('Par!');
}

if (!numeroPar) {
    console.log('Ímpar!');
}