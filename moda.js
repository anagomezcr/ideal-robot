function calcularModa() {
    
    const lista1Count = {};
    
    listadoModa.map(
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
    const listadoModa = [];
    function onClickButtonListModa() {
        const input2 = document.getElementById("InputValue2")
        const value2 = input2.value;
        const numero2 = listadoModa.unshift(Number(value2));
        
        const resultC = document.getElementById("resultC")
        resultC.innerText = "Tu lista de numeros es: " + "\n" + listadoModa;
    }
    function onClickButtonModa() {
        const input2 = document.getElementById("InputValue2")
        const value2 = input2.value;
         
        const resModa = calcularModa()
        const resultD = document.getElementById("resultD")
        resultD.innerText = "La moda es: " + "\n" + resModa;
    }
    function onClickButtonRevModa() {
        const input2 = document.getElementById("InputValue2")
        const value2 = input2.value;
        const numero2 = listadoModa.shift(Number(value2));
        lista()
        const resultC = document.getElementById("resultC")
        resultC.innerText = "Tu lista de numeros es: " +  "\n" + listadoModa;  
    }