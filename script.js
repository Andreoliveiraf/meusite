let heartsVisible = false; // Flag para verificar se os corações já foram exibidos

function unlockSite() {
    if (!heartsVisible) {
        document.getElementById("overlay").classList.add("hidden");
        startFallingHearts();
        heartsVisible = true; // Definir a flag para verdadeiro, para que os corações não apareçam novamente
    }
    startCounter();
}

function startFallingHearts() {
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("floating-heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000); // Remove o coração após a animação
}

function startCounter() {
    const startDate = new Date("2022-11-19T00:00:00");
    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("counter").innerHTML = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    }, 1000);
}
