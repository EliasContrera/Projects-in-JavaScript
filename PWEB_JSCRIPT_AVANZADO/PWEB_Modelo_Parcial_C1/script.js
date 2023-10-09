function inicio() {
    document.getElementById('equipos').addEventListener("change", MostrarGrupos);
    document.getElementById('guardar').addEventListener("click", Validaciones);

}

function MostrarGrupos(){

    let seleccion = document.getElementById("equipos");
    let valorSeleccionado = seleccion.value;


    if(valorSeleccionado==='FAC'){
        console.log("Hiciste clic en FAC"); //Muestro los equipos del grupo FAC
        document.getElementById("HADZ").classList.remove("grupos-visible");
        document.getElementById("FAC").classList.add("grupos-visible"); //agrego la clase que hace visible los grupos


    }else if(valorSeleccionado==='HADZ'){
        console.log("Hiciste clic en hadz"); //Muestro los equipos del grupo HADZS
        document.getElementById("FAC").classList.remove("grupos-visible");
        document.getElementById("HADZ").classList.add("grupos-visible");

    }
}



function Validaciones() {
    console.log("Hiciste clic en 'fecha");

    let claseFecha = document.getElementById('fecha');
    claseFecha.classList.remove("is-invalid");

    let claseTexto = document.getElementById('texto');
    claseTexto.classList.remove("is-invalid");

    let claseHora = document.getElementById('horaFin');
    claseHora.classList.remove("is-invalid");



    // Obtener la fecha ingresada por el usuario en formato YYYY-MM-DD
    let fechaIngresada = document.getElementById('fecha').value;

    // Convertir la fecha ingresada en un objeto Date de JavaScript
    let fecha = new Date(fechaIngresada);

    // Definir las fechas límite de inicio y fin del rango permitido
    let fechaInicio = new Date('2023-01-01');
    let fechaFin = new Date('2023-09-15');

    // Verificar si la fecha está dentro del rango
    if (fecha >= fechaInicio && fecha <= fechaFin) {
        console.log("La fecha ingresada está dentro del rango permitido.");
    } else {
        console.log("Campos incorrectos");

    }

    /////////////////////////////////////////////////////////////
    // horario de inicio y horario de fin ingresados por el usuario
    let horaInicio = document.getElementById('horaInicio').value;
    let horaFin = document.getElementById('horaFin').value;
    //Convierto el horario de inicio y final en objeto Date de javascript, especificando el horario de la fecha ingresada previamente
    let inicio = new Date(fechaIngresada + 'T' + horaInicio );
    let final = new Date(fechaIngresada + 'T' + horaFin );

    let diferenciaMin = (final - inicio) / 1000 / 60; //Hago la diferencia entre el inicio y fin de las horas

    if ( diferenciaMin >= 10 ){ // Si la diferencia da como resto igual o amyor a 10, significa que ambas horas tienen diferencia de almenos 10 minutos
        console.log("La hora de final es mayor por 10 minutos o mas de la de inicio");
    }else{
        console.log("La hora no cumple el requisito.")
        claseHora.classList.add("is-invalid");

    }
    /////////////////////////////////////////////////////////////
    // variable textoinput contiene el texto que se ingreso en el input por el usuario
    let textoInput = document.getElementById('texto').value;

        // la variable palabras contiene la cantidad de palabras que se encontraron en el texto
        // esto se logra gracias al metodo "split", cada vez que encuentre un espacio en blanco, divide la cadena
   let palabras = textoInput.split(/\s+/);  
        if (palabras.length >= 5) { // Verifico que las palabras sean mayor o igual a 5, con la propiedad length de js
            console.log('El texto ingresado tiene almenos 5 palabras o mas.');
        } else {
            claseTexto.classList.add("is-invalid");

            console.log('Ingresar almenos 5 palabras o mas.');

        }
}


window.onload = inicio;