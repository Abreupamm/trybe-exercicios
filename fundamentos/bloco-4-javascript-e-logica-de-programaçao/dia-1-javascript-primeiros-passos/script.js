const a = 10;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);


const valor1 = 30;
const valor2 = 6;

if (valor1 > valor2) {
    console.log(valor1);
} else {
    console.log(valor2)
}

const valorA = 100;
const valorB = 400;
const valorC = 500;

if (valorC < valorA > valorB) {
    console.log(valorA);
} if (valorA < valorB > valorC) {
    console.log(valorB);
} else {
    console.log(valorC);
}

const teste = -3;

if (teste > 0) {
    console.log("POSITIVE");
} if (teste < 0) {
    console.log("NEGATIVE");
} else {
    console.log("ZERO");
}

const angulo1 = 360;
const angulo2 = -90;
const angulo3 = -90;
const soma = angulo1 + angulo2 + angulo3;
const resultado = "Erro";

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (soma == 180) {
        console.log("True");
    } else (soma >= 181);
    console.log("False");
}
else {
    console.log(resultado);
}

let peça = "PEÃO"

switch (peça.toLowerCase()) {
    case "peão":
        console.log("Os peões se movem somente para frente, uma casa por vez");
        break;
    case "bispo":
        console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro");
        break;
    case "torre":
        console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas");
        break;
    case "cavalo":
        console.log("O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto");
        break;
    case "rainha":
        console.log("Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente.");
        break;
    case "rei":
        console.log("O rei pode se mover para qualquer casa adjacente");
        break;
    default:
        console.log("Essa peça não existe no jogo de xadrez");

}

