const welcomeMessage = [
    "Yo bitches, Novu here!",
    "Hello, I'm Novu!",
    "Bonjour, je suis Novu!",
    "Hola, soy Novu!",
    "Ciao, sono Novu!",
    "Salve, ego sum Novu!",
    "Privet, ya Novu!",
    "Hallo, ich bin Novu!",
    "Asalaamu alaykum, ana Novu!",
    "Konnichiwa, Novu desu!",
   "Nihao, wo shi Novu!",
];

const randomIndex = Math.floor(Math.random() * welcomeMessage.length);
document.getElementById("welcome-message").textContent = welcomeMessage[randomIndex];

const music = [
    "music/Chappell Roan - Casual (SPOTISAVER).mp3",
    "music/Lil Peep, Wicca Phase Springs Eternal - absolute in doubt (SPOTISAVER).mp3",
    "music/Nettspend - lil bieber (SPOTISAVER).mp3",
    "music/Sabrina Carpenter - because i liked a boy (SPOTISAVER).mp3",
    "music/Fleshwater - Kiss the Ladder (SPOTISAVER).mp3",
    "music/Bob Dylan - Knockin' On Heaven's Door (SPOTISAVER).mp3",
    "music/Sabrina Carpenter - My Man on Willpower (SPOTISAVER).mp3",
    "music/Lana Del Rey - Get Free (SPOTISAVER).mp3",
    "music/Sabrina Carpenter - Never Getting Laid (SPOTISAVER).mp3",
    "music/Sabrina Carpenter - Nobody’s Son (SPOTISAVER).mp3",
    "music/Sabrina Carpenter - We Almost Broke Up Again Last Night (SPOTISAVER).mp3",
    "music/Olivia Rodrigo - pretty isn’t pretty (SPOTISAVER).mp3",
    "music/Sabrina Carpenter - Don’t Smile (SPOTISAVER).mp3",
    "music/Sabrina Carpenter - Don’t Worry I’ll Make You Worry (SPOTISAVER).mp3"
];


const randomMusic = Math.floor(Math.random() * music.length);

const audio = document.getElementById("background-music");

audio.src = encodeURI(music[randomMusic]);

audio.play().catch(() => {
    document.addEventListener("click", () => {
        audio.play().catch(console.error);
    }, { once: true });
});


const songTitle = document.getElementById("song-title");

const filename = music[randomMusic]
    .split("/")
    .pop()
    .replace(" (SPOTISAVER).mp3", "");

songTitle.textContent = filename;
