function inicio() {
    document.getElementById("eliminar").addEventListener("click", EliminarFilas);
    document.getElementById("agregar").addEventListener("click", AgregarFilas);

}
function EliminarFilas(){
    let tabla = document.getElementById('MiTabla');
    let filas = tabla.getElementsByTagName('tr');

    for (let i = filas.length - 1; i >=0; i--){ // "recorro" la tabla, y luego compruebo el indice de la fila
        if (i % 2 === 0){
            tabla.deleteRow(i); //Se elimina la fila si el resultado dio numero par
        }
    }
}
function AgregarFilas(){
    let tabla = document.getElementById('MiTabla');

    let datoCelda1 = document.getElementById('celda1').value; // Tomo los valores que se ingresaron en los inputs (referenciados con us respectivos ID's)
    let datoCelda2 = document.getElementById('celda2').value;

    if(datoCelda1 !== '' && datoCelda2 !== ''){
        let TomoNumero = tabla.rows[tabla.rows.length -1].cells[0]; //Ultima Fila, Primera celda
        let ValorCelda0 = parseInt(TomoNumero.innerHTML) || 0; //Tomo el valor actual de la celda y lo interpreto como entero o, si es NaN, el valor pasa a ser 0.
        ValorCelda0 +=1; //Al valor le sumo 1

        let nuevaFila = tabla.insertRow();  // Aca estoy agregando una nueva fila a la tabla

        let celda0 = nuevaFila.insertCell(0);
        let celda1 = nuevaFila.insertCell(1); //Una vez agregue la fila a la tabla, le agrego celdas (como mi tabla usa 3, pongo solo 3)
        let celda2 = nuevaFila.insertCell(2);
    
        celda0.innerHTML = ValorCelda0;
        celda1.innerHTML = datoCelda1; //Los datos que guardo en las celdas son los mismos que tome de los inputs
        celda2.innerHTML = datoCelda2;
    
        document.getElementById('celda1').value = ''; //Vacio los inputs para que el usuario pueda volver a
        document.getElementById('celda2').value = '';
    }else{
        console.log('Los campos estan vacios.');
    }
}

window.onload = inicio;