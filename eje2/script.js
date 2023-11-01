// 2. Captura el movimiento del ratón, para que se muestre la posición en la que se
// encuentra en cada momento.

let pagina = document.querySelector("html")
pagina.onmousemove = function(event){
    console.log(event.clientX, event.clientY)
    let elDiv = document.querySelector("div")
    elDiv.textContent=""+`${event.clientX} -  ${event.clientY}`
}