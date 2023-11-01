// 7. Eventos onFocus y onBlur. Diseña un formulario de contacto. En él deben aparecer
// campos para introducir el nombre, correo y el comentario que se desee mandar, así
// como dos botones para enviar o resetear. Haciendo uso de los eventos anteriores
// debes mostrar un mensaje de ayuda (o descriptivo) de la caja o botón en el que se
// encuentre el foco. Igualmente debe desaparecer al cambiar el foco a otro elemento.

let nombre = document.getElementById("nombre")
let correo = document.getElementById("correo")
let comentario = document.getElementById("comentario")

nombre.addEventListener("focus", function() {
    nombre.placeholder = "Escibre tu nombre";
});
nombre.addEventListener("blur",function () {
    nombre.placeholder = ""
})


correo.addEventListener("focus", function() {
    correo.placeholder = "Escibre tu correo";
});
correo.addEventListener("blur",function () {
    correo.placeholder = ""
})

comentario.addEventListener("focus", function() {
    comentario.placeholder = "Escibre tu comentario";
});
comentario.addEventListener("blur",function () {
    comentario.placeholder = ""
})

