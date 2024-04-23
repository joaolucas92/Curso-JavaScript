const precoNormal = 250.69;
const condicaoPag = 1;
let precoFinal;

if (condicaoPag === 1) {
    precoFinal = precoNormal - (precoNormal * 0.1);
    console.log('Forma de pagamento: Débito.');
    console.log('O valor a ser pago é de: R$ ' + precoFinal.toFixed(2));
} else if (condicaoPag === 2) {
    precoFinal = precoNormal - (precoNormal * 0.15);
    console.log('Forma de pagamento: Dinheiro ou Pix.');
    console.log('O valor a ser pago é de: R$ ' + precoFinal.toFixed(2));
} else if (condicaoPag == 3) {
    precoFinal = precoNormal;
    console.log('Forma de pagamento: Parcelado em até 2x.');
    console.log('O valor a ser pago é de: R$ ' + precoFinal.toFixed(2));
} else if (condicaoPag === 4) {
    precoFinal = precoNormal + (precoNormal * 0.1);
    console.log('Forma de pagamento: Parcelado acima de 2x.');
    console.log('O valor a ser pago é de: R$ ' + precoFinal.toFixed(2));
} else {
    console.log('Condição de pagamento inválida!');
}