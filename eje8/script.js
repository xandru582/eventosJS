// 8. Imagina que tienes un script en el servidor que no es capaz de tratar el carácter
// ampersand (&) enviado por un formulario. Escribe una función que convierta todos
// los ampersand que se escriban en un campo a “and” cuando el campo pierda el foco.

let comentario = document.getElementById("comentario")

comentario.addEventListener("blur", function () {
    let texto = ""+comentario.value
    texto = texto.replaceAll("&","and")
    console.log(texto);
    comentario.value = texto
})