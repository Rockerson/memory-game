function IniciarCronometro(){
    
    var segundos = 0;
    var minutos = 0;

    function ActualizarCronometro(){

        segundos++;

        if(segundos > 59){
            segundos=00;
            minutos++;
        }

        console.log("Min:" + minutos + " Seg:" + segundos);
    }
    
    setInterval(ActualizarCronometro, 1000);
}

