//Variáveis estilo de jogo
let vsCom = false
let tela = 1

//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;

//Variáveis da Raquete
let xRaquete = 10;
let yRaquete = 150;
let ComprimentoRaquete = 10;
let AlturaRaquete = 90;
let colidiu = false;

//Variáveis do Oponente
let xOponente = 580;
let yOponente = 150;
let velocidadeYOponente;
let chanceErro = 0;

//Velocidade da bolinha
let velocidadeXbolinha = 6;
let velocidadeYbolinha = 6;

// Variáveis do Placar
let pontosPlayer = 0;
let pontosOponente = 0;
let fimJogoPlayer = 0;
let fimJogoOponente = 0;

//Som
let raquetada;
let ponto;
let trilha;

function preload(){
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
  trilha = loadSound("trilha.mp3")
  tenisMesa = loadImage("tenis_mesa.jpg")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
function draw() {
  if(tela == 1){
    telaSelecao();
  }
  if(tela == 2){
    GamePlay();
  }
}

function CriaBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function MovimentoBolinha() {
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
}

function ColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXbolinha *= -1;
    
  }

  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYbolinha *= -1;
    
  }
  
}

function Raquete(x,y) {
  rect(x,y,ComprimentoRaquete, AlturaRaquete);
}

function MovimentoPlayer(){
  if (keyIsDown(87)){
    yRaquete -= 10;
  }
  if (keyIsDown(83)){
    yRaquete += 10;
    }
    yRaquete = constrain(yRaquete, 10, 300);
  }

function MovimentoOponente(){
  if(!vsCom){
  velocidadeYOponente = yBolinha - yOponente - ComprimentoRaquete / 2 - 30;
  yOponente += velocidadeYOponente + chanceErro;
  yOponente = constrain(yOponente, 10, 300);
  calculoErro();
  }
  else{
    if (keyIsDown(UP_ARROW)){
      yOponente -= 10;
    }
    if(keyIsDown(DOWN_ARROW)){
      yOponente += 10
    }
  }
}

function ColisaoRaquete(x,y){
 colidiu = collideRectCircle(x,y,ComprimentoRaquete,AlturaRaquete, xBolinha,yBolinha, raio);
  
  if(colidiu){
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  //Cor dos retangulo do placar
  fill(color(51,153,255));
  rect(150,10,40,20);
  fill(255);
  text(pontosPlayer,170,26);
  fill(color(51,153,255));
  rect(450,10,40,20);
  fill(255);
  text(pontosOponente,470,26);
  
}

function Placar(){
  if(xBolinha + raio > width -1){
    pontosPlayer += 1;
    fimJogoPlayer += 1;
    ponto.play();
    }
  if(xBolinha - raio < 1){
    pontosOponente += 1;
    fimJogoOponente += 1;
    ponto.play();
  }
}

function calculoErro(){
  if(pontosOponente >= pontosPlayer){
    chanceErro += 1
    if(chanceErro >=39){
      chanceErro = 40
    }
  }
  else{
    chanceErro -= 1
    if(chanceErro <= 35){
      chanceErro = 35
    }
  }
}

function fixBolinhaPresa(){
   if (xBolinha - raio < 0){
      xBolinha = 25;
    } else if (xBolinha > width - raio) {
      xBolinha = width - 25
    }
}

function fimPartida(){
  if(fimJogoPlayer == 5){
    noLoop();
    trilha.stop();
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Parabéns !!Player 1 venceu", width/2, height/2);
  }
   if(fimJogoOponente == 5{
    noLoop(); 
     trilha.stop();
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Player 1 Perdeu ! Tente de novo", width/2, height/2);
}
}


  
  