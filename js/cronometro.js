function IniciarCronometro(){

    var segundos = 0;
    var segTexto;

    var minutos = 2;
    var minTexto;

    var cronometro;
    var restante;

    function ActualizarCronometro(){

        segundos--;

        if(segundos < 0){
            minutos--;    
            segundos=59;
        }

        if(minutos < 0){
            segundos = 0;
            minutos = 0;
            clearInterval(cronometro);
            JuegoTerminado();
        }
        
        segTexto = segundos;
        if(segundos < 10){
            segTexto = "0" + segundos;
        }
        
        minTexto = minutos;
        if(minutos < 10){
            minTexto = "0" + minutos;
        }

        document.querySelector("#segundos").innerText = segTexto;
        document.querySelector("#minutos").innerText = minTexto;
        restante = (minutos*60) + segundos;
        //esto debe calcularse mejor en el futuro
        tiempo = 120 - restante;

    }
    
    cronometro = setInterval(ActualizarCronometro, 1000);
}

