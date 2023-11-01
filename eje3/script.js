// Haciendo uso del evento onLoad, muestra el tiempo transcurrido desde la carga de la
// página.

//QUiero que me de cuanto tiempo ha tardado en cargar la web


var inicioCarga = new Date().getTime(); // Guarda el tiempo justo cuando inicia el script

window.onload = function(){
    var finCarga = new Date().getTime(); // Guarda el tiempo justo después de que la página ha cargado
    var tiempoTranscurrido = finCarga - inicioCarga; // Calcula el tiempo transcurrido

    console.log(tiempoTranscurrido);
    document.getElementById("tiempo").innerHTML = tiempoTranscurrido + " ms";
}
