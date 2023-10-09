let flag = false;

function MostrarParrafo(){
    document.getElementById('parrafo').style.display = 'block';
}

function OcultarParrafo(){
    document.getElementById('parrafo').style.display = 'none';
}

function inicio() {
    document.getElementById("boton").addEventListener("click", CambiarNombre);
    
}

function CambiarNombre(){
    let boton = document.getElementById('boton');
    if(!flag){
        boton.innerHTML = 'Ocultar Parrafo';
        MostrarParrafo();
        flag = true;
    }else{
        boton.innerHTML = 'Mostrar Parrafo';
        OcultarParrafo();
        flag = false;
    }
}


window.onload = inicio;
