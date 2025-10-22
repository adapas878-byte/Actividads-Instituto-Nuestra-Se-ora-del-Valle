// Captura el botón personalizado
const boton = document.querySelector(".btn-custom");

// Colores posibles
const colores = ["#b3e5fc", "#d1c4e9", "#c8e6c9"];
let indice = 0;

// Evento al hacer clic
boton.addEventListener("click", () => {
  // Cambia el color del fondo
  document.body.style.backgroundColor = colores[indice];

  // Cambia el texto del párrafo
  document.getElementById("mensaje").textContent = "¡El color de fondo ha cambiado correctamente!";

  // Muestra un alert
  alert("Color cambiado con éxito");

  // Avanza al siguiente color
  indice = (indice + 1) % colores.length;
});
