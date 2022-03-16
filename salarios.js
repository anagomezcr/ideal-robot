//helpers - utils (expresion para funciones que no son parte del desarrollo, pero se requieren para calculos) 
//para validar la mediana de una lista, se debe validar si es par o inpar la cantidad de elementos
//me añade cada elemento a un array 
function tableDates(A, B, C){
    const a = elementoA.push(A); 
    const b = elementoB.push(B);
    const c = elementoC.push(C);
}
function aumento(a,b,c){
    total=0;
    const notesArray = new dateObject(a, b, c);
     const newElement = colombia.push(notesArray); 
     total += newElement;
     return total;
 }
function dateObject(pais, name, salary){
    this.pais = pais;
    this.name = name;
    this.salary = salary;
}
// se crea una funcion para validar si es par
function esPar(numerito) {
// se simplica el if, ya que si es 0 es true y si no es false
    return (numerito % 2 === 0);
}
// se llama funcion para calcular promedio, para la mediana
function calcularMediaAritmetica(listas) {
    const sumaListas = listas.reduce(
        function (valorAcumulado = 0, nuevoElemento){
    return valorAcumulado + nuevoElemento;
        })
    const promedioListas = sumaListas / listas.length;
     return promedioListas
    }
//calculadora mediana
// sacaremos mediana de los salarios, para cualquier lista o array
function medianaSalarios(listas) {
    // se divide a la longitud del array para encontrar el número que esta en la mitad
        const mitad = parseInt(listas.length / 2);
    //se llama a la funcion esPar para verificar la longitud del array 
        if (esPar(listas)){
    //si es par la longitud, hay que sacar el promedio de dos valores centrales
            const mitadPersonita1 = listas[mitad -1];
            const mitadPersonita2 = listas[mitad];
    // calculamos el promedio de la posicion mitadPersonita1 y mitadPersonita2
            const mediana = calcularMediaAritmetica([mitadPersonita1], [mitadPersonita2]);
                return mediana;
        }else {
    // si es inpar solo imprime el valor de la mitad        
            const mitadPersonita = listas[mitad];
            return mitadPersonita;
        }  
    }
//mediana General
// estamos creando un nuevo array personita con solo los salarios.
function MedianaSalariosPais(){
const salariosCol = colombia.map(
    function (personita) {
        return personita.salary;
    }
);
// ordenamos de mayor a menor los salarios
const salarioColSorted = salariosCol.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;        
    }
);
//se crea constante para guardar valor de la mediana general
const medianaGeneralCol = medianaSalarios(salarioColSorted);
//mediana del top 10%
//se saca el 10% del array 
const spliceStart = parseInt((salarioColSorted.length * 90)/ 100);
//se le resta a la longitud del array el 90% para dejar el 10% que se requiere
const spliceCount = salarioColSorted.length - spliceStart;
const medianaSalariosTop10 = salarioColSorted.splice(
spliceStart,
spliceCount
);
//se saca la mediana de los splice
const medianaColtop10 = medianaSalarios(medianaSalariosTop10);
return ({
    medianaGeneralCol,
    medianaColtop10,  
    medianaSalariosTop10,
});
}

//calcular mediana de salarios
const colombia = [];
const elementoA = [];
const elementoB = [];
const elementoC = [];
//añade cada valor a un listado
function onClickButtonListMedianaSalary() {
    const input = document.getElementById("Pais")
    const value = input.value;
    const input1 = document.getElementById("Name")
    const value1 = input1.value;
    const input2 = document.getElementById("Salary")
    const value2 = input2.value;

    tableDates(value, value1, Number(value2));
    aumento(value, value1, Number (value2));
    MedianaSalariosPais()

    const nameElement = document.getElementById("nameElement")
    const valueElement = document.getElementById("valueElement")
    const pesoElement = document.getElementById("pesoElement")

    nameElement.innerText = ("País: " + "\n" + "\n" +  elementoA.join(" \n "));
    valueElement.innerText = ("Nombre : " + "\n" + "\n" + elementoB.join(" \n "));
    pesoElement.innerText = ("Salario: " + "\n" + "\n" +  elementoC.join(" \n "));

}
//calcula la media ponderada
function onClickButtonMedianaSalary() {
    const calcularMedianaSalarios = document.getElementById("calcularMedianaSalarios")
    const calcularMedianaSalarios10 = document.getElementById("calcularMedianaSalarios10")
    const calcularSalarios10 = document.getElementById("calcularSalarios10")

    const resultadoFuncion = MedianaSalariosPais();
    const cambioObjetoResultado = resultadoFuncion.medianaGeneralCol;
    const cambioObjetoResultadomediana10 = resultadoFuncion.medianaColtop10;
    const cambioObjetoResultado10 = resultadoFuncion.medianaSalariosTop10;

    calcularMedianaSalarios.innerText = ("Mediana salarios Global: " + "\n" + "\n" + "$ " +  cambioObjetoResultado);
    calcularSalarios10.innerText = ("Salarios 10%: " + "\n" + "\n" + "$ " +  cambioObjetoResultado10);
    calcularMedianaSalarios10.innerText = ("Mediana salarios 10%: " + "\n" + "\n" + "$ " +  cambioObjetoResultadomediana10);
}
//borra cada elemento ingresado del ultimo al primero
function onClickButtonRevMedianaSalary(){
    const deletElement = elementoA.shift();
    const deletValue = elementoB.shift();
    const deletPeso = elementoC.shift();
    const deletDates = colombia.shift();

    nameElement.innerText = ("Elementos: " + "\n" + "\n" + elementoA.join(" \n "));
    valueElement.innerText = ("Valores : " + "\n" + "\n" + elementoB.join(" \n "));
    pesoElement.innerText = ("Peso: " + "\n" + "\n" +  elementoC.join(" \n "));
}