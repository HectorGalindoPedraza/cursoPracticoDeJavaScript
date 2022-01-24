// const precioOriginal =  120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento ){
    const porcentajePrecioConDescuento =  100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function buttonPriceDiscount(){
    const inputPrice = document.getElementById('InputPrice');
    const priceValue = Number(inputPrice.value);
    const inputCoupon = document.getElementById('InputCoupon');
    const couponValue = inputCoupon.value;
    const coupons = ['wtf', 'nice', 'tanChistosa', 'joma'];

    let descuento;

    switch(couponValue){

        case  coupons[0]:
            descuento = 15;
        break;

        case coupons[1]:
            descuento = 20;
        break

        case coupons[2]:
            descuento = 25;
        break

        case coupons[3]:
            descuento = 35;
        break
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    
    const resultP = document.getElementById('resultPrice');
    resultP.innerText = `El precio con descuento son: $${precioConDescuento}`
}