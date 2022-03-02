
function mediaArmonica(){
    let total = 0;
for(var i = 0; i < lista1.length; i++) {
if(lista1[i] === 0){
    alert ("El número no puede ser 0");
    let cero = lista1.shift();
}
else{
 let price = (Number (1/lista1[i]));
total += price;
}}
return lista1.length/total;}

// calcular la mediana de cualquier lista 
const lista1 = [];
function onClickButtonList() {
    const input = document.getElementById("InputValue")
    const value = input.value;
    const numero = lista1.unshift(Number(value));
    mediaArmonica()
    const resultC = document.getElementById("resultC")
    resultC.innerText = "Tu lista de numeros es: " + lista1;
    
}
function onClickButtonMediaArmonica() {
    const input = document.getElementById("InputValue")
    const value = input.value;
    
    const resultP = document.getElementById("resultP")
    resultP.innerText = "La media armonica es: " + mediaArmonica();
}
function onClickButtonRev() {
    const input = document.getElementById("InputValue")
    const value = input.value;
    const numero = lista1.shift(Number(value));
    mediaArmonica()
    const resultC = document.getElementById("resultC")
    resultC.innerText = "Tu lista de numeros es: " + lista1;
    
}