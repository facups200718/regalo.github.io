const button = document.getElementById('button');
const gift = document.getElementById('gift');

button.addEventListener('click', () => {
  gift.classList.add('open');
  message.classList.add('show-message');
});

function createShine() {
  var shine = document.createElement("div");
  shine.classList.add("shine");
  var x = Math.random() * window.innerWidth;
  var y = Math.random() * window.innerHeight;
  shine.style.top = y + "px";
  shine.style.left = x + "px";
  document.body.appendChild(shine);

  // Aumentar la opacidad y el tamaño del brillo
  setTimeout(function() {
    shine.style.opacity = 0.7;
    shine.style.transform = "scale(2)";
  }, 0);

  // Desvanecer y eliminar el brillo después de 1 segundo
  setTimeout(function() {
    shine.style.opacity = 0;
    shine.style.transform = "scale(0)";
    setTimeout(function() {
      document.body.removeChild(shine);
    }, 1000);
  }, 1000);
}


// Evento click del botón
button.addEventListener("click", function() {
  // Crear 10 brillos con un intervalo de 100ms
  for (var i = 0; i < 10; i++) {
    setTimeout(createShine, i * 100);
  }
});

function cambiarTextoBoton() {
  // Obtener el botón por su ID
  var boton = document.getElementById("button");
  // Cambiar el texto del botón
  boton.innerHTML = "Brillitos";
}
