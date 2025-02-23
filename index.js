let display = document.getElementById("display");
const audio = document.getElementById("clickSound");
let operadorActual = "";
let valorAnterior = "";
let valorActual = 0;
let resultado = 0;

function addNumber(numero) {
  if (valorAnterior == "" && operadorActual == "") {
    valorAnterior = parseFloat(numero);
    display.textContent = numero;
  } else {
    valorActual = parseFloat(numero);
    display.textContent += numero; // Actualiza el display
    caclularValorActual();
  }
  audio.play();
  console.log("Valor actual: " + valorActual);
}

function addOperator(operador) {
  if (valorAnterior === "") {
    valorAnterior = parseFloat(display.textContent);
  }
  operadorActual = operador;
  display.textContent += operador;
  valorActual = ""; // Limpia valorActual para el siguiente número
  audio.play();
}

function calculateResult() {
  valorActual = parseFloat(display.textContent.split(operadorActual).pop()); // Obtiene el último número
  caclularValorActual();

  display.textContent = resultado;
  operadorActual = ""; // Restablece el operador
  valorAnterior = resultado;
  valorActual = 0;
  audio.play();
}

function CleanDisplay() {
  display.textContent = "0";
  operadorActual = "";
  valorAnterior = "";
  valorActual = 0;
  resultado = 0;
  audio.play();
}

function caclularValorActual() {
  if (operadorActual === "") {
    resultado = parseFloat(valorAnterior);
    return;
  }

  switch (operadorActual) {
    case "+":
      resultado = parseFloat(valorAnterior) + parseFloat(valorActual);
      break;
    case "-":
      resultado = parseFloat(valorAnterior) - parseFloat(valorActual);
      break;
    case "*":
      resultado = parseFloat(valorAnterior) * parseFloat(valorActual);
      break;
    case "/":
      resultado = parseFloat(valorAnterior) / parseFloat(valorActual);
      break;
    default:
      resultado = valorActual;
  }

  display.textContent = resultado; // Actualiza el display con el resultado
}

function SoundOnOff() {
  const audio = document.getElementById("clickSound");
  const soundIcon = document.getElementById("soundIcon");

  if (!soundIcon || !audio) {
    console.error("Elemento de audio o ícono no encontrado.");
    return;
  }

  const iconElement = soundIcon.querySelector("i");

  if (audio.muted) {
    audio.muted = false;
    iconElement.className = "fa-solid fa-volume-high fa-xs";
  } else {
    audio.muted = true;
    iconElement.className = "fa-solid fa-volume-off fa-ms";
  }
}
