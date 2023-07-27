let check = false;

function iniciar() {
    if(check == false) {
        let timer1 = setInterval(function() {start()}, 1000);
        let timer2 = setTimeout(function() {end()}, 13200); // É O TEMPO DE 3 SEGUNDOS QUE FAZ O GIF DE BOMBA EXPLODIR
        let count = 10; // VAI ESCREVER EM TELA ESSE VALOR DE CONTAGEM 

        // FUNÇÃO QUE VAI CHAMAR O BARULHO DE BEEP QUANDO ESTIVER FAZENDO A CONTAGEM
        function start() {
            soundBeep();
            document.querySelector("#time").innerHTML = count;

            if(count == 0) {
                clearInterval(timer1);
                soundThunder();

                document.querySelector("#fire").src = "img/explosion.gif";
                document.querySelector("#time").innerHTML = "GAME OVER";
            }

            count--;
        }

        check = true;
    }
}

function soundBeep() {
    // ESSE AUDIO É PARA FAZER EXECUÇÃO DE SONS EM UM OBJETO DO TIPO ÁUDIO (OU SEJA O BEEP)
    let beep = new Audio();

    beep.src = "Beep.mp3";
    beep.play();
}

function soundThunder() {
    // ESSE AUDIO É PARA FAZER EXECUÇÃO DE SONS EM UM OBJETO DO TIPO ÁUDIO (OU SEJA O BEEP)
    let beep = new Audio();

    beep.src = "Explosao.mp3";
    beep.play();
}

function end() {
    document.querySelector("#fire").src = "img/clean.png";
}

