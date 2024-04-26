function verificaIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade!';
    } else {
        return 'Menor de idade!';
    }
}

(function() {
    const idade = verificaIdade(31);
    console.log(idade);
})();