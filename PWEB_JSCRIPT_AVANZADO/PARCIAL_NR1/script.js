function inicio() {
    document.getElementById("formu").addEventListener("submit", submitFormulario);
    document.getElementById('cobertura').addEventListener("change", MostrarSelect); //Por cada select, escucho el "cambio" del mismo
    document.getElementById('especialidad').addEventListener("change", MostrarMedicos);
}

function submitFormulario(evento){
    evento.preventDefault(); 
    if  (ValidarInputs() && MostrarMedicos() && MostrarSelect() ){ //Si todas las funciones devuelven true, muestro el modal
        mostrarModal();
        document.getElementById("formu").reset(); //Una vez que reinicio los inputs del formulario, oculto todos los selects
        document.getElementById("medicosInmunologia").classList.remove("mostrarInmunologia");
        document.getElementById("medicosInmunologia").classList.add("medicosInmunologia");
        document.getElementById("medicoTraumatologia").classList.add("medicoTraumatologia");
        document.getElementById("medicoTraumatologia").classList.remove("mostrarmedicoTraumatologia");
        document.getElementById("medicoTraumatologia").classList.add("medicoNeumonologia");
        document.getElementById("medicoTraumatologia").classList.remove("mostrarNeumonologia");
        document.getElementById("obraoculta").classList.remove("obrasocial-visible");
        document.getElementById("obraoculta").classList.add("ObraSocialOculta");

    }
}

function mostrarModal(){
    let exampleModal = new bootstrap.Modal(document.getElementById('myModal'));
    exampleModal.show(); //Muesstro el modal 

}

function MostrarSelect(){

    let seleccion = document.getElementById("cobertura");
    let valorSeleccionado = seleccion.value; //Tomo el valor del select para trabajar con sus respectivas opciones
    
    seleccion.classList.remove("is-invalid");


    
    if(valorSeleccionado==='Obra Social' || valorSeleccionado ==='Prepaga'){
            console.log("Selecciono prepaga u obra social"); //Si se selecciona obrasocial o prepaga, dejo de ocultar el select y lo muestro en la pagina
            document.getElementById("obraoculta").classList.remove("ObraSocialOculta");
            document.getElementById("obraoculta").classList.add("obrasocial-visible");
            return true;
    }else if(valorSeleccionado==='Particular'){
        document.getElementById("obraoculta").classList.remove("obrasocial-visible"); //Sin enmbargo, para que se oculte y muestre en tiempo real, uso como condicion el 'particular
        document.getElementById("obraoculta").classList.add("ObraSocialOculta");
        return true;
    }else if(valorSeleccionado===''){ //Si no selecciono nada y dejo el campo vacio, muestro en la pagina el error y tambien retorno falso para evitar el envio de formulario
        seleccion.classList.add("is-invalid");
        return false;
    }
    return true;
}



function MostrarMedicos(){ //En esta funcion trabajo mostrando y ocultando los selects
    let seleccion = document.getElementById("especialidad");
    let valorSeleccionado = seleccion.value;
    seleccion.classList.remove("is-invalid");

    
    if(valorSeleccionado==='Alergia e Inmunologia'){ //Si selecciono esta opcion, la muestro en la pagina y oculto las demass
        document.getElementById("medicosInmunologia").classList.remove("medicosInmunologia");
        document.getElementById("medicosInmunologia").classList.add("mostrarInmunologia");

        document.getElementById("medicoTraumatologia").classList.add("medicoTraumatologia");
        document.getElementById("medicoTraumatologia").classList.remove("mostrarmedicoTraumatologia");

        document.getElementById("medicoTraumatologia").classList.add("medicoNeumonologia");
        document.getElementById("medicoTraumatologia").classList.remove("mostrarNeumonologia");

        return true; 
    }else if(valorSeleccionado==='Traumatologia'){
        document.getElementById("medicoTraumatologia").classList.remove("medicoTraumatologia");
        document.getElementById("medicoTraumatologia").classList.add("mostrarmedicoTraumatologia");

        document.getElementById("medicosInmunologia").classList.remove("mostrarInmunologia");
        document.getElementById("medicosInmunologia").classList.add("medicosInmunologia");

        document.getElementById("medicoTraumatologia").classList.add("medicoNeumonologia");
        document.getElementById("medicoTraumatologia").classList.remove("mostrarNeumonologia");

        return true;
    }else if(valorSeleccionado==='Neumonologia'){
        document.getElementById("medicoTraumatologia").classList.remove("medicoNeumonologia");
        document.getElementById("medicoTraumatologia").classList.add("mostrarNeumonologia");

        document.getElementById("medicosInmunologia").classList.remove("mostrarInmunologia");
        document.getElementById("medicosInmunologia").classList.add("medicosInmunologia");

        document.getElementById("medicoTraumatologia").classList.add("medicoTraumatologia");
        document.getElementById("medicoTraumatologia").classList.remove("mostrarmedicoTraumatologia");

        return true;
    }else if(valorSeleccionado === ''){
        document.getElementById("medicosInmunologia").classList.remove("mostrarInmunologia");
        document.getElementById("medicosInmunologia").classList.add("medicosInmunologia");
        document.getElementById("medicoTraumatologia").classList.add("medicoTraumatologia");
        document.getElementById("medicoTraumatologia").classList.remove("mostrarmedicoTraumatologia");
        document.getElementById("medicoTraumatologia").classList.add("medicoNeumonologia");
        document.getElementById("medicoTraumatologia").classList.remove("mostrarNeumonologia");

        seleccion.classList.add("is-invalid");
        return false; //Si no selecciono nada, retorno falso
    }

    return true;
}


function ValidarInputs(){
    let nombre = document.getElementById('nombre').value;
    //variable palabras para guardar la cantidad de palabras del input
    let palabras = nombre.split(/\s+/); //Utilizo el metodo split para dividir las palabras cada vez que se encuentre un espacio en blanco con la expresion regular /\s+/
    let documento = document.getElementById('Documento').value;
    let numeroDNI = parseInt(documento);


    let inputNombre = document.getElementById('nombre');
    inputNombre.classList.remove("is-invalid");
    let inputDocumento = document.getElementById('Documento');
    inputDocumento.classList.remove("is-invalid");


    if (palabras.length !== 2 ){ //si la cantidad de palabras es diferente de 2, muestro mensaje de error por la pagina y la consola
        console.log('Estrictamente por 2 palabras.');
        inputNombre.classList.add("is-invalid");
        return false;    //retornare falso si la condicion no se cumple, osea si hay error
    }  



    if(isNaN(numeroDNI) || numeroDNI < 100000 || numeroDNI > 99999999){ //El valor del dni debe estar entre este rango, sino, muestor mensaje e rror por pagina y consola
        console.log('El campo numerico no esta entre 100.000 y 99.999.999');
        inputDocumento.classList.add("is-invalid");
        return false;
    }

    return true;
}


window.onload = inicio; //llamo a la funcion inicio