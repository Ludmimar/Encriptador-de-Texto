mostrar = document.getElementById("mensaje");
function EncriptarDesencriptar(operation) {
    const textoIngresado = document.getElementById("textoIngresado").value.toLowerCase();
    let resultado = '';

    if (operation === 'encriptar') {
        resultado = encriptar(textoIngresado);
        mostrar.style.backgroundImage = "none";
    } else if (operation === 'desencriptar') {
        resultado = desencriptar(textoIngresado);
        mostrar.style.backgroundImage = "none";
    }

    document.getElementById("mensaje").value = resultado;
}

function encriptar(texto) {
    return texto.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat");
}

function desencriptar(texto) {
    return texto.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u");
}

function copyText() {
    const mensaje = document.getElementById("mensaje");
    mensaje.select();
    document.execCommand("copy");
}