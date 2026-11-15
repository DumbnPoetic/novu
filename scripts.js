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