function myFuncton() {
    document.getElementById("demo").innerHTML = "Segundo parrafo";
}

function inicio() {
    document.getElementById("boton").addEventListener("click", myFuncton);
}

window.onload = inicio;

console.log('test');