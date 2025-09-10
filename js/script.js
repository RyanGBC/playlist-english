// 🔹 Liste seus áudios aqui (deixe os arquivos na mesma pasta do HTML)
const tracks = [
  { name: "Audio Army", file: "audios/1_Jack Hannaford Natalie Complete Audio.mp3" },
  { name: "Audio Endless tale", file: "audios/2_The Endless Tale Natalie Complete Audio.mp3" },
  { name: "Audio Beanstalk", file: "audios/3_Jack and the Beanstalk Natalie Complete Audio.mp3" },
  {name: "Audio The boy flew too high", file: "audios/4_The Boy who Flew too High Natalie Complete Audio.mp3"},
  {name: "Audio The Bell of Atri", file: "5_The Bell of Atri Kathy Complete Audio.mp3"}
];

const jackHannafordTranscript = [
  { start: 0, end: 7, text: "There was once a farmer and his wife. She had been married before, her first husband had died, and now she was married again." },
  { start: 8, end: 15, text: "They lived on a remote farm in the west of England, and what a pair of fools they were! Which of them was the most foolish? Listen to the story and decide for yourself." },
  { start: 16, end: 25, text: "In those days, there also lived an old soldier called Jack Hannaford. His coat was old and he was poor, but nobody thought that Jack Hannaford was stupid." },
  { start: 26, end: 35, text: "He was sly like a fox. When he left the army, he walked all around the country, looking for ways to play his tricks." },
  { start: 36, end: 45, text: "After he had traveled for some time, he came across the farm belonging to the pair. He knocked on the door of the house, and a moment later, the wife answered." },
  { start: 46, end: 60, text: "She looked him up and down, quite astonished, because few strangers were able to make the difficult journey to their home." },
  { start: 61, end: 75, text: "Jack looked up at the pale blue sky, and he said, 'I came from Heaven.' 'My goodness!' she said. 'Did you see my husband there?'" }
];

const endlessTaleTranscript = [
  { start: 0, end: 7, text: "In the Far East there was a Great King who had no work to do. Every day, he sat on soft cushions and listened to stories." },
  { start: 8, end: 15, text: "No matter what the story was about, he never grew tired of hearing it. 'There is only one fault,' he often said, 'it is too short.'" },
  { start: 16, end: 25, text: "The King offered a prize to anyone able to tell him an endless tale. But if the storyteller failed, he would lose his head." },
  { start: 26, end: 35, text: "One day a stranger came and began a story about locusts carrying away corn, one by one, from a granary." },
  { start: 36, end: 45, text: "The tale went on and on, until the King cried, 'Enough! Take my daughter, be my heir, but stop with the locusts!'" }
];

const beanstalkTranscript = [
  { start: 0, end: 7, text: "Once upon a time there lived a poor widow and her son Jack. One day, Jack’s mother told him to sell their only cow." },
  { start: 8, end: 15, text: "On the way, Jack met a man who offered him five magic beans in exchange for the cow. His mother was furious." },
  { start: 16, end: 25, text: "Overnight, a giant beanstalk grew. Jack climbed it and found a castle in the sky where a giant lived with his wife." },
  { start: 26, end: 35, text: "Jack stole gold coins, then a hen that laid golden eggs, and finally a magical harp." },
  { start: 36, end: 45, text: "When the giant chased him, Jack cut down the beanstalk. The giant fell, and Jack and his mother lived happily ever after." }
];

const boyFlewTooHighTranscript = [
  { start: 0, end: 7, text: "Daedalus, a brilliant craftsman, was kept prisoner by King Minos in Crete, along with his son Icarus." },
  { start: 8, end: 15, text: "To escape, Daedalus built wings of feathers and wax. He warned Icarus: do not fly too low or too high." },
  { start: 16, end: 25, text: "At first, Icarus obeyed. But soon he felt the joy of flying and soared higher and higher." },
  { start: 26, end: 35, text: "The sun melted the wax on his wings. The feathers fell away, and Icarus plunged into the sea." },
  { start: 36, end: 45, text: "Daedalus cried for his son, but it was too late. The boy who flew too high had fallen." }
];

const bellOfAtriTranscript = [
  { start: 0, end: 7, text: "In the Italian town of Atri, the King hung a great bell in the marketplace tower. It was the Bell of Justice." },
  { start: 8, end: 15, text: "The judges promised that anyone could ring it in times of need, and justice would be served." },
  { start: 16, end: 25, text: "Years later, the rope grew too short, so they tied a vine instead. One day, a starving old horse pulled the vine." },
  { start: 26, end: 35, text: "The bell rang. The judges saw the horse and declared that his cruel master, a greedy knight, must give him half his gold." },
  { start: 36, end: 45, text: "The horse received food, shelter, and justice, while the people of Atri celebrated." }
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

// Carregar transcript correspondente
  switch(index) {
    case 0: showTranscript(jackHannafordTranscript); break;
    case 1: showTranscript(endlessTaleTranscript); break;
    case 2: showTranscript(beanstalkTranscript); break;
    case 3: showTranscript(boyFlewTooHighTranscript); break;
    case 4: showTranscript(bellOfAtriTranscript); break;
    default: textlist.innerHTML = "<li>📖 Transcript não disponível</li>";
  }
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

const textlist = document.getElementById("textlist");

function showTranscript(transcript) {
  textlist.innerHTML = ""; // limpa antes
  transcript.forEach((line, i) => {
    const li = document.createElement("li");
    li.textContent = line.text;
    li.dataset.start = line.start;
    li.dataset.end = line.end;
    textlist.appendChild(li);
  });
}

// Atualiza destaque enquanto toca
audioPlayer.addEventListener("timeupdate", () => {
  const current = audioPlayer.currentTime;
  [...textlist.children].forEach(li => {
    const start = parseFloat(li.dataset.start);
    const end = parseFloat(li.dataset.end);
    li.classList.toggle("active", current >= start && current <= end);
  });
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