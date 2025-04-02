// Jogo de Adivinhação de Números
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Gera um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
const maxTentativas = 7;

console.log('Bem-vindo ao Jogo de Adivinhação!');
console.log(`Tente adivinhar o número entre 1 e 100. Você tem ${maxTentativas} tentativas.`);

function fazerTentativa() {
    rl.question('Digite um número: ', (resposta) => {
        const numero = parseInt(resposta);
        tentativas++;

        if (isNaN(numero)) {
            console.log('Por favor, digite um número válido!');
            fazerTentativa();
            return;
        }

        if (numero === numeroSecreto) {
            console.log(`Parabéns! Você acertou em ${tentativas} tentativas!`);
            rl.close();
        } else if (tentativas === maxTentativas) {
            console.log(`Game Over! O número secreto era ${numeroSecreto}`);
            rl.close();
        } else {
            const dica = numero < numeroSecreto ? 'maior' : 'menor';
            console.log(`Tente um número ${dica}! Restam ${maxTentativas - tentativas} tentativas.`);
            fazerTentativa();
        }
    });
}

fazerTentativa();
