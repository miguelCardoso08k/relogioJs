const msg = window.document.getElementById("msg");
const foto = window.document.getElementById("foto");
let data;
let horas;
let $minutos;

const relogio = setInterval(function () {
  time();
  imagens();
  background();
});

function time() {
  data = new Date();
  horas = 19;
  $minutos = data.getMinutes();

  if (horas < 10) horas = "0" + horas;
  if ($minutos < 10) $minutos = "0" + $minutos;

  msg.innerHTML = `<p>Agora são ${horas}:${$minutos}<p>`;
}

function imagens() {
  if (horas > 0 && horas < 12) {
    foto.src = "assets/imagens/manha.jpg";
  } else if (horas > 12 && horas < 18) {
    foto.src = "assets/imagens/tarde.jpg";
  } else {
    foto.src = "assets/imagens/noite.jpg";
  }
}

function background() {
  if (horas > 0 && horas < 12) {
    document.body.style.background = "#E5CC83";
  } else if (horas > 12 && horas < 18) {
    document.body.style.background = "#F59B53";
  } else {
    document.body.style.background = "#0A2761";
  }
}
