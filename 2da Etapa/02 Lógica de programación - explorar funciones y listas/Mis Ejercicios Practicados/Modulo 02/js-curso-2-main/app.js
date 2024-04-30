// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
// function Hola(){
//    console.log("Hola Mundo");
// }

// Hola();

//-------------------------------------------------------------------------------------------------------------------------
// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
// function saludo(name) {
//    console.log(`¡Hola, ${name}.`);
// }

// saludo("Dennis");

//-------------------------------------------------------------------------------------------------------------------------
// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
// function doblarNumero(numero) {
//    return numero * 2   
// }

// let resultadoDoblado = doblarNumero(5);
// console.log(resultadoDoblado);

//-------------------------------------------------------------------------------------------------------------------------
// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
// function promedio(num1,num2,num3) {
//    let nota1 = num1;
//    let nota2 = num2;
//    let nota3 = num3;
   
//    let promedio = (nota1 + nota2 + nota3)/3;

//    return promedio;
// }

// console.log(promedio(18,15,13));

//Forma Alura:
// function promedio(num1,num2,num3) {
//    return (num1+num2+num3)/3;   
// }

// let resultadoPromedio = promedio(17,15,13);

// console.log(resultadoPromedio);

//-------------------------------------------------------------------------------------------------------------------------
// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
// function numeroMayor(num1,num2) {   
//    // if(num1>num2){
//    //    return num1;
//    // }else{
//    //    return num2;
//    // }

//    //forma Alura:
//    return num1 > num2 ? num1 : num2;
   
// }

// let mayor = numeroMayor(7,5);

// console.log(mayor);

//-------------------------------------------------------------------------------------------------------------------------
// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadrado(num) {

   return num * num;
   
}

let resultado = cuadrado(7);

console.log(resultado);