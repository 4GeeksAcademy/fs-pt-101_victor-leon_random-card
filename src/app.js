window.onload = function() {
  const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  const suits = ["♦", "♥", "♠", "♣"];
  const card = document.getElementById("card");
  const topEl = card.querySelector(".top");
  const centerEl = card.querySelector(".center");
  const bottomEl = card.querySelector(".bottom");
  const btn = document.getElementById("btn");
  const widthInput = document.getElementById("widthInput");
  const heightInput = document.getElementById("heightInput");
  const resizeBtn = document.getElementById("resizeBtn");

  // Generar carta
  function generarCarta() {
    const number = numbers[Math.floor(Math.random() * numbers.length)];
    const suit = suits[Math.floor(Math.random() * suits.length)];
    topEl.textContent = suit;
    centerEl.textContent = number;
    bottomEl.textContent = suit;
    card.style.color = (suit === "♦" || suit === "♥") ? "red" : "black";
  }

  // Cambiar tamaño
  function aplicarTamaño() {
    const width = widthInput.value.trim();
    const height = heightInput.value.trim();
    if(width) card.style.width = width;
    if(height) card.style.height = height;
  }

  // Boton
  btn.addEventListener("click", generarCarta);

  // Escoger tamaño
  resizeBtn.addEventListener("click", aplicarTamaño);

  // Genera carta al cargar pagina
  generarCarta();

  // Genera carta cada 10 segundos
  setInterval(generarCarta, 10000);
}
