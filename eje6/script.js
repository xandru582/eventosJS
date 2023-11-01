// Eventos onMouseOver y onMouseOut. Vamos a crear una página en la que el usuario
// pueda averiguar el color representado por una secuencia en hexadecimal. Para ello tu
// página debe mostrar un título (debe ser una imagen), un texto explicando el cometido
// de tu página y una tabla en la que aparezcan las 12 codificaciones en hexadecimal de
// los principales colores (por ejemplo el 0000FF es el color azul). Haciendo uso de los
// eventos anteriores debes proporcionar la siguiente funcionalidad:
// ◦ Al colocar el puntero sobre el título el color de éste debe cambiar (a otra
// imagen que tú decidas). Al dejar de estar sobre el título, éste debe volver a su
// color original.
// ◦ Si se coloca el puntero sobre cualquiera de los valores en hexadecimal se debe
// colorear la entrada con el color en HTML que está representando. Al dejar de
// estar sobre ese valor, se debe mostrar el nombre del color en lugar del código.
// (Por ejemplo, al colocarme sobre el #0000FF, ésta entrada se muestra en azul,
// y al salir automáticamente se cambia ese valor por la cadena “azul”).

let cabecera = document.querySelector(".cabecera")
cabecera.style.backgroundImage="url(resort.jpg)";
cabecera.style.backgroundRepeat = "no-repeat";
cabecera.style.backgroundPosition = "center center";
cabecera.style.backgroundSize = "cover";
cabecera.style.height = "200px"


let colores = document.getElementsByClassName("color");
Array.from(colores).forEach(function(element) {
    element.addEventListener("mouseover", function() {
        element.style.backgroundColor = element.textContent;
    });
    element.addEventListener("mouseout", function() {
        element.style.backgroundColor = "#FFF";
    });
});
