function GamePlay(){
  background(0);
  CriaBolinha();
  Raquete(xRaquete, yRaquete);
  Raquete(xOponente,yOponente)
  MovimentoBolinha();
  ColisaoBorda();
  MovimentoPlayer();
 MovimentoOponente();
  ColisaoRaquete(xRaquete,yRaquete);
  ColisaoRaquete(xOponente,yOponente);
  incluiPlacar();
  Placar();
  fixBolinhaPresa();
  fimPartida();
}

