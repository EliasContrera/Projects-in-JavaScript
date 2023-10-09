
function inicio(){
    document.getElementById("suma").addEventListener("click", Sumar);
    document.getElementById("resta").addEventListener("click", Restar);
    document.getElementById("multiplicar").addEventListener("click", Multiplicar);
    document.getElementById("dividir").addEventListener("click", Dividir);
    document.getElementById("raiz").addEventListener("click", Raiz);
    document.getElementById("seno").addEventListener("click", Seno);
    document.getElementById("coseno").addEventListener("click", Coseno);
}

function Sumar() {
    

    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    let entero1 = parseFloat(numero1, 10); 
    let entero2 = parseFloat(numero2, 10);

    if (!isNaN(entero1) && !isNaN(entero2)) { //Si son ambos numeros son distintos a "NaN (not an number)", ejecuta la suma, sino, muestra el mensaje por un alert

        let suma = entero1 + entero2; //guardo la suma en la variable suma
        let total = document.getElementById('parrafo'); // variable total la uso para mostrar en la pagina el resultado
    
        total.innerHTML = 'El resultado es: ' + suma; // ahora muestro el resultado en la pagina

    } else {
        alert("Ingresa números válidos en ambos campos.");
    }
}

function Restar() {
    
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    let entero1 = parseInt(numero1, 10);
    let entero2 = parseInt(numero2, 10);

    if (!isNaN(entero1) && !isNaN(entero2)) {
      
        let resta = entero1 - entero2;
        alert("La resta es: " + resta);
    } else {
        alert("Ingresa números válidos en ambos campos.");
    }
}

function Multiplicar(){
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    let entero1 = parseInt(numero1, 10);
    let entero2 = parseInt(numero2, 10);

    if (!isNaN(entero1) && !isNaN(entero2)) {
       
        let resultado = entero1 * entero2;
        alert("El resultado de la multiplicacion es: " + resultado);
    } else {
        alert("Ingresa números válidos en ambos campos.");
    }
}


function Dividir(){
    let numero1 = document.getElementById('numero1').value;
    let numero2 = document.getElementById('numero2').value;

    let entero1 = parseInt(numero1, 10);
    let entero2 = parseInt(numero2, 10);

    if (!isNaN(entero1) && !isNaN(entero2)) {
       
        let resultado = entero1 / entero2;
        alert("El resultado de la division es: " + resultado);
    } else {
        alert("Ingresa números válidos en ambos campos.");
    }
}

function Raiz(){
    let numero1 = document.getElementById('numero1').value;
    let resultado = Math.sqrt(numero1);
    if(!isNaN(numero1)){
        alert("La raiz cuadrada de [" + numero1 + "] es: " + resultado);
    }else{
        alert("Numero Invalido");
    }
}

function Seno(){
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let anguloradian = (numero1 * Math.PI )/ 180
    let resultado = Math.sin(anguloradian);

    if(!isNaN(numero1)){
        alert("El seno de [" + numero1 + "] es: " + resultado);
    }else{
        alert("Número Inválido");
    }
}


window.onload = inicio;