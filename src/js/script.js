/* DECLARACION DE FUNCIONES PARA UTILIZAR DESDE HTML*/
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

// Evento de clic para cambiar el tema
document.getElementById("tema").addEventListener("click", function(evento) {
  evento.preventDefault();
  document.body.classList.toggle("dark");
});