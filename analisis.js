//helpers - utils (expresion para funciones que no son parte del desarrollo, pero se requieren para calculos) )
//para validar la mediana de una lista, se debe validar si es par o inpar la cantidad de elementos
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
        const mitad = listas.length / 2;
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

console.log({
    medianaGeneralCol,
    medianaColtop10,
    
});