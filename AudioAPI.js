const audio = new AudioContext();
const som = audio.createOscillator();

som.connect(audio.destination);
som.start();
som.stop(audio.currentTime + 1);

//Web Audio API é uma API do JS pra trocar e editar som no navegador.