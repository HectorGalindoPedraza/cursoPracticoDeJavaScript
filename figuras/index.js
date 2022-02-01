// Codigo del cuadrado
console.group('Cuadrados');
// const ladoCuadrado = 5;
// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

function perimetroCuadrado(lado){
    return lado * 4;
}
// console.log('El perimétro del cuadrado es: ' + perimetroCuadrado + 'cm');
	
function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

// Código del triánagulo

console.group('triángulos');

function perimetroTriangulo(lado1, lado2, base){ 
   return lado1 + lado2 + base;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

// Código del circulo
console.group('Circulos');
    // DIAMETRO
    function diametroCirculo(radio){
        return radio * 2;
    }

    // PI
    const pi = Math.PI;

    // PERIMETRO
    function perimetroCirculo(radio, pi){
        const diametro = diametroCirculo(radio);
        return diametro * pi;
    }
    
    // ÁREA  
    function areaCirculo(radio){
        return (radio * radio) * pi;
    }
console.groupEnd();

function isoscelesHeight(lado1, lado2, base) {
  if (lado1 === lado2 && base != lado1) {
    console.log("Es un isósceles");
    const trianguloRectangulo = base / 2;
    const altura = Math.sqrt(lado1 ** 2 - trianguloRectangulo ** 2);
    return(`La altura del triangulo es: ${altura}cm`);
  } else {
    return("NO ES ISÓSCELES!");
  }
}

// Aqui interactuamos con el HTML  

// Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area) + "m²";
}

// Triangulo 
function calcularAreaTriangulo(){
    const inputBase = document.getElementById('inputBase');
    const inputAltura = document.getElementById('inputAltura');
    const valueBase = inputBase.value;
    const valueAltura = inputAltura.value;

    const area = areaTriangulo(valueBase, valueAltura);
    alert(area) + "m²";
}
function calcularPerimetroTriangulo(){
    const inputBase = document.getElementById('inputBase');
    const inputLado1 = document.getElementById('inputLado1');
    const inputLado2 = document.getElementById('inputLado2');
    const valueLado1 = parseInt(inputLado1.value);
    const valueLado2 = parseInt(inputLado2.value);
    const valueBase = parseInt(inputBase.value);
    const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
    alert(perimetro);
}
// CIRCULO
function calcularDiametroCirculo(){
    const inputRadio = document.getElementById('inputRadio');
    const valueRadio = parseInt(inputRadio.value);
    const diametro = diametroCirculo(valueRadio);
    alert(diametro);
}
function calcularPerimetroCirculo(){
    const inputRadio = document.getElementById('inputRadio');
    const valueRadio = parseInt(inputRadio.value);
    const perimetro = perimetroCirculo(valueRadio, pi);
    alert(perimetro.toFixed(2));
}
function calcularAreaCirculo(){
    const inputRadio = document.getElementById('inputRadio');
    const valueRadio = parseInt(inputRadio.value);
    const area = areaCirculo(valueRadio);
    alert(area.toFixed(2) + "m²");
}
function  calcularIsoscelesHeight(){
    const inputLado1 = document.getElementById('isoscelesLado1');
    const inputLado2 = document.getElementById('isoscelesLado2');
    const inputBase = document.getElementById('isoscelesBase');
    const valueLado1 = Number(inputLado1.value);
    const valueLado2 = Number(inputLado2.value);
    const valueBase = Number(inputBase.value);
    const altura = isoscelesHeight(valueLado1, valueLado2, valueBase)
    alert(altura);
}