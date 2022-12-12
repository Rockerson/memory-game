function ActualizarContador(){
    intentos++;

    if(intentos > intentosMax){
        JuegoTerminado();
        return;
    }
    
    var intText;
    intText = intentos;
    
    if(intentos < 10) {
        intText = "0" + intentos;
    }

    document.querySelector("#intentos").innerText = intText;
}

function IntentosMax(){
    var intentosMaxTexto = intentosMax;

    if(intentosMaxTexto < 10){
        intentosMaxTexto = "0" + intentosMaxTexto;
    }

    document.querySelector("#intentos-maximos").innerText = intentosMaxTexto;
}