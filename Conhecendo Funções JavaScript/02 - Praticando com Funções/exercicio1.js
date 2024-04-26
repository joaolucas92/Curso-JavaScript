function escrevaNome(name) {
    return 'Meu nome é ' + name;
}

(function () {
    const nome = escrevaNome('João Lucas');
    console.log(nome);
})();