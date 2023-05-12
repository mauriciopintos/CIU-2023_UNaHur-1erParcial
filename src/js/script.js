// var mensaje = 'Hola mundo'
// console.log(mensaje);
// alert(mensaje);

//Mostrar el formulario
function mostrarFormulario(id, url) {
    let formularioFlotante = document.getElementById(id);
    let req = new XMLHttpRequest();
    req.onreadystatechange = function() {
      if (req.readyState === 4 && req.status === 200) {
        formularioFlotante.innerHTML = req.responseText;
        formularioFlotante.style.display = "block";
      }
    };
    req.open("GET", url, true);
    req.send();
}

// // Ocultar el formulario
function ocultarFormulario(id) {
  document.getElementById(id).style.display = "none";
}

// document.getElementById("formulario-flotante").addEventListener("click", function(event) {
//     if (event.target === this) {
//       this.style.display = "none";
//     }
//   });


// document.getElementById("cerrar").addEventListener("click", ocultarFlotante);
function cargarPais(){
  // TODO
}

function agregarDato(){
  // TODO
}

// Evento de clic para cambiar el tema
document.getElementById("tema").addEventListener("click", function(evento) {
  evento.preventDefault(); // prevenir el comportamiento predeterminado del enlace
  document.body.classList.toggle("dark"); // alternar la clase "dark" en el cuerpo del documento
});
