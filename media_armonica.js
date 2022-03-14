function mediaArmonica(){
    let total = 0;
for(var i = 0; i < numbersUser.length; i++) {
if(numbersUser[i] === 0){
    alert ("El número no puede ser 0");
    let cero = numbersUser.shift();
}
else{
 let price = (Number (1/numbersUser[i]));
total += price;
}}
return numbersUser.length/total;}

// calcular la mediana de cualquier lista 
const numbersUser = [];

function onClickButtonListMediaArmonica() {
    const input = document.getElementById("InputValue")
    const value = input.value;
    const numero = numbersUser.unshift(Number(value));

    mediaArmonica()
    const resultA = document.getElementById("resultA")
    resultA.innerText = "Tu lista de numeros es: " + numbersUser;
}

function onClickButtonMediaArmonica() {
    const input = document.getElementById("InputValue")
    const value = input.value;
    
    const resultB = document.getElementById("resultB")
    resultB.innerText = "La media armonica es: " + mediaArmonica();
}

function onClickButtonRevMediaArmonica() {
    const input = document.getElementById("InputValue")
    const value = input.value;
    const numero = numbersUser.shift(Number(value));

    mediaArmonica()
    const resultA = document.getElementById("resultA")
    resultA.innerText = "Tu lista de numeros es: " + numbersUser;
}