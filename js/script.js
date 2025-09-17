// 🔹 Liste seus áudios aqui (deixe os arquivos na mesma pasta do HTML)
const tracks = [
  { name: "Jack Hannaford", file: "audios/1_Jack Hannaford Natalie Complete Audio.mp3" },
  { name: "The Endless Tale", file: "audios/2_The Endless Tale Natalie Complete Audio.mp3" },
  { name: "Jack and the Beanstalk", file: "audios/3_Jack and the Beanstalk Natalie Complete Audio.mp3" },
  { name: "The Boy Who Flew Too High", file: "audios/4_The Boy who Flew too High Natalie Complete Audio.mp3" },
  { name: "The Bell of Atri", file: "audios/5_The Bell of Atri Kathy Complete Audio.mp3" }
];

const jackHannafordTranscript = [
  { start: 0, end: 6, text: "There was once a farmer and his wife. She had been married before, her first husband had died, and now she was married again." },
  { start: 7, end: 14, text: "They lived on a remote farm in the west of England, and what a pair of fools they were! Which of them was the most foolish? Listen to the story and decide for yourself." },
  { start: 15, end: 23, text: "In those days, there also lived an old soldier called Jack Hannaford. His coat was old and he was poor, but nobody thought that Jack Hannaford was stupid." },
  { start: 24, end: 31, text: "He was sly like a fox. When he left the army, he walked all around the country, looking for ways to play his tricks." },
  { start: 32, end: 41, text: "After he had traveled for some time, he came across the farm belonging to the pair. He knocked on the door of the house, and a moment later, the wife answered." },
  { start: 42, end: 50, text: "She looked him up and down, quite astonished, because few strangers were able to make the difficult journey to their home." },
  { start: 51, end: 54, text: `"Where did you come from?" she asked.` },
  { start: 55, end: 58, text: `Jack looked up at the pale blue sky, and he said, "I came from Heaven."` },
  { start: 59, end: 65, text: `"My goodness!", she said. "Did you see my husband there?" (The farmer's wife was talking about her first husband, the man who had died).` },
  { start: 66, end: 70, text: `"Oh yes, I got to know him well when I was staying in Heaven," said Jack.` },
  { start: 71, end: 77, text: `"And how is he doing?", asked the woman. "He is fine," replied the old soldier.` },
  { start: 78, end: 84, text: `"He works hard sewing and mending clothes for the saints and angels, but even so, he sometimes doesn't have enough money to eat."` },
  { start: 85, end: 93, text: `"And did he send me a message?", she asked. "Yes, he did! That is why I've come here. He asked me to bring back some money for him, so that he can spend his days in paradise more comfortably."` },
  { start: 94, end: 97, text: "On hearing this, the poor woman's heart almost broke with pity." },
  { start: 98, end: 101, text: `"I'll give him anything he wants! He's a good man, God bless him," she said.` },
  { start: 102, end: 108, text: "Then she went to the chimney where the couple's savings were kept hidden. She took out two pieces of gold and five pieces of silver, which in those days was a lot of money." },
  { start: 109, end: 113, text: "She handed everything over to the old soldier and told him to hurry up and give it to her first husband." },
  { start: 114, end: 117, text: `"I will," Jack told the woman, "as soon as I return to Heaven."` },
  { start: 118, end: 124, text: "When the farmer came back, his wife told him all about how a messenger had come from Heaven. She said that the man asked for money for her first husband, who was living and working in Heaven, but who was poor." },
  { start: 125, end: 128, text: `"You are a foolish woman!" shouted the farmer. "How could you believe such a silly story?"` },
  { start: 129, end: 132, text: `"Well, you are even more foolish," said the woman, "because you showed me where the money was hidden."` },
  { start: 133, end: 139, text: "The husband did not agree with what she said, but he did not stay to argue. He hurried off on his horse to try to find the old soldier before he got too far away." },
  { start: 140, end: 150, text: "Jack Hannaford heard the sound of the horse behind him. He knew that the farmer was coming for him and for the money. Quickly, he came up with a plan. He knelt by the side of the road, covered his eyes with one hand, and pointed up to the sky with the other." },
  { start: 151, end: 155, text: `The farmer soon reached him and asked: "What are you doing here by the side of the road? Why are you protecting your eyes and pointing up to the sky?"` },
  { start: 156, end: 161, text: `"It is amazing! It is God's work!" shouted the man. "I see a wonderful thing!" "What kind of wonderful thing?" asked the farmer.` },
  { start: 162, end: 165, text: `"A man is walking straight up to Heaven on a rainbow, just as if it were a road."` },
  { start: 166, end: 169, text: "The farmer looked at the sky, but he could not see the amazing rainbow or the man walking on it." },
  { start: 170, end: 173, text: `"Here," said the soldier, "kneel down by the side of the road and look up at the sky like I'm doing."` },
  { start: 174, end: 177, text: `"I will if you'll hold my horse," said the farmer, and he jumped down from his horse.` },
  { start: 178, end: 181, text: "As soon as the farmer knelt down, Jack Hannaford jumped onto the horse and escaped!" },
  { start: 182, end: 185, text: "Now, who do you think was more foolish, the farmer or his wife?" }
];

const endlessTaleTranscript = [
  { start: 0, end: 3, text: "In the Far East there was a Great King who had no work to do." },
  { start: 4, end: 10, text: "Every day, and all day long, he sat on soft cushions and listened to stories. And no matter what the story was about, he never grew tired of hearing it, even though many of the stories took hours to complete." },
  { start: 11, end: 14, text: `"There is only one fault with your story," he often said, "it is too short."` },
  { start: 15, end: 19, text: "All the storytellers in the world were invited to his palace; and some of them told stories that were very long indeed." },
  { start: 20, end: 22, text: "But The King was always sad when the story ended." },
  { start: 23, end: 26, text: "At last he sent a message to every city and town, offering a prize to any one able to tell him an endless tale." },
  { start: 27, end: 33, text: `He said: "To the man that will tell me a story which lasts forever, I will give my daughter as his wife; and I will make him my heir, and he shall be king after me."` },
  { start: 34, end: 36, text: "But this challenge wasn't quite what it seemed. The King added a strict condition." },
  { start: 37, end: 40, text: `"If any man tries to tell such a story and fails, then his head will be cut off."` },
  { start: 41, end: 45, text: "The King's daughter was very beautiful, and many young men in The Kingdom were willing to do anything to win her." },
  { start: 46, end: 49, text: "But none of them wanted to lose his head, and so only a few tried for the prize." },
  { start: 50, end: 53, text: "One young man invented a story that lasted three months; but after that, he could think of nothing more." },
  { start: 54, end: 59, text: "His fate was a warning to others, and it was a long time before another storyteller was daring enough to take the King's challenge." },
  { start: 60, end: 61, text: "One day a Stranger from the South came to The Palace." },
  { start: 62, end: 66, text: `"Great king," he said, "is it true that you offer a prize to the man who can tell a story that has no end?"` },
  { start: 67, end: 68, text: `"It is true," said The King.` },
  { start: 69, end: 71, text: `"And will this man have your daughter for his wife, and will he be your heir?"` },
  { start: 72, end: 75, text: `"Yes, if he succeeds," said The King, "but if he fails, he will lose his head."` },
  { start: 76, end: 79, text: `"Very well, then," said the Stranger. "I have a pleasant story about locusts."` },
  { start: 80, end: 82, text: `"Tell it," said The King. "I will listen to you."` },
  { start: 83, end: 93, text: "The storyteller began his story. \"Once upon a time a certain king seized all the corn in his country, and stored it in a strong granary, but a swarm of locusts came over the land and saw where the grain was stored. After searching for many days, the locusts found a small crack on the east side of the granary, but the opening was just large enough for one locust at a time to pass through.\"" },
  { start: 94, end: 97, text: "So, one locust went in and carried away a grain of corn;" },
  { start: 98, end: 101, text: "then another locust went in and carried away a grain of corn;" },
  { start: 102, end: 105, text: "then another locust went in and carried away a grain of corn." },
  { start: 106, end: 110, text: `Day after day, week after week, the Stranger kept on saying, "Then another locust went in and carried away a grain of corn."` },
  { start: 111, end: 116, text: `A month passed. A year passed. After two years, The King asked, "How much longer will the locusts be going in and carrying away corn?"` },
  { start: 117, end: 121, text: `"Oh, King!" said the Stranger, "the locusts have only cleared a few inches, and there are thousands of inches in the granary."` },
  { start: 122, end: 129, text: `"Man, man!" cried The King, "You will drive me mad. I can listen to it no longer. Take my daughter, be my heir, and rule my Kingdom, but do not let me hear another word about those incessant locusts!"` },
  { start: 130, end: 134, text: "So, the Stranger married The King's daughter and lived happily in the land for many years;" },
  { start: 135, end: 138, text: "however, his father-in-law, The King, did not care to listen to any more stories." }
];

const beanstalkTranscript = [
  { start: 0, end: 3, text: "Once upon a time there lived a poor widow and her son Jack." },
  { start: 4, end: 7, text: "One day, Jack's mother told him to sell their only cow." },
  { start: 8, end: 11, text: "Jack went to the market and on the way he met a man who wanted to buy his cow." },
  { start: 12, end: 14, text: `Jack asked, "What will you give me in return for my cow?"` },
  { start: 15, end: 17, text: `The man answered, "I will give you five magic beans!"` },
  { start: 18, end: 21, text: "Jack took the magic beans and gave the man the cow." },
  { start: 22, end: 24, text: "But when he reached home, Jack's mother was very angry." },
  { start: 25, end: 28, text: `She said, "You fool! He took away your cow and gave you some beans!"` },
  { start: 29, end: 30, text: "She threw the beans out of the window." },
  { start: 31, end: 33, text: "Jack was very sad and went to sleep without dinner." },
  { start: 34, end: 39, text: "The next day, when Jack woke up in the morning and looked out of the window, he saw that a huge beanstalk had grown from his magic beans!" },
  { start: 40, end: 44, text: "He climbed up the beanstalk and reached a kingdom in the sky. There lived a giant and his wife." },
  { start: 45, end: 47, text: "Jack went inside the house and found the giant's wife in the kitchen." },
  { start: 48, end: 51, text: `Jack said, "Could you please give me something to eat? I am so hungry!"` },
  { start: 52, end: 55, text: "The kind wife gave him bread and some milk. While he was eating, the giant came home." },
  { start: 56, end: 59, text: "The giant was very big and looked very fearsome. Jack was terrified and went and hid inside." },
  { start: 60, end: 66, text: `The giant cried, "Fee-fi-fo-fum, I smell the blood of a boy. Dead or alive, I'll grind his bones to make my bread!", but the wife said, "There is no boy in here!"` },
  { start: 67, end: 72, text: "So, the giant ate his food and then went to his room. He took out his sacks of gold coins, counted them and kept them aside. Then he went to sleep." },
  { start: 73, end: 77, text: "In the night, Jack crept out of his hiding place, took one sack of gold coins and climbed down the beanstalk." },
  { start: 78, end: 81, text: "At home, he gave the coins to his mother. His mother was very happy and they lived well for sometime." },
  { start: 82, end: 85, text: "A few days later, Jack once again climbed the beanstalk and went to the giant's house." },
  { start: 86, end: 90, text: "Jack asked the giant's wife for food, but while he was eating the giant returned. Jack then hid under the bed." },
  { start: 91, end: 95, text: `The giant cried, "Fee-fi-fo-fum, I smell the blood of an boy. Dead or alive, I'll grind his bones to make my bread!"` },
  { start: 96, end: 99, text: `The wife again said, "There is no boy in here!" The giant ate his food and went to his room.` },
  { start: 100, end: 103, text: `There, he took out a hen. He shouted, "Lay!" and the hen laid a golden egg.` },
  { start: 104, end: 107, text: "When the giant fell asleep, Jack took the hen and climbed down the beanstalk." },
  { start: 108, end: 112, text: "Jack's mother was very happy with him. After some days, Jack once again climbed the beanstalk and went to the giant's castle." },
  { start: 113, end: 115, text: "For the third time, Jack met the giant's wife and asked for some food." },
  { start: 116, end: 119, text: "Once again, the giant's wife gave him bread and milk. But while Jack was eating, the giant came home." },
  { start: 120, end: 124, text: `"Fee-fi-fo-fum, I smell the blood of an boy. Dead or alive, I'll grind his bones to make my bread!" cried the giant.` },
  { start: 125, end: 127, text: `"Don't be silly! There is no boy in here!" said his wife.` },
  { start: 128, end: 130, text: "The giant had a magical harp that could play beautiful songs." },
  { start: 131, end: 133, text: "While the giant slept, Jack took the harp and was about to leave." },
  { start: 134, end: 136, text: `Suddenly, the magic harp cried, "Help master! A boy is stealing me!"` },
  { start: 137, end: 139, text: "The giant woke up and saw Jack with the harp. Furious, he ran after Jack." },
  { start: 140, end: 143, text: "But Jack was too fast for him. He ran down the beanstalk and reached home. The giant followed him down." },
  { start: 144, end: 146, text: "Jack quickly ran inside his house and fetched an axe. He began to chop the beanstalk." },
  { start: 147, end: 150, text: "The giant fell and died. Jack and his mother were now very rich and they lived happily ever after." }
];

const boyFlewTooHighTranscript = [
  { start: 0, end: 6, text: "The underground paths housing the Minotaur beneath the isle of Crete were created by the dangerous and intelligent mind of Daedalus, an artist of design and construction." },
  { start: 7, end: 10, text: "Daedalus was so brilliant that King Minos of Crete kept him as a prisoner." },
  { start: 11, end: 15, text: "Daedalus lived with his son Icarus in a tower of the palace, and King Minos made him build tremendous weapons of war." },
  { start: 16, end: 20, text: "Although Daedalus and Icarus had a very comfortable life in the tower of the palace, the father wished to return home to Athens." },
  { start: 21, end: 24, text: "His son hardly remembered Athens, but he dreamed of running and playing in the open." },
  { start: 25, end: 32, text: "Daedalus looked at the waves of the Mediterranean Sea, and realized that even if they could manage to escape from the tower and find a little boat, they wouldn't get very far before they were caught by one of the ships of King Minos' navy." },
  { start: 33, end: 36, text: "He thought for a long time about the best way to escape and finally, he came up with a plan." },
  { start: 37, end: 40, text: "He told King Minos that he needed feathers and wax for a new project." },
  { start: 41, end: 46, text: "After Daedalus received the feathers, he took them to the roof of the tower, and placed the feathers into four lines." },
  { start: 47, end: 51, text: "He organized the feathers from shortest to longest until the feathers formed gentle half-moon shapes." },
  { start: 52, end: 55, text: "Then, Daedalus stuck the feathers together with string in the middle and wax at the base." },
  { start: 56, end: 61, text: "While Daedalus worked, Icarus played with the wax, making it flat between his fingers, and he chased feathers that floated on the wind." },
  { start: 62, end: 64, text: "Daedalus showed Icarus how he had made the feathers into two pair of wings." },
  { start: 65, end: 70, text: "He put the larger pair onto his arms, and began to quickly move them up and down until his feet took off from the floor, and he seemed to stand in the sky." },
  { start: 71, end: 74, text: "Icarus laughed and could not wait to try out the smaller pair of wings." },
  { start: 75, end: 79, text: "Over the next few days, father and son both exercised the wings until little Icarus was almost as good at flying as his father." },
  { start: 80, end: 82, text: "Then one morning Daedalus said: now son, we are ready to leave this island for good." },
  { start: 83, end: 89, text: "We shall fly home to Athens. Flying is beautiful, but it can be very dangerous. Listen to my instructions and be sure to obey them perfectly." },
  { start: 90, end: 92, text: "At all times, follow me. Do not take a different flight path, or you will soon be lost." },
  { start: 93, end: 97, text: "Do not fly too low or your wings will get wet from the waves, become too heavy, and drown you." },
  { start: 98, end: 102, text: "Nor should you fly too high, or the sun will melt the wax, and your wings will fall apart." },
  { start: 103, end: 105, text: "Have you understood all that I have said? Little Icarus nodded his understanding." },
  { start: 106, end: 110, text: "Then Daedalus took his son to the highest walls of the tower and jumped into the sky, flapping his wings." },
  { start: 111, end: 116, text: "Icarus followed soon after. If a fisherman had looked up just then, he would have thought that he saw two Ancient Spirits with the arms of birds." },
  { start: 117, end: 123, text: "Over the seas, they moved through the sky, and at first Icarus felt afraid, for he had never gone very far in his practice flights, but soon he found that flying was the most fun you could ever have." },
  { start: 124, end: 127, text: "He began to follow the sea birds, dancing up and down above the ocean." },
  { start: 128, end: 132, text: `His father turned around and called, "Icarus, take care!", and for a while Icarus flew carefully, like his father.` },
  { start: 133, end: 139, text: "But then his wings caught a warm air current, and he found that he could move easily above and beyond with little effort. This was the life!" },
  { start: 140, end: 142, text: "He was flying so high that the ships down below looked like tiny insects." },
  { start: 143, end: 146, text: `His father called up to him, "Icarus, remember what I told you. Come down right now!"` },
  { start: 147, end: 150, text: "Icarus could not hear him, however, and his father could not reach him." },
  { start: 151, end: 154, text: "Icarus was far too close to the sun, and soon the wax that held the feathers together began to melt." },
  { start: 155, end: 158, text: "Gradually his wings began to lose their shape, and some of the feathers even fell off." },
  { start: 159, end: 163, text: "Icarus quickly moved his arms with worry and frenzy, but it was too late. He had lost the power of flight, and down he fell with force into the sea." }
];

const bellOfAtriTranscript = [
  { start: 0, end: 4, text: "In the old Italian town of Atri, the King bought a fine, large bell and hung it in the marketplace tower." },
  { start: 5, end: 8, text: "A long rope that reached the ground was attached to the bell." },
  { start: 9, end: 11, text: "The smallest child could ring the bell by pulling the rope." },
  { start: 12, end: 14, text: `"It shall be the Bell of Justice," said the King.` },
  { start: 15, end: 17, text: "The bell gave the people of Atri cause for a great holiday." },
  { start: 18, end: 21, text: "Everyone came to the marketplace to admire the Bell of Justice." },
  { start: 22, end: 24, text: `"Perhaps the King will ring it," said the people, waiting to see what the King would do.` },
  { start: 25, end: 27, text: "But The King did not ring the bell; he stopped and raised his hand." },
  { start: 28, end: 35, text: `"My people", he said, "this bell is yours, but you must never use it except in times of need. When it rings, the judges shall come together at once, hear the case, and give justice. Rich and poor, young and old, it doesn't matter, all will be judged equally."` },
  { start: 36, end: 38, text: "Many times, through the years, the bell in the marketplace called the judges." },
  { start: 39, end: 41, text: "Many troubles were corrected, and criminals answered for their crimes." },
  { start: 42, end: 45, text: "As time passed, the thick rope grew so thin and short that only a tall man could reach it." },
  { start: 46, end: 49, text: `"This will never do," said the judges one day. "What if a child should find himself in trouble?"` },
  { start: 50, end: 52, text: "The judges gave orders that a new rope should be hung down to the ground." },
  { start: 53, end: 55, text: "But no lengthy rope could be found in all of Atri." },
  { start: 56, end: 58, text: "They sent across the mountains for one, but it would be weeks before it arrived." },
  { start: 59, end: 61, text: "What if some great trouble should happen before it came?" },
  { start: 62, end: 64, text: `"Let me fix it for you," said a man nearby.` },
  { start: 65, end: 67, text: "He ran into his garden and came back with a strong vine." },
  { start: 68, end: 71, text: `"This will do for a rope," he said, climbing the bell tower to tie the vine to the bell.` },
  { start: 72, end: 74, text: `The vine easily reached the ground. "Yes," said the judges, "that will do."` },
  { start: 75, end: 79, text: "On the hills above the village, there lived a man who had once been a Knight, visiting foreign lands and waging battles." },
  { start: 80, end: 82, text: "His companion through all that time was his Loyal Horse." },
  { start: 83, end: 85, text: "As the Knight grew older, he sought only gold. He sold all that he had, except his Loyal Horse." },
  { start: 86, end: 90, text: "Day after day, he sat in his little house among his moneybags and planned how he might get more gold." },
  { start: 91, end: 94, text: "Day after day, the Loyal Horse stood outside the Knight's house, starving and teeth chattering from the cold." },
  { start: 95, end: 98, text: `"What is the use of keeping an old horse that can't work?" the mean old Knight said to himself one morning.` },
  { start: 99, end: 102, text: `"I will turn him out to fend for himself. If he dies of starvation, good riddance."` },
  { start: 103, end: 106, text: "So, the brave, old horse was turned out among the rocks on the empty hills." },
  { start: 107, end: 112, text: "He limped weakly, nibbling at rare blades of grass. One hot afternoon, the Loyal Horse happened to walk into the deserted marketplace, and he saw the long plant rope that hung from the Bell of Justice." },
  { start: 113, end: 116, text: "The leaves upon it were still fresh and green. What a satisfying dinner they would be for a starving horse!" },
  { start: 117, end: 121, text: "He stretched his thin neck, tugging at a delicious leaf, and the great bell above him began to ring, which all the people in Atri heard." },
  { start: 122, end: 125, text: `The bell seemed to say, "Someone has done me wrong! Oh, come and judge my case!"` },
  { start: 126, end: 128, text: "The judges donned their official robes and went through the marketplace." },
  { start: 129, end: 131, text: "When they passed through the gate, they saw the old horse eating the plant." },
  { start: 132, end: 136, text: `"Ha!" cried one, "it is the mean old Knight's Loyal Horse. Everybody knows the Knight mistreats him. He shall have justice!" said another citizen.` },
  { start: 137, end: 140, text: "Meanwhile, a crowd came into the marketplace, eager to hear a trial. The Loyal Horse left them awestruck." },
  { start: 141, end: 144, text: "All the citizens could testify to how they saw the old Knight neglecting his Loyal Horse and counting his bags of gold instead." },
  { start: 145, end: 147, text: `"Go bring the old Knight before us," said the judges.` },
  { start: 148, end: 150, text: "When the Knight came, the judges gave their judgment." },
  { start: 151, end: 157, text: `"This Loyal Horse has served you well for many years," they said. "He has saved you from danger and helped you become wealthy; therefore, we order that one half of all your gold be set aside for your Loyal Horse."` },
  { start: 158, end: 161, text: `"With the money, we can buy a green field for your Loyal Horse to graze in and a warm stable to comfort him in his old age."` },
  { start: 162, end: 164, text: "The mean old Knight hung his head, angry to have lost his gold, but the people shouted with joy." },
  { start: 165, end: 168, text: "The Loyal Horse was led to his new stable and had a dinner fit for a brave and Loyal Horse." }
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
  switch (index) {
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
    const start = parseFloat(li.dataset.start );
    const end = parseFloat(li.dataset.end +0.30); // pequeno delay para melhor visualização
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