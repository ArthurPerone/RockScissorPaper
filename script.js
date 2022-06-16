function escolha(value){
    //declaração de variaveis
    var resultado = document.getElementById("resultado");
    var botoes = document.getElementById("botoes");
    var player = document.getElementById("player");
    var npc = document.getElementById("npc");
    var v = document.getElementById("v");
    var d = document.getElementById("d");
    var e = document.getElementById("e");
    var derrota = 0, vitoria = 0, empate = 0;
    mostraResultado();//define a jogada do computador
    console.log(npc.src);
    switch (value) {
    case 'Rock'://se p player escolhe pedra
        player.src = "./images/" + value + ".png";
        //substr serve para pegar apenas uma parte de um texto
        //lastIndexOf serve para pegar a ultima vez que o texto aparece
        //length e a quantidade de caracteres do texto

        //se o final do caminho = Rock.png
        if(npc.src.substr((npc.src.lastIndexOf("/")+1 - npc.src.length)) == value + ".png"){
            empate = parseInt(e.innerHTML)+1; //guarda na variavel empate o valor de e + 1
            e.innerHTML = empate; // atualiza a pontuação de empate
        //se o final do caminho = Scissor.png
        }else if(npc.src.substr((npc.src.lastIndexOf("/")+1 - npc.src.length)) == "Scissor.png"){
            vitoria = parseInt(v.innerHTML)+1; //guarda na variavel vitoria o valor de v + 1
            v.innerHTML = vitoria; // atualiza a pontuação de vitoria
        }else{
            derrota = parseInt(d.innerHTML)+1; //guarda na variavel derrota o valor de d + 1
            d.innerHTML = derrota; // atualiza a pontuação de derrota
        }
        break;

    case 'Paper'://se p player escolhe papel
        player.src = "./images/" + value + ".png";
        //substr serve para pegar apenas uma parte de um texto
        //lastIndexOf serve para pegar a ultima vez que o texto aparece
        //length e a quantidade de caracteres do texto

        //se o final do caminho = Paper.png
        if(npc.src.substr((npc.src.lastIndexOf("/")+1 - npc.src.length)) == value + ".png"){
            empate = parseInt(e.innerHTML)+1; //guarda na variavel empate o valor de e + 1
            e.innerHTML = empate; // atualiza a pontuação de empate
        //se o final do caminho = Rock.png
        }else if(npc.src.substr((npc.src.lastIndexOf("/")+ 1 - npc.src.length)) == "Rock.png"){
            vitoria = parseInt(v.innerHTML)+1; //guarda na variavel vitoria o valor de v + 1
            v.innerHTML = vitoria; // atualiza a pontuação de vitoria
        }else{
            derrota = parseInt(d.innerHTML)+1; //guarda na variavel derrota o valor de d + 1
            d.innerHTML = derrota; // atualiza a pontuação de derrota
        }
        break;

    case 'Scissor'://se p player escolhe tesoura
        player.src = "./images/" + value + ".png";
        //substr serve para pegar apenas uma parte de um texto
        //lastIndexOf serve para pegar a ultima vez que o texto aparece
        //length e a quantidade de caracteres do texto

        //se o final do caminho = Scissor.png
        if(npc.src.substr((npc.src.lastIndexOf("/")+1 - npc.src.length)) == value + ".png"){
            empate = parseInt(e.innerHTML)+1; //guarda na variavel empate o valor de e + 1
            e.innerHTML = empate; // atualiza a pontuação de empate
        //se o final do caminho = Paper.png
        }else if(npc.src.substr((npc.src.lastIndexOf("/")+1 - npc.src.length)) == "Paper.png"){
            vitoria = parseInt(v.innerHTML)+1; //guarda na variavel vitoria o valor de v + 1
            v.innerHTML = vitoria; // atualiza a pontuação de vitoria
        }else{
            derrota = parseInt(d.innerHTML)+1; //guarda na variavel derrota o valor de d + 1
            d.innerHTML = derrota; // atualiza a pontuação de derrota
        }
        break;	
    }

    resultado.style.display = "block";
    botoes.style.display = "none";

}
function mostraResultado(){
    var r = Math.floor(Math.random() * 3);
    if(r==0)
    npc.src = "./images/Rock.png";
    else if(r==1)
    npc.src = "./images/Paper.png";
    else
    npc.src = "./images/Scissor.png";
}
function restart(){
    //retornando a tela inicial
    resultado.style.display = "none";
    botoes.style.display = "block";
}