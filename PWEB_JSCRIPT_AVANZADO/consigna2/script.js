function actualizarReloj() {
    let reloj = document.getElementById('reloj'); //Tomo el id del parrafo 'reloj' para mostrarlo en la pagina
    let fechaActual = new Date(); //Creo el objeto de tipo "Date" para trabajar con las fechas

    
    let formateo = {  //Aca defino las propiedades del formateo
    diasemana: 'long', 
    año: 'numeric', 
    mes: 'long', 
    day: 'numeric', 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' };

    let fechaHoraFormateada = fechaActual.toLocaleDateString('es-ES', formateo); //Guardo el formateo de la fecha y hora

    //El contenido del parrafo se actualiza la fecha y la hora formateada.
    reloj.innerHTML = fechaHoraFormateada;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);

// Mostrar la hora actual inmediatamente
window.onload = actualizarReloj();