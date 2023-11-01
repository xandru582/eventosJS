// Crea una página web que haciendo uso de eventos permita arrastrar una imagen
// haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
// el botón).


let pArrastrable = document.getElementById("pArrastrar")
pArrastrable.addEventListener("click" ,function () {
    pArrastrable.draggable="true"
})

let imagenes = document.getElementsByTagName("img")

Array.from(imagenes).forEach(element => {
    element.addEventListener("click",function () {
        element.draggable="true"
    })
});