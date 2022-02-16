// código del cuadrado
console.group("cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd();

// código del triangulo
console.group("triangulos");
function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return  (base * altura) / 2;
}

console.groupEnd();

// Código del circulo
console.group("circulos");
// Diametro
function diametroCirculo(radio){
    return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI + " cm");

// Perimetro
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

// Área 
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd("circulos");


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input =  document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input =  document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// triangulo
function calcularPerimetroTriangulo(){
    const input =  document.getElementById("InputTriangulo");
    const value = input.value;
    const input2 = document.getElementById("InputTriangulo2")
    const value2 = input2.value;
    const input3 = document.getElementById("InputTriangulo3")
    const value3 = input3.value;

    const area = perimetroTriangulo(Number (value), Number (value2), Number (value3));
    alert(area);
}

function calcularAreaTriangulo(){
    const input3 = document.getElementById("InputTriangulo3")
    const value3 = input3.value;
    const input4 = document.getElementById("InputTriangulo4")
    const value4 = input4.value;

    const area = areaTriangulo(Number (value3), Number (value4));
    alert(area);
}

// circulo
function calcularPerimetroCirculo(){
    const input =  document.getElementById("InputCirculo");
    const value = input.value;

    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input =  document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}