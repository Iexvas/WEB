// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Y hace falta que te diga", time: 17},
  { text: "¿Qué me muero por tener algo contigo?", time: 20 },
  { text: "Y es que no te has dado cuenta", time: 27 },
  { text: "¿De lo mucho que me cuesta ser tu amigo?", time: 29 },
 
  { text: "Ya no puedo acercarme a tu boca", time: 35 },
  { text: "Sin deseártela de una manera loca", time: 40 },
  { text: "Necesito controlar tu vida", time: 44 },
  { text: "Saber quién te besa y quién te abriga", time: 47 },
  { text: "Y hace falta que te diga", time: 54 },
  { text: "¿Qué me muero por tener algo contigo?", time: 57 },
  { text: "Y es que no te has dado cuenta", time: 64 },
  { text: "¿De lo mucho que me cuesta ser tu amigo?", time: 66 },
  { text: "Ya me quedan muy pocos caminos", time: 72 },
  { text: "Y aunque pueda parecerte un desatino", time: 77 },
  { text: "No quisiera yo morirme sin tener algo contigo", time: 82 },
  { text: "", time: 91 },
  { text: "Ya no puedo continuar espiando", time: 109},
  { text: "Día y noche y tú llegar adivinando", time: 114 },
  { text: "Ya no sé con qué inocente excusa pasar por tu casa", time: 119 },
  { text: "Y me quedan muy pocos caminos", time: 128 },
  { text: "Y aunque pueda parecerte un desatino", time: 133 },
  { text: "No quisiera yo morirme sin tener algo contigo", time: 137 },
  { text: "", time: 150 }, // Pausa
  { text: "Ya no puedo continuar espiando", time: 245 },
  { text: "Día y noche y tú llegar adivinando", time: 249 },
  { text: "Ya no sé con qué inocente excusa pasar por tu casa", time: 255 },
  { text: "Y me quedan muy pocos caminos", time: 262 },
  { text: "Y aunque pueda parecerte un desatino", time: 267 },
  { text: "No quisiera yo morirme sin tener algo contigo", time: 271 },

  { text: "Algo contigo", time: 280 },
  { text: "Algo contigo", time: 287 },
];

// Animar las letras
function updateLyrics() {
  const t = audio.currentTime;

  // buscar el último verso cuyo tiempo <= t
  let i = -1;
  for (let idx = lyricsData.length - 1; idx >= 0; idx--) {
    if (t >= lyricsData[idx].time) {
      i = idx;
      break;
    }
  }

  if (i !== -1) {
    const line = lyricsData[i];
    const fadeIn = 1.5;
    const opacity = Math.min(1, Math.max(0, (t - line.time) / fadeIn));

    // actualizar texto solo cuando cambie
    if (lyrics.innerHTML !== line.text) {
      lyrics.innerHTML = line.text;
    }
    // pero la opacidad siempre se actualiza
    lyrics.style.opacity = opacity;
  } else {
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
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);