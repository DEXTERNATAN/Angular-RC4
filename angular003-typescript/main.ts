var minhaVariavel = 'teste de variavel';

function minhaFunc(x, y){
    return x + y;
}

let v = 2;
let t = 2;

var numero = [1,2,3,4];
numero.map(function(valor) {
    return valor * 2;
});

var num = [3,4,4,4,4];
num.map(valor =>{
    return (valor * 2) - 4;
});

var numero2 = [2,4,5,6,];
numero2.map(valor => valor * 2);


class Matematica {

    somar(x, y){
        return x + y;
    }
}