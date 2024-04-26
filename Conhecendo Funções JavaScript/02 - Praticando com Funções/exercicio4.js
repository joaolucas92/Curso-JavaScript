function calcularJuros(precoNormal, condicaoPag) {
    if (condicaoPag === 1) {
        const precoFinal = precoNormal - (precoNormal * 0.1);
        return 'Forma de pagamento: Débito.\nO valor a ser pago é de: R$ ' + precoFinal.toFixed(2);
    } else if (condicaoPag === 2) {
        const precoFinal = precoNormal - (precoNormal * 0.15);
        return 'Forma de pagamento: Dinheiro ou Pix.\nO valor a ser pago é de: R$ ' + precoFinal.toFixed(2);
    } else if (condicaoPag == 3) {
        const precoFinal = precoNormal;
        return 'Forma de pagamento: Parcelado em até 2x.\nO valor a ser pago é de: R$ ' + precoFinal.toFixed(2);
    } else if (condicaoPag === 4) {
        const precoFinal = precoNormal + (precoNormal * 0.1);
        return 'Forma de pagamento: Parcelado acima de 2x.\nO valor a ser pago é de: R$ ' + precoFinal.toFixed(2);
    } else {
        console.log('Condição de pagamento inválida!');
    }
}

(function() {
    console.log(calcularJuros(100, 1));
})();