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

// calcular la mediana
const lista1 = [];
function onClickButtonListMediana() {
    const input1 = document.getElementById("InputValue1")
    const value1 = input1.value;
    const numero1 = lista1.unshift(Number(value1));

    lista()
    const resultA = document.getElementById("resultA")
    resultA.innerText = "Tu lista de numeros es: " + "\n" + lista1.join(", ");
}
function onClickButtonMediana() {
    const input1 = document.getElementById("InputValue1")
    const value1 = input1.value;
     
    const resultB = document.getElementById("resultB")
    resultB.innerText = "La media es: " + "\n" + lista();
}
function onClickButtonRevMediana() {
    const input1 = document.getElementById("InputValue1")
    const value1 = input1.value;
    const numero1 = lista1.shift(Number(value1));
    lista()
    const resultA = document.getElementById("resultA")
    resultA.innerText = "Tu lista de numeros es: " + "\n" + lista1;  
}