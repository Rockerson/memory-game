<?php require('php/init.php') ?>
<?php

$players = get_ranking();

$nickname = '';
$email = '';
$score_time = 1000;
$movements = 15;

if(isset( $_POST['submit-score'])){
    $nickname = $_POST['nickname'];
    $email = $_POST['email'];

    insert_score($nickname, $email, $score_time, $movements);
    redirect_to('index.php?success=true');

    //header('Location: http://localhost/memory-game/index.php?success=true ');
    //die();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🧩 Memory Game 🧩</title>
    <link rel="stylesheet" href="css/reseteo.css">
    <link rel="stylesheet" href="css/estilos.css">

    <?php if(isset( $_GET['success'])): ?>
        <script> alert("Se ha guadado con exito su puntaje");</script>
    <?php endif; ?>
</head>
<body>
    <header>
        <h1>Memory Game</h1>
        <div class="movimientos">
            <h3>Movimientos</h3>
            <div>
                <span id="intentos">00</span>/<span id="intentos-maximos">00</span>
            </div>
        </div>
        <div class="contador">
            <h3>Tiempo</h3>
            <div>
                <span id="minutos">00</span>:<span id="segundos">00</span>
            </div>
        </div>
    </header>
    <main>
        <p>Encuentra las parejas con la menor cantidad de movimientos y en el menor tiempo posible.</p>
        <section id="mesa">
            <!-- Aquí se llenan las tarjetas -->
        </section>
        <div id="bienvenida" class="popup">
            <div class="contenedor">
                <h2>🖖🏻 Hola 🖖🏻</h2>
                <p>Selecciona el modo que deseas jugar</p>
            <button id="modo-reto" class="btn" onclick="IniciarModoReto()">Jugar</button>
            <button id="modo-libre" class="btn" onclick="IniciarModoLibre()">Ranking</button>
            </div>
        </div>
        <div id="pierde" class="popup">
            <div class="contenedor"> 
                <h2>💥 Perdiste 💥</h2>
                <p>Te has quedados sin movimientos o sin tiempo</p>
                <button id="reiniciar" onclick="Iniciar()" class="btn">Reiniciar</button>
            </div>
        </div>
        <div id="gana" class="popup">
            <div class="contenedor"> 
                <h2>🏆 Ganaste 🏆</h2>
                <p>Has superado el juego</p>
                <p>Tu puntaje: <strong><?php echo $movements ?></strong></p>
                <form action="" method="post">
                    <label for="nickname">Apodo</label>
                    <input id="nickname" name="nickname" type="text" require/><br><br>

                    <label for="email">Correo</label>
                    <input id="email" name="email" type="email" require/><br><br>

                    <input type="submit" name="submit-score" value="Enviar" class="btn">
                </form>
                <button id="reiniciar" onclick="Iniciar()" class="btn">Reiniciar</button>
            </div>
        </div>
        <div id="clasificacion" class="popup">
            <div class="contenedor"> 
                <h2>🏆 Ranking 🏆</h2>
                <p>Top 10 mejores puntajes</p>
                <ul>
                    <?php
                    $cont = 0;
                    foreach ( $players as $u): 
                        $cont++;
                    ?>
                    <li> <span><?php echo $cont ?></span> <span><?php echo $u['nickname'] ?></span> <span><?php echo $u['id'] ?></span> </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
        <p>Aciertos : <span id="aciertos">00</span> Errores : <span id="errores">00</span></p>
    </main>
    <footer>
        <a href="https//rockerson.github.io">Rockerson.com</a>
        <a href="https://github.com/Rockerson">GitHub</a>
    </footer>
    <audio id="sonido-acierto" class="sonido" src="sonidos/Start.ogg" preload="auto" ></audio>
    <audio id="sonido-error" class="sonido" src="sonidos/Click.ogg" preload="auto" ></audio>
    <audio id="sonido-carta" class="sonido" src="sonidos/Hover.ogg" preload="auto" ></audio>
    <script src="js/variables-globales.js"></script>
    <script src="js/funciones.js"></script>
    <script src="js/cronometro.js"></script>
    <script src="js/contador.js"></script>
    <script src="js/init.js"></script>
</body>
</html>