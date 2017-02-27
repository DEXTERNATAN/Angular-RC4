var minhaVariavel = 'teste de variavel';
function minhaFunc(x, y) {
    return x + y;
}
var v = 2;
var t = 2;
var numero = [1, 2, 3, 4];
numero.map(function (valor) {
    return valor * 2;
});
var num = [3, 4, 4, 4, 4];
num.map(function (valor) {
    return (valor * 2) - 4;
});
var numero2 = [2, 4, 5, 6,];
numero2.map(function (valor) { return valor * 2; });
var Matematica = (function () {
    function Matematica() {
    }
    Matematica.prototype.somar = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
