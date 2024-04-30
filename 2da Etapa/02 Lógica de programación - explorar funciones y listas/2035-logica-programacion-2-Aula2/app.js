// almacenando el número aleatorio en una variable
let numeroSecreto = generarNumeroSecreto();

// Creando el contador de intentos
let intentos = 0;

console.log(numeroSecreto);

// Generando función para seleccionar un elemento y darle un texto
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Generando verificación de intentos
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}

// Generando una función que genera un número aleatorio
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);


