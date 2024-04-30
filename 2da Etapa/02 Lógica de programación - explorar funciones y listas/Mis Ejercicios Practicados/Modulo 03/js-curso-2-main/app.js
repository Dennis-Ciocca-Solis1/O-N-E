// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

// function IMC(altura,peso){
   
//    let imc  = peso / (altura*altura);

//    return imc;

// }

//---------------------------------------------------------------------------------------------------------
// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
//Forma Alura:
// function calcularFactorial(numero){
//    if (numero === 0 || numero === 1){
//       return 1;
//    }else{
//       return numero * calcularFactorial(numero - 1);
//    }
// }

// let numero = 5;
// let resultado = calcularFactorial(numero);
// console.log(`El factorial de ${numero} es ${resultado}`);

//Forma chatgpt:
// function calcularFactorial(numero) {
//    if (numero === 0 || numero === 1) {
//      return 1;
//    } else {
//      let factorial = 1;
//      for (let i = 2; i <= numero; i++) {
//        factorial *= i;
//      }
//      return factorial;
//    }
//  }
 
//  // Ejemplo de uso
//  let numero = 5;
//  let resultado = calcularFactorial(numero);
//  console.log(`El factorial de ${numero} es ${resultado}`);

//---------------------------------------------------------------------------------------------------------
// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

// function convertirDolares(dolares){
//    return parseFloat(dolares) * 3.80
// }

// let monto = 10;
// let montoConvertido = convertirDolares(monto);
// //++++++++++++++++++++++++++++
// //cambiando el léxico
// let equivalencia = "equivale";
// let divisa = "dolar";

// if (monto!=1){
//    equivalencia = "equivalen";
//    divisa="dólares"
// }
// // console.log(`${monto} dólares equivalen a ${montoConvertido} soles`);
// console.log(`${monto} ${divisa} ${equivalencia} a ${montoConvertido} soles.`);
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Forma Alura:
// function convertirDolaresAReales(dolares) {
//    var cotizacionDolar = 4.80;
//    var reales = dolares * cotizacionDolar;
//    return reales;
//  }
//  // Ejemplo de uso
//  let valorEnDolar = 50;
//  let valorEnReales = convertirDolaresAReales(valorEnDolar);
//  console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);

//---------------------------------------------------------------------------------------------------------
// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
// function calcularAreaYPerimetroRectangular(altura, anchura) {
//    var area = altura * anchura;
//    var perimetro = 2 * (altura + anchura);
//    console.log("Área: " + area);
//    console.log("Perímetro: " + perimetro);
//  }
//  // Ejemplo de uso
//  let altura = 3; // en metros
//  let anchura = 5; // en metros
//  calcularAreaYPerimetroRectangular(altura, anchura);

//---------------------------------------------------------------------------------------------------------
// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
// function calcularAreaYPerimetroCircular(radio) {
//    var pi = 3.14;
//    var area = pi * radio * radio;
//    var perimetro = 2 * pi * radio;
//    console.log("Área: " + area);
//    console.log("Perímetro: " + perimetro);
//  }
//  // Ejemplo de uso
//  let radio = 4; // en metros
//  calcularAreaYPerimetroCircular(radio);
//  console.log(calcularAreaYPerimetroCircular); 

//---------------------------------------------------------------------------------------------------------
// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function mostrarTablaDeMultiplicar(numero) {
   for (var i = 1; i <= 12; i++) {      
     var resultado = numero * i;
     console.log(numero + " x " + i + " = " + resultado);
   }
 }
 // Ejemplo de uso
 let numero = 10;
 mostrarTablaDeMultiplicar(numero);
 
