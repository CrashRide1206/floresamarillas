// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Él la estaba esperando con una flor amarilla", time: 16 },
  { text: "Ella lo estaba soñando con la luz en su pupila", time: 24 },
  { text: "y el amarillo del Sol iluminaba la esquina", time: 31 },
  { text: "Lo sentía tan cercano, Lo sentía desde niña", time: 39 },
  { text: "Ella sabía que él sabia que algún día pasaría", time: 45 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 50 },
  { text: "no te apures, no detengas, el instante del encuentro", time: 58 },
  { text: "esta dicho que es un hecho, no la pierdas, no hay derecho", time: 62 },
  { text: "no te olvides que la vida casi nunca está dormida", time: 65.5 },
  { text: "en ese bar tan desierto nos esperaba el encuentro", time: 92 },
  { text: "Ella llegó en limusina, amarilla por supuesto", time: 100 },
  { text: "El se acerco de repente, la miro tan de frente", time: 107 },
  { text: "toda una vida soñada y no pudo decir nada", time: 116 },
  { text: "Ella sabía que él sabia que algún día pasaría", time: 123 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 125 },
  { text: "no te apures, no detengas, el instante del encuentro", time: 135 },
  { text: "esta dicho que es un hecho, no la pierdas, no hay derecho", time: 138 },
  { text: "no te olvides que la vida casi nunca está dormida", time: 141 },
  { text: "FLOREEES AMARILLAAS", time: 159 },
  { text: "Ella sabía que él sabia que algún día pasaría", time: 167 },
  { text: "que vendría a buscarla con sus flores amarillas", time: 172 },
  { text: "no te apures, no detengas, el instante del encuentro", time: 178 },
  { text: "esta dicho que es un hecho, no la pierdas, no hay derecho", time: 183 },
  { text: "no te olvides que la vida casi nunca está dormida", time: 185 },
  { text: "TE QUIEROOOOOOOOOOO MUCHOOOOOOO", time: 189 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.3; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 2500); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);