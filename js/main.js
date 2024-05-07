let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function adivinarNumero() {
    const numeroingresado = parseInt(document.getElementById('numeroIngresado').value);

    if (isNaN(numeroingresado) || numeroingresado < 1 || numeroingresado > 10) {
        document.getElementById('resultado').innerText = "Por favor, introduce un número válido del 1 al 10.";
    } else {
        intentos++;
        if (numeroingresado === numeroSecreto) {
            const mensaje = `¡Felicidadeeeees! Adivinaste el número en ${intentos} intentos.`;
            document.getElementById('resultado').innerText = mensaje;
            console.log(mensaje);
            mostrarMensajeReinicio();
        } else if (numeroingresado < numeroSecreto) {
            const mensaje = "El número secreto es mayor. Intenta de nuevo.";
            document.getElementById('resultado').innerText = mensaje;
            console.log(mensaje);
        } else {
            const mensaje = "El número secreto es menor. Intenta de nuevo.";
            document.getElementById('resultado').innerText = mensaje;
            console.log(mensaje);
        }
    }
}

function mostrarMensajeReinicio() {
    if (confirm("Felicades, adivinaste el numero. ¿Quieres jugar de nuevo?")) {
        reiniciarJuego();
    }
}

function reiniciarJuego() {
    intentos = 0;
    numeroSecreto = Math.floor(Math.random() * 10) + 1;
    document.getElementById('resultado').innerText = "";
    document.getElementById('numeroIngresado').value = "";
}
