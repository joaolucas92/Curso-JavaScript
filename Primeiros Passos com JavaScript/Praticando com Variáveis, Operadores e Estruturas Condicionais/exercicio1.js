const nota1 = 10;
const nota2 = 5;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

if (media < 0 || media > 10) {
    console.log('NOTA INVÁLIDA!');
} else if (media < 5) {
    console.log('A média do aluno é de: ' + media.toFixed(2));
    console.log('REPROVADO!');
} else if (media >= 7) {
    console.log('A média do aluno é de: ' + media.toFixed(2));
    console.log('PASSOU DE SEMESTRE!');
} else {
    console.log('A média do aluno é de: ' + media.toFixed(2));
    console.log('RECUPERAÇÃO!');
}