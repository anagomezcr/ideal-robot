function mediaAritmetica() {
/*   let sumavalores = 0;

for (let i = 0; i < valores.length; i++) {
    sumavalores = sumavalores + valores[i];*/
const sumavalores = valores.reduce(
    function (valorAcumulado = 0, nuevoElemento){
        
return valorAcumulado + nuevoElemento;
    })
const promediovalores = sumavalores / valores.length;
 return promediovalores;
}
const valores = [];

//calcular media aritmetica, para cualquier valores

function onClickButtonListMediaAritmetica() {
    const input1 = document.getElementById("InputValue1")
    const value1 = input1.value;
    const numero = valores.unshift(Number(value1));

    mediaAritmetica()
    const resultC = document.getElementById("resultC")
    resultC.innerText = "Tu valores de numeros es: " + valores.join(", ");
}

function onClickButtonMediaAritmetica() {
    const input1 = document.getElementById("InputValue1")
    const value1 = input1.value;
    
    const resultD = document.getElementById("resultD")
    resultD.innerText = "La media armonica es: " + "\n" + mediaAritmetica();
}

function onClickButtonRevMediaAritmetica() {
    const input1 = document.getElementById("InputValue1")
    const value1 = input1.value;
    const numero = valores.shift(Number(value1));

    mediaAritmetica()
    const resultC = document.getElementById("resultC")
    resultC.innerText = "Tu valores de numeros es: " + valores;
}