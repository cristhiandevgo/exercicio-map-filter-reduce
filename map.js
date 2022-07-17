// Com this

let arroz = {
    price: 20
}

let array_map = () => {
    let arr = [1, 2, 3];

    return arr.map(function(item){
        return item * this.price;
    }, arroz);
}

let compra_1 = array_map();
console.log(compra_1);

// Sem this
console.log(`
Sem this`);
let feijao = {
    price: 14
}

let array_map_2 = () => {
    let arr = [1, 2, 3];

    return arr.map(function(item){
        return item * feijao.price;
    }, feijao);
}

let compra_2 = array_map_2();
console.log(compra_2);