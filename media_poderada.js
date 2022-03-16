//me añade cada elemento a un array 
function tableDates(A, B, C){
    const a = elementoA.push(A); 
    const b = elementoB.push(B);
    const c = elementoC.push(C);
}
//me añade un objeto nuevo al array notes
function aumento(a,b,c){
    total=0;
    const notesArray = new dateObject(a, b, c);
     const newElement = notes.push(notesArray); 
     total += newElement;
     return total;
 }
 //me guarda los valores en un objeto
function dateObject(course, note, credit){
    this.course = course;
    this.note = note;
    this.credit = credit;
}
function mediaPonderada() {
// me divide las note y los credit y luego los multiplica
const notesWithCredit = notes.map(function (noteObject) {
    return noteObject.note * noteObject.credit;
});
// suma los resultado obtenidos anteriormente 
const sumOfNotesWithCredit = notesWithCredit.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
//me trae solo los valores de los credits 
const credits = notes.map(function (noteObject) {
    return noteObject.credit;
});
//suma solo los credits
const sumOfCredits = credits.reduce(
    function (sum = 0, newVal) {
        return sum + newVal;
    }
);
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumOfCredits;
return promedioPonderadoNotasConCreditos;
}
//se guarda cada valor en los arrays
const notes = [];
const elementoA = [];
const elementoB = [];
const elementoC = [];
//calcular media ponderada
//añade cada valor a un listado
function onClickButtonListMediaPonderada() {
    const input3 = document.getElementById("Name")
    const value3 = input3.value;
    const input1 = document.getElementById("Number1")
    const value1 = input1.value;
    const input2 = document.getElementById("Number2")
    const value2 = input2.value;
    tableDates(value3, Number(value1), Number(value2));
    aumento(value3, Number (value1), Number (value2));
   
    mediaPonderada()
    const nameElement = document.getElementById("nameElement")
    const valueElement = document.getElementById("valueElement")
    const pesoElement = document.getElementById("pesoElement")

    nameElement.innerText = ("Elementos: " + "\n" + "\n" + elementoA.join(" \n "));
    valueElement.innerText = ("Valores : " + "\n" + "\n" + elementoB.join(" \n "));
    pesoElement.innerText = ("Peso: " + "\n" + "\n" +  elementoC.join(" \n "));

}
//calcula la media ponderada
function onClickButtonMediaPonderada() {
    const calcularMediaPonderada = document.getElementById("calcularMediaPonderada")
    calcularMediaPonderada.innerText = ("Media ponderada: " + "\n" + "\n" +  mediaPonderada());
}
//borra cada elemento ingresado del ultimo al primero
function onClickButtonRevMediaPonderada(){
    const deletElement = elementoA.shift();
    const deletValue = elementoB.shift();
    const deletPeso = elementoC.shift();
    const deletDates = notes.shift();

    nameElement.innerText = ("Elementos: " + "\n" + "\n" + elementoA.join(" \n "));
    valueElement.innerText = ("Valores : " + "\n" + "\n" + elementoB.join(" \n "));
    pesoElement.innerText = ("Peso: " + "\n" + "\n" +  elementoC.join(" \n "));
}
