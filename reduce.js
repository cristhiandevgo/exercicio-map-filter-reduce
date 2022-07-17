// Some todos os números de um array
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arr = [1, 2, 3];

let soma = (numbers) => {
    if(!numbers.length) return "Array vazio!";

    let result = numbers.reduce((anterior, atual) => anterior + atual);

    return result;
}

let result = soma(arr);

console.log(`O resultado da soma é: ${result}`);

// Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule qual será o saldo final após subtrair todos os preços da lista enviada.
let prices = [100, 200, 300];
let saldo = 1000;

let compra = (prices, saldo) => {
    let valor_compra = prices.reduce((anterior, atual) => anterior + atual);
    saldo -= valor_compra;

    return saldo;
}

console.log(`Saldo inicial: ${saldo}`);
saldo = compra(prices, saldo);
console.log(`Saldo após a compra: ${saldo}`);