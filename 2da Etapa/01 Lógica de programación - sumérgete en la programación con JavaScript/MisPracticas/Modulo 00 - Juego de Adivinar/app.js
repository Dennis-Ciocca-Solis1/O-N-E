let numeroSecretoMax = 20;
let numeroSecreto = Math.floor((Math.random()*numeroSecretoMax)+1);
// let numeroSecreto=7;
// console.log(typeof(numeroSecreto));

let numeroUsuario = 0;
let oportunidades = 1;
let intentos = "intento";
let maxOportunidades = 5;

while (numeroSecreto != numeroUsuario) {

   numeroUsuario = parseInt(prompt(`Adivine el número secreto entre 1 y ${numeroSecretoMax}:`));

   console.log(typeof(numeroUsuario));

   if (numeroSecreto == numeroUsuario) {

      alert(`Felicitaciones! Adivinaste el número secreto en ${oportunidades} ${intentos}.`);

   } else {
      if (numeroUsuario > numeroSecreto) {
         alert("El número secreto es menor.");
      } else {
         alert("El número secreto es mayor.");
      }      

      oportunidades++;

      intentos = "intentos";

      if (oportunidades > maxOportunidades) {
         alert("Alcanzaste el número máximo de intentos.");
         alert(`El número secreto era: ${numeroSecreto}`);
         alert("No adivinaste el número secreto. Game Over!");         
         break;
      }
   }

}

