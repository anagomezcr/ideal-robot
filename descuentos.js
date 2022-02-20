function CalcularPrecioConDescuento(precio, descuento) {
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;

return precioConDescuento;
}
function CalcularDescuentoCupon(ConDescuento) {
    if (ConDescuento > 1000){
        const precioConCupon = (ConDescuento * 30)/100;
    return precioConCupon;}

    if (ConDescuento > 800 ){
        const precioConCupon = (ConDescuento * 50)/100;
    return precioConCupon;
    }
    if (ConDescuento > 500 ){
        const precioConCupon = (ConDescuento * 70)/100;
    return precioConCupon;
    }
    if (ConDescuento > 100 ){
        const precioConCupon = (ConDescuento * 80)/100;
    return precioConCupon;
    }
    else {
        return "NO CAPLICA CUPÓN"
    }
}

function onClickButtonPriceDiscount() {
    const InputPrice = document.getElementById("InputPrice")
    const priceValue = InputPrice.value;
    const InputDiscount = document.getElementById("InputDiscount")
    const DiscountValue = InputDiscount.value;

    const precioConDescuento = CalcularPrecioConDescuento(priceValue, DiscountValue); 
    const resultC = document.getElementById("resultC")
    resultC.innerText = "El precio con descuento es: $" + precioConDescuento;

    const precioConDescuentoCupon = CalcularDescuentoCupon(precioConDescuento)
    const resultP = document.getElementById("resultP")
    resultP.innerText = "El precio con Cupon es: $" + precioConDescuentoCupon;
}
