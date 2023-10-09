function inicio() {
    document.getElementById("boton").addEventListener("click", AgregarClase);
}

function AgregarClase() {
    let modificarclases = document.getElementById('cambiar');

    if (modificarclases) { // no sea null
        modificarclases.classList.add('parrafo_resaltado');
    }
}

window.onload = inicio