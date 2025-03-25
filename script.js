window.onload = function() {
    //Control de modo
    var modo = document.getElementById("modo");
    modo.addEventListener("click", () =>{
        if(modo.innerText === "Colores"){
            modo.innerText = "Hexadecimal";
        }
        else if(modo.innerText === "Hexadecimal"){
            modo.innerText = "Degradado";
        }
        else{
            modo.innerText = "Colores";
        }
    });

    //Control de botón
    var botonColor = document.getElementById("btncolor");
    var Contenedor = document.getElementById("container");
    var colorespredeterminados = [
        "red",
        "blue",
        "green",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
        "black",
        "white",
        "gray",
        "cyan",
        "magenta",
        "lime",
        "maroon",
        "navy",
        "olive",
        "teal"
    ]
    var NombreColor = document.getElementById("NombreColor");

    botonColor.addEventListener("click", function() {
        if(modo.innerText === "Colores"){

            Contenedor.style.background = getRandomColor(colorespredeterminados,NombreColor);
        }
        else if(modo.innerText === "Hexadecimal"){
            Contenedor.style.background = getRandomColorHexadecimal(NombreColor);
        }
        else{
            Contenedor.style.background = getRandomColorDegradado(NombreColor);
        }
    });
};

function getRandomColorHexadecimal(NombreColor) {
    let color = Math.floor(Math.random() * 16777215).toString(16);
    while (color.length < 6) 
        {
        color = "0" + color;
    }
    NombreColor.innerText = "#" + color;
    return "#" + color;
}

function getRandomColor(colorespredeterminados,NombreColor) {
    let color = Math.floor(Math.random() * colorespredeterminados.length);
    NombreColor.innerText = colorespredeterminados[color];
    return colorespredeterminados[color];
}

function getRandomColorDegradado(NombreColor) {
    let color1 = Math.floor(Math.random() * 16777215).toString(16);
    while (color1.length < 6) 
    {
        color1 = "0" + color1;
    }
    let color2 = Math.floor(Math.random() * 16777215).toString(16);
    while (color2.length < 6 && color2 !== color1) 
    {
        color2 = "0" + color2;
    }
    NombreColor.innerText = "#" + color1 + " - #" + color2;
    return "linear-gradient(to right, #" + color1 + ", #" + color2 + ")";
}