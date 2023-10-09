function inicio(){
    document.getElementById("primerinput").addEventListener("keydown", consola); //El evento que "escucho", es el de la tecla presionandose.
    document.getElementById("inpQuitarVocales").addEventListener("click", QuitarVocales);
    setInterval(hola,5000);
}

function consola(event){ //Mi funcion consola tiene como parametro el objeto evento.
    console.log('Tecla. '+ event.key); // Muestro por consola la tecla que se presiono
}

function QuitarVocales(){
    let texto = document.getElementById("primerinput");
    texto.value = texto.value.replace(/[aeiouAEIOU]/g,'')
}

function hola(){
    console.log(Date());
}


window.onload = inicio;
