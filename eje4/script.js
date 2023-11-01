window.onload = function() {
    // Crear la tabla y adjuntarla al body
    var table = document.createElement("table");
    table.border = '1';
    for (var i = 1; i <= 100; i++) {
        var tr = document.createElement("tr");
        for (var j = 1; j <= 100; j++) {
            var td = document.createElement("td");
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);

    // Ahora, añadir el evento onmousemove a las celdas
    var celdas = document.getElementsByTagName("td");
    for (var i = 0; i < celdas.length; i++) {
        celdas[i].onmousemove = function(e) {
            var evento = e || window.event;
            if (evento.ctrlKey) {
                this.style.backgroundColor = "red";
            } else if (evento.shiftKey) {
                this.style.backgroundColor = "blue";
            }
        }
    }
    //asignamos una tecla para presionar y poder borrar celda por celda
    
    document.onkeydown = function(e) {
        var evento = e || window.event;
        if (evento.keyCode == 87) {
            for (var i = 0; i < celdas.length; i++) {
                if (celdas[i].style.backgroundColor == "red" || celdas[i].style.backgroundColor == "blue") {
                    celdas[i].style.backgroundColor = "white";
                    break;
                }
            }
        }
    }
    //asignamos una tecla para borrar todo lo que hemos pintado en la tabla
    document.onkeypress = function(e) {
        var evento = e || window.event;
        if (evento.keyCode == 8) {
            for (var i = 0; i < celdas.length; i++) {
                celdas[i].style.backgroundColor = "white";
            }
        }
    }
};
