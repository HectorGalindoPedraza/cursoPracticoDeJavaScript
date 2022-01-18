// Codigo del cuadrado
console.group('Cuadrados');
const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimétro del cuadrado es: ' + perimetroCuadrado + 'cm');
	
const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El area del cuadrado es: ' + areaCuadrado + 'cm2');
console.groupEnd();

// Código del triánagulo

console.group('triángulos');
const ladoTriangulo1 = 2;
const ladoTriangulo2 = 3;
const baseTriangulo = 4;
console.log(`Los lados del triángulo miden: ${ladoTriangulo1}cm, ${ladoTriangulo2}cm y la base ${baseTriangulo}cm `);

const alturaTriangulo = 5.5;
console.log('La altura del triangulo es de: ' + alturaTriangulo + 'cm');

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`EL perimetro del triangulo es: ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triangulo es de: ${areaTriangulo}cm2`);
console.groupEnd();

// Código del circulo
console.group('Circulos');
    let radioCirculo = 5;
    const diametroCirculo = radioCirculo * 2;
    console.log(`El diametro del circulo es: ${diametroCirculo}cm`);

    const pi = Math.PI;
    console.log(`PI es: ${pi}`)

    const perimetroCirculo = diametroCirculo * pi;
    console.log(`El perimetro del circulo es: ${perimetroCirculo}cm`);
    
    const areaCirculo = (radioCirculo * radioCirculo) * pi;
    console.log(`El area del circulo es: ${areaCirculo}cm2`);

console.groupEnd();
