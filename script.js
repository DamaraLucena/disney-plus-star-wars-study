var audio = document.getElementById("entrada-audio");

audio.addEventListener("canplaythrough", function() {
  var maxDuration = 5; // Defina a duração máxima em segundos

  setTimeout(function() {
    audio.pause();
    audio.currentTime = 0;
  }, maxDuration * 1000);
});

audio.play();