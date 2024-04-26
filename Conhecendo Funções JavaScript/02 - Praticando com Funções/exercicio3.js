function escrevaNome(name) {
    return 'Meu nome é ' + name;
}

function verificaIdade(idade) {
    if (idade >= 18) {
        return 'Maior de idade!';
    } else {
        return 'Menor de idade!';
    }
}

(function() {
    const nome = escrevaNome('João Lucas');
    console.log(nome);

    const idade = verificaIdade(31);
    console.log(idade);
})();