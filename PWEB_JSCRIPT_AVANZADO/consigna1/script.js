

function inicio(){
    document.getElementById('cadena').addEventListener("click", analizarCadena)
}

function analizarCadena() {
    // Obtener el valor del input
    let texto = document.getElementById('textoInput').value;

    // Dividir la cadena en palabras utilizando split()
    let palabras = texto.split(/\s+/);

    // Número de palabras
    let numPalabras = palabras.length;

    // Primera palabra
    let primeraPalabra = palabras[0];

    // Última palabra
    let ultimaPalabra = palabras[numPalabras - 1];

    // Palabras en orden inverso
    let palabrasInverso = palabras.slice().reverse().join(' '); //Guardo la palabra para despues invertir los caracteres, y despues de invertirlo, lo agrego al array con "join"

    // Palabras ordenadas de la a la z
    let palabrasAZ = palabras.slice().sort().join(' ');  //Guardo la palabra para despues ordenar los caracteres, y despues de ordenar, lo agrego al array con "join"

    // Palabras ordenadas de la z a la a
    let palabrasZA = palabras.slice().sort().reverse().join(' ');

    // Mostrar la información en el div de resultado
    let resultado = `
        Número de palabras: ${numPalabras}<br>
        Primera palabra: ${primeraPalabra}<br>
        Última palabra: ${ultimaPalabra}<br>
        Palabras en orden inverso: ${palabrasInverso}<br>
        Palabras ordenadas de la a la z: ${palabrasAZ}<br>
        Palabras ordenadas de la z a la a: ${palabrasZA}
    `;

    document.getElementById('resultado').innerHTML = resultado;
}

window.onload = inicio;
