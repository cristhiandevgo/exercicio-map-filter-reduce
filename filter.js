let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let verifica_par = (number) => {
    if(number % 2 === 0) return number;
}

let resultado = arr.filter(verifica_par);

console.log(resultado);