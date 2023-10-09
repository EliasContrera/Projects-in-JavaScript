//elias contrera
function inicio() {
    document.getElementById("formu").addEventListener("submit", enviarFormulario);
    document.getElementById("btnOrdenar").addEventListener("click", ordenarAlfabeticamente);

}

function enviarFormulario(evento) {
    evento.preventDefault();

    if (ValidarInputs()) { //Si la funcion agregarFilas devuelve true, cumple la condicion; entra al IF
        let resultado = validarNotas(); //La variable resultado almacena el valor retornado por las notas validadas
        console.log(resultado);

        if (resultado !== null) { //Si el resultadao es distinto de nulo, significa que las validaciones son correctas
            AgregarFilas(resultado); //Llamo a la funcion para agregar las filas, y le paso por parametro el resultado almacenado
        }
    }
}


function ValidarInputs() {
    let nombre = document.getElementById('nombre').value;
    let documento = document.getElementById('Documento').value;


    let palabras = nombre.split(/\s+/);

    let claseNombre = document.getElementById('nombre');
    claseNombre.classList.remove("is-invalid");

    let clasetipo = document.getElementById('tipo');
    clasetipo.classList.remove("is-invalid");

    let claseDocumento = document.getElementById('Documento');
    claseDocumento.classList.remove("is-invalid");

    let claseParcial_1 = document.getElementById('Parcial_1');
    claseParcial_1.classList.remove("is-invalid");

    let claseParcial_2 = document.getElementById('Parcial_2');
    claseParcial_2.classList.remove("is-invalid");

    let claseRecuperatorio_1 = document.getElementById('Recuperatorio_1');
    claseRecuperatorio_1.classList.remove("is-invalid");

    let claseRecuperatorio_2 = document.getElementById('Recuperatorio_2');
    claseRecuperatorio_2.classList.remove("is-invalid");  
    

    if (palabras.length !== 2 ){
            console.log('Debes ingresar nombre y apellido solamente.');
            claseNombre.classList.add("is-invalid");
            let exampleModal = new bootstrap.Modal(document.getElementById('myModal'));
            exampleModal.show();
            return false;

    }  

    for (let cadena of palabras){
        if(cadena.length < 3 || cadena.length > 30){
            claseNombre.classList.add("is-invalid");

            console.log('MAL RANGO PALABRAS');
            let exampleModal = new bootstrap.Modal(document.getElementById('myModal'));
            exampleModal.show();
            return false;
        }
    }


    let seleccion = document.getElementById("tipo");
    let valorSeleccionado = seleccion.value;

    let expresionRegDNI = /^\d{1,2}\.?\d{3}\.?\d{3}$/
    let expresionRegLCLE = /^\d{1,3}\.?\d{2}\.?\d{3}$/

    if(valorSeleccionado==='DNI'){
        console.log("Hiciste clic en DNI"); //Muestro los equipos del grupo FAC
        if(!expresionRegDNI.test(documento)){
            claseDocumento.classList.add("is-invalid");
            console.log('invalido DNI');
            let exampleModal = new bootstrap.Modal(document.getElementById('myModal'));
            exampleModal.show();
            return false;
        }
    }else if(valorSeleccionado==='LC/LE'){
        console.log("Hiciste clic en LC/LE"); //Muestro los equipos del grupo HADZS
        if(!expresionRegLCLE.test(documento)){
            claseDocumento.classList.add("is-invalid");
            console.log('invalido DNI');
            let exampleModal = new bootstrap.Modal(document.getElementById('myModal'));
            exampleModal.show();
            return false;
        }
    
    }

    let resultado = validarNotas();

    if (resultado === null) {
        return false;
    }

    return true;
}

function ordenarAlfabeticamente() {
    let MiTabla = document.getElementById('MiTabla');
    let filas = Array.from(MiTabla.rows).slice(1); //Interpreto a las filas como un array, salteando la primer fila con el metodo slice

    filas.sort((fila1, fila2) => {
        let nombre1 = fila1.cells[0].textContent.trim().toLowerCase(); //Uso metodos trim y tolowercase para 1, eliminar los espacios y 2, convertir los caracteres a minusculas
        let nombre2 = fila2.cells[0].textContent.trim().toLowerCase();
        return nombre1.localeCompare(nombre2);
    });

    while ( MiTabla.rows.length > 1){
        MiTabla.deleteRow(1); //Elimino todas las filas de la tabla, excepto la primera
    }

    filas.forEach((fila) => {
        MiTabla.appendChild(fila); //Agrego una por una las filas ordenadas de mi array filas.
    });

}

function validarNotas() {
    let resultado;

    let parcial1 = document.getElementById('Parcial_1').value;
    let parcial2 = document.getElementById('Parcial_2').value;
    let recuperatorio1 = document.getElementById('Recuperatorio_1').value;
    let recuperatorio2 = document.getElementById('Recuperatorio_2').value;

    let numeroPar1 = parseFloat(parcial1);
    let numeroPar2 = parseFloat(parcial2);
    let numeroRec1 = parseFloat(recuperatorio1);
    let numeroRec2 = parseFloat(recuperatorio2);
    // Validación de notas
    if (!isNaN(numeroRec1) && !isNaN(numeroRec2) && (numeroRec1 >= 1 && numeroRec1 <= 10) && (numeroRec2 >= 1 && numeroRec2 <= 10)) {
        // Si se ingresaron notas de recuperatorio, uso estas para calcular el resultado

        console.log(resultado);
        resultado = (numeroRec1 + numeroRec2) / 2;
    } else if(!isNaN(numeroRec1) && isNaN(numeroRec2)){
        numeroPar1 = numeroRec1; //Si hubo recuperatorio 1, el parcial1 se reemplaza con la nota de dicho recuperatorio
        console.log(resultado);
        resultado = (numeroPar1 + numeroPar2) / 2;
    }else if (!isNaN(numeroRec2) && isNaN(numeroRec1)){
        numeroPar2 = numeroRec2;
        console.log(resultado);
        resultado = (numeroPar1 + numeroPar2) / 2;
    }else{
        
        if (isNaN(numeroPar1) || numeroPar1 < 1 || numeroPar1 > 10) {
            console.log('Valor inválido en el 1er. Parcial');
            claseParcial_1.classList.add("is-invalid");
            let exampleModal = new bootstrap.Modal(document.getElementById('myModal'));
            exampleModal.show();
            return null;
        }if (isNaN(numeroPar2) || numeroPar2 < 1 || numeroPar2 > 10) {
            console.log('Valor inválido en el 2do. Parcial');
            claseParcial_2.classList.add("is-invalid");
            let exampleModal = new bootstrap.Modal(document.getElementById('myModal'));
            exampleModal.show();
            return null;
        

        // Si no hay notas de recuperatorio, solo uso los parciales para calcular el resultado
        }   
    console.log(resultado);
    resultado = (numeroPar1 + numeroPar2) / 2;

    }
    console.log(resultado);
    return resultado;
}


function AgregarFilas(resultado) {
    let nombre = document.getElementById('nombre').value;
    let Opcion = document.getElementById('tipo');
    let tipo = Opcion.options[Opcion.selectedIndex].value;
    let documento = document.getElementById('Documento').value;

    let parcial1 = document.getElementById('Parcial_1');
    let numeroPar1 = parseInt(parcial1.value);

    let parcial2 = document.getElementById('Parcial_2');
    let numeroPar2 = parseInt(parcial2.value);

    let recuperatorio1 = document.getElementById('Recuperatorio_1');
    let numeroRec1 = parseInt(recuperatorio1.value);

    let recuperatorio2 = document.getElementById('Recuperatorio_2');
    let numeroRec2 = parseInt(recuperatorio2.value);

    let tabla = document.getElementById('MiTabla');
    let nuevaFila = tabla.insertRow();
    let celda1 = nuevaFila.insertCell(0);
    let celda2 = nuevaFila.insertCell(1);
    let celda3 = nuevaFila.insertCell(2);
    let celda4 = nuevaFila.insertCell(3);
    let celda5 = nuevaFila.insertCell(4);
    let celda6 = nuevaFila.insertCell(5);
    let celda7 = nuevaFila.insertCell(6);
    let celda8 = nuevaFila.insertCell(7);

    celda1.innerHTML = nombre;
    celda2.innerHTML = tipo;
    celda3.innerHTML = documento;
    celda4.innerHTML = numeroPar1;
    celda5.innerHTML = numeroPar2;
    celda6.innerHTML = numeroRec1;
    celda7.innerHTML = numeroRec2;

    if (resultado === 0) {
        celda8.innerHTML = 'Ausente';
        celda8.classList.add("td_nota_ausente");
    } else if (resultado < 4) {
        celda8.innerHTML = 'Recursa';
        celda8.classList.add("td_nota_reprobado");
    } else if (resultado >= 4 && resultado < 7) {
        celda8.innerHTML = 'A Final';
        celda8.classList.add("td_nota_aprobado");
    } else if (resultado >= 7 && resultado <= 10) {
        celda8.innerHTML = 'Promociona';
        celda8.classList.add("td_nota_promocionado");
    }

    document.getElementById("formu").reset();

}

window.onload = inicio;