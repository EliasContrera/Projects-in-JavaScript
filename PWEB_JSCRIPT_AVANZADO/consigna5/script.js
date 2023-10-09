function incicio(){
    document.getElementById('enviar').addEventListener('click', validaciones);
    document.getElementById('agregarIncidente').addEventListener('click', agregarIncidente);
    document.getElementById('modificarIncidente').addEventListener('click', modificarIncidente);

}

function validaciones() {

    let fechaInput = document.getElementById('fecha');
    let fecha = new Date(fechaInput.value);

    let fechaInicio = new Date('2017-09-01');
    let fechaFin = new Date('2023-09-14');

    if (!isNaN(fecha.getTime()) && fecha >= fechaInicio && fecha <= fechaFin) {
        console.log('La fecha ingresada está dentro del rango permitido.');
    } else {
        console.log('La fecha ingresada está fuera del rango permitido o es inválida.');
    }

    ///////////////////////////////////////////////////////////////////////////////////////////
    let textoInput = document.getElementById('nombre').value;

    if (textoInput.length > 50) {
        console.log('Texto superior a 50 caracteres');
    } else {
        let palabras = textoInput.split(/\s+/);
        if (palabras.length !== 2) {
            console.log('Debes ingresar nombre y apellido solamente.');
        } else {
            console.log('Cumple el criterio de 2 palabras y no excede los 50 caracteres.');
        }
    }

    //////////////////////////////////////////////////////////////////////////////////////
    
    let edadInput = document.getElementById('edad').value;
    let num = parseInt(edadInput);

    if (!isNaN(num) && num > 18 && num < 85) {
        console.log('Número válido');
    } else {
        console.log('Número inválido o fuera del rango permitido (18 - 85).');
    }

}

function agregarIncidente(){
    let inputTexto = document.getElementById('nuevoIncidente').value;

    if(inputTexto === ""){
        console.log('Error, input vacio');
        return;
    }

    let selectHtml = document.getElementById("incidentes");

    let nuevaOpcion = document.createElement("option");

    nuevaOpcion.value = inputTexto;
    nuevaOpcion.text = inputTexto;

    selectHtml.appendChild(nuevaOpcion);

}

function modificarIncidente(){
    console.log('La función modificarIncidente() se está ejecutando');

    let incidenteMod = document.getElementById('incidentes');
    let inputTexto = document.getElementById('nuevoIncidente').value;
    if(inputTexto === "" ){
        console.log('Error, input vacio');
        return;
    }

    let obtenerOpcion = incidenteMod.selectedIndex;

    if(obtenerOpcion !== -1){
        let opcion = incidenteMod.options[obtenerOpcion];

        
        opcion.value = inputTexto;
        opcion.text = inputTexto;
        


    }else{
        console.log("No se selecciono una opcion");
    }
}



window.onload = incicio;