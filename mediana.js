function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
    return valorAcumulado + nuevoElemento;
        })
    const promedioLista = sumaLista / lista.length;
     return promedioLista
    }
 
function lista(){   

lista1.sort(function(a, b) {return b - a})

const mitadLista1 = parseInt(lista1.length/2);

function esPar(numerito){
if (numerito % 2 === 0){
    return true;
}
else {
    return false;
}
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 -1];
    const elemento2 = lista1[mitadLista1];
   
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1,
        elemento2
    ]);

   mediana = promedioElemento1y2;
}
else{
    mediana = lista1[mitadLista1];
}
    return mediana;
}

// calcular la mediana de cualquier lista 
const lista1 = [];
function onClickButtonList() {
    const input = document.getElementById("InputValue")
    const value = input.value;
    const numero = lista1.unshift(Number(value));

    lista()
    const resultC = document.getElementById("resultC")
    resultC.innerText = "Tu lista de numeros es: " + lista1;
}
function onClickButtonMediana() {
    const input = document.getElementById("InputValue")
    const value = input.value;
     
    const resultP = document.getElementById("resultP")
    resultP.innerText = "La media es: " + lista();

}