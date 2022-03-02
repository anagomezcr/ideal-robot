function calcularModa() {
    
    const lista1Count = {};
    
    lista1.map(
        function (elemento){
            if (lista1Count[elemento]){
                lista1Count[elemento] += 1;
            }
            else {
                lista1Count[elemento] = 1 ;
            }
        }
    );
    
    const lista1Array = Object.entries(lista1Count).sort(
        function (elementoA, elementoB){
            return elementoA[1] - elementoB[1];
        }
    );
    
    const moda = lista1Array[lista1Array.length - 1] ;
    return moda;
    }
// calcula la moda de cualquier lista 
    const lista1 = [];
    function onClickButtonList() {
        const input = document.getElementById("InputValue")
        const value = input.value;
        const numero = lista1.unshift(Number(value));
        
        const resultC = document.getElementById("resultC")
        resultC.innerText = "Tu lista de numeros es: " + lista1;
    }
    function onClickButtonModa() {
        const input = document.getElementById("InputValue")
        const value = input.value;
         
        const resModa = calcularModa()
        const resultP = document.getElementById("resultP")
        resultP.innerText = "La moda es: " + resModa;
    }
