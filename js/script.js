// 🔹 Liste seus áudios aqui (deixe os arquivos na mesma pasta do HTML)
const tracks = [
  { name: "Audio Army", file: "audios/1_Jack Hannaford Natalie Complete Audio.mp3" },
  { name: "Audio Endless tale", file: "audios/2_The Endless Tale Natalie Complete Audio.mp3" },
  { name: "Audio Beanstalk", file: "audios/3_Jack and the Beanstalk Natalie Complete Audio.mp3" }
];

const playlist = document.getElementById("playlist");
const audioPlayer = document.getElementById("audioPlayer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

// Montar lista
tracks.forEach((track, index) => {
  const li = document.createElement("li");
  li.textContent = track.name;
  li.addEventListener("click", () => playTrack(index));
  playlist.appendChild(li);
});

function playTrack(index) {
  currentIndex = index;
  audioPlayer.src = tracks[currentIndex].file;
  audioPlayer.play();
  updateActive();
}

function updateActive() {
  [...playlist.children].forEach((li, i) => {
    li.classList.toggle("active", i === currentIndex);
  });
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) playTrack(currentIndex - 1);
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < tracks.length - 1) {
    playTrack(currentIndex + 1);
  } else {
    showEndMessage();
  }
});

// Passa automático para a próxima
audioPlayer.addEventListener("ended", () => {
  if (currentIndex < tracks.length - 1) {
    playTrack(currentIndex + 1);
  } else {
    showEndMessage();
  }
});

// Mensagem final
function showEndMessage() {
  const msg = document.createElement("div");
  msg.textContent = "🎉 Parabéns! Você terminou sua prática de inglês por hoje!";
  msg.style.marginTop = "20px";
  msg.style.fontSize = "18px";
  msg.style.fontWeight = "600";
  msg.style.color = "#2e7d32";
  document.body.appendChild(msg);
}