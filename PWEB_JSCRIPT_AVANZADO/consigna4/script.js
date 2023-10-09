function inicio() {
    let elementos = document.getElementById('elemento');
    elementos.addEventListener("mouseenter", ocultarElementos);
    document.getElementById('mostrar').addEventListener("click", MostrarElementos);
}

function ocultarElementos() {
    let elementos = document.getElementById('elemento');
    elementos.style.display = 'none';
}

function MostrarElementos() {
    let elementos = document.getElementById('elemento');
    elementos.style.display = 'block';
}

window.onload = inicio;