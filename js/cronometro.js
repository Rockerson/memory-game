function IniciarCronometro(){
    
    var segundos = 0;
    var segTexto;

    var minutos = 3;
    var minTexto;

    var cronometro;

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

    }
    
    cronometro = setInterval(ActualizarCronometro, 1000);
}

