function dateObject(name, salary, gasto){
this.name = name;
this.salary = salary;
this.gasto = gasto;
}
function resultado(){
const ingresoMensual = salarioMensual.map(
    function (salario,) {
        return salario.salary;
    }
)
const gastoMensual = salarioMensual.map(
    function (gastoTotal) {
        return gastoTotal.gasto;
    }
)
const namePerson = salarioMensual.map(
    function (personnita) {
        return personnita.name;
    }
)

const ingresosNetos = ingresoMensual - gastoMensual;

function capacidadEndeudamiento() {
    const endeudamiento = ingresosNetos * 0.40;
    if (gastoMensual <= 0 || ingresoMensual <= 0 || ingresosNetos <= 0){
        return "El valor no puede ser igual o menor a cero";
    }else {
    return endeudamiento;
}}
return capacidadEndeudamiento()}
const salarioMensual = [];
//calcular endeudamiento
function onclickcalcularEndeudamiento1() {
    const input = document.getElementById("Name")
    const value = input.value;
    const input1 = document.getElementById("Number1")
    const value1 = input1.value;
    const input2 = document.getElementById("Number2")
    const value2 = input2.value;
    const removObjet = salarioMensual.shift();

    const salarioMensualArray = new dateObject(value, Number (value1), Number (value2));
    const newElement = salarioMensual.push(salarioMensualArray);    
    resultado()
    const NameUser = document.getElementById("NameUser")
    const salaryUser = document.getElementById("salaryUser")
    const deudaUser = document.getElementById("deudaUser")

    NameUser.innerText = ("Name User: " + "\n" + "\n" + value);
    salaryUser.innerText = ("Ingresos Mensual : " + "\n" + "\n" + "$ " + value1);
    deudaUser.innerText = ("Gastos Mensual $: " + "\n" + "\n" + "$ " +  value2);


}
function onclickcalcularEndeudamiento2() {
    
    const calcularDeuda = document.getElementById("calcularDeuda")
    calcularDeuda.innerText = ("Capacidad de endeudamiento $: " + "\n" + "\n" + "$ " +  resultado());
}