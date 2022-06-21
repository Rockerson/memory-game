function Barajar(){
    var resultado;
    
    resultado = totalTarjetas.sort(function() {
        return 0.5 - Math.random();
    });

    return resultado;
}

function Repartir(){
    var tarjetasBarajadas = Barajar();
    var mesa = document.querySelector("#mesa");
    mesa.innerHTML = "";

    tarjetasBarajadas.forEach(function(elemento){
        var tarjeta = document.createElement("div");

        tarjeta.innerHTML = 
            '<div class="tarjeta" data-valor=' + elemento + ' >' + 
                '<div class="contenido">' + 
                    elemento + 
                '</div>' +    
            '</div>';

        mesa.appendChild(tarjeta);
    });
}

function Descubrir(){
    var totalDescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    var tarjetasRestantes;

    if(totalDescubiertas.length > 1){
        return;
    }

    this.classList.add("descubierta");

    document.querySelector("#sonido-carta").play();

    var descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    if(descubiertas.length < 2){
        return;
    }

    Comparar(descubiertas);
    ActualizarContador();

    tarjetasRestantes = document.querySelectorAll(".tarjeta:not(.acertada)");
    if(tarjetasRestantes.length === 0){
        setTimeout(Finalizar, 1000);
    }
}

function Comparar(tarjetasAComparar){
    if(tarjetasAComparar[0].dataset.valor === tarjetasAComparar[1].dataset.valor){
        Acierto(tarjetasAComparar);
    }else{
        DesAcierto(tarjetasAComparar);
    }
}

function Acierto(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
        elemento.classList.add("acertada");
    });

    aciertos++;
    if(aciertos<10){
        aciertos = "0" + aciertos;
    }
    document.querySelector("#aciertos").innerText = aciertos;

    document.querySelector("#sonido-acierto").play();
}

function DesAcierto(lasTarjetas){
    lasTarjetas.forEach(function(elemento){
        elemento.classList.add("error");
    });

    document.querySelector("#sonido-error").play();

    setTimeout(function(){
        lasTarjetas.forEach(function(elemento){
            elemento.classList.remove("descubierta");
            elemento.classList.remove("error");
        });
    }, 1000);

    errores++;
    if(errores<10){
        errores = "0" + errores;
    }
    document.querySelector("#errores").innerText = errores;
}