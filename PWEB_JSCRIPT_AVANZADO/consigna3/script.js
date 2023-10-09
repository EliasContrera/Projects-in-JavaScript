function inicio() {
    document.getElementById('enviar').addEventListener("click", verificarNumero);
}

function verificarNumero() {
    let numeroInput = document.getElementById("numero");
    let num = parseInt(numeroInput.value);

    if (num >= 1 && num <= 923) {
        document.getElementById('resultado').textContent = 'El valor está comprendido entre 1 y 923';
    } else {
        document.getElementById('resultado').textContent = 'El valor NO está comprendido entre 1 y 923';
    }
}

window.onload = inicio;