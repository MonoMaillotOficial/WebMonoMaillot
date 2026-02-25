const songs = [
    {
        title: "FFH",
        src: "songs/FFH.mp3",
        cover: "imgs/Gemini_Generated_Image_cdov99cdov99cdov.png",
        lyrics: [
            { time: 13, text: "Five fucking hours in the stars(in the stars)" },
            { time: 16, text: "five fucking hours in the stars(in the stars)" },
            { time: 19, text: "you try to play with me but nah(but nah)" },
            { time: 22, text: "im going to fuck you in doggistyle(style)" },
            { time: 26, text: "Te creías el rey del rap" },
            { time: 28, text: "tu baby la tengo guarda" },
            { time: 30, text: "tu papis me van a escuchar" },
            { time: 31, text: "tu te crees alguien pero na" },
            { time: 33, text: "Tu vives en una película" },
            { time: 34, text: "es lalaland" },
            { time: 35, text: "y ahora pa pa no ratata" },
            { time: 37, text: "dos disparos nada más" },
            { time: 39, text: "porque en ra-tas" },
            { time: 41, text: "no hay que gastar" },
            { time: 42, text: "tu quieres fluir" },
            { time: 44, text: "pues seminal" },
            { time: 46, text: "Five fucking hours in the stars(in the stars)" },
            { time: 49, text: "five fucking hours in the stars(in the stars)" },
            { time: 53, text: "you try to play with me but nah(but nah)" },
            { time: 57, text: "im going to fuck you in doggistyle(style)" },
            { time: 60, text: "Wanna fuuck" },
            { time: 61, text: "baby you're Mona Lisaaa" },
            { time: 63, text: "a ti te quiero pintar" },
            { time: 65, text: "esto no va ha acabar" },
            { time: 67, text: "tu quieres mas ron pero te toca mamar" },
            { time: 73, text: "Five fucking hours in the stars(in the stars)" },
            { time: 76, text: "five fucking hours in the stars(in the stars)" },
            { time: 79, text: "you try to play with me but nah(but nah)" },
            { time: 81, text: "im going to f*ck you in doggistyle(style)" },
            { time: 86, text: "Tu ya estuviste en dagestan" },
            { time: 89, text: "cinco meses reformando" },
            { time: 90, text: "pero sin mejorar" },
            { time: 92, text: "tu baby esta llamando" },
            { time: 93, text: "no lo voy a colgar" },
            { time: 94, text: "tus padres preguntando" },
            { time: 96, text: "si podemos colaborar" },
            { time:98, text: "tu perdiste los comandos" },
            { time: 99, text: "ahora te toca picar" },
            { time: 101, text: "yo he vido desde abajo" },
            { time: 103, text: "y ahora nos llaman papas" },
            { time: 106, text: "Five fucking hours in the stars(in the stars)" },
            { time: 109, text: "five fucking hours in the stars(in the stars)" },
            { time: 112, text: "you try to play with me but nah(but nah)" },
            { time: 115, text: "im going to fuck you in doggistyle(style)" },
            { time: 119, text: "Tu tuviste algo pero ya no eres nada" },
            { time: 122, text: "me llamas llorando por la madrugada" },
            { time: 126, text: "trataste de hundir un barco que volaba" },
            { time: 129, text: "ahora te toca ir cerrando las heridas que no sana" },
            { time: 132, text: "Five fucking hours in the stars(in the stars)" },
            { time: 135, text: "five fucking hours in the stars(in the stars)" },
            { time: 139, text: "you try to play with me but nah(but nah)" },
            { time: 143, text: "im going to f*ck you in doggi style(style)" },
        ]
    },
    {
        title: "Insano",
        src: "songs/Insano.mp3",
        cover: "imgs/Abelcok.png",
        lyrics: [
            { time: 0, text: "Insano..." },
            { time: 5, text: "Todo se vuelve loco" },
            { time: 10, text: "No hay control" }
        ]
    },
    {
        title: "MASA",
        src: "songs/MASA.mp3",
        cover: "imgs/Farlopa.png",
        lyrics: [
            { time: 0, text: "MASA" },
            { time: 5, text: "Mucho volumen" },
            { time: 10, text: "Siente el bajo" }
        ]
    },
    {
        title: "Noche loca",
        src: "songs/Noche loca.mp3",
        cover: "imgs/Raulitas.png",  
        lyrics: [
            { time: 0, text: "Noche loca" },
            { time: 5, text: "Nadie duerme hoy" },
            { time: 10, text: "Fiesta hasta el amanecer" }
        ]
    },
    {
        title: "Not mine",
        src: "songs/Not mine.mp3",
        cover: "imgs/young.png",
        lyrics: [
            { time: 0, text: "Not mine" },
            { time: 5, text: "No es mío" },
            { time: 10, text: "Pero suena bien" }
        ]
    },
    {
        title: "Dioses del reggaeton",
        src: "songs/dioses del reggaeton.mp3",
        cover: "imgs/Portada dioses del reggaeton.png",
        lyrics: [
            { time: 0, text: "Dioses del reggaeton" },
            { time: 5, text: "Bajaron del cielo" },
            { time: 10, text: "Para hacernos perrear" }
        ]
    },
    {
        title: "Moñota",
        src: "songs/moñota.mp3",
        cover: "imgs/Gemini_Generated_Image_cdov99cdov99cdov.png",      
        lyrics: [
            { time: 0, text: "Moñota" },
            { time: 5, text: "Estilo único" },
            { time: 10, text: "Inconfundible" }
        ]
    }
];

let songIndex = 0;

// DOM Elements
const audio = document.getElementById("audio");
const playBtn = document.querySelector(".play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.querySelector(".progress");
const currentContainer = document.querySelector(".current");
const durationContainer = document.querySelector(".duration");
const volumeSlider = document.querySelector(".volume");
const muteBtn = document.querySelector(".mute");
const coverImg = document.getElementById("cover-img");
const songTitle = document.getElementById("song-title");
const downloadLink = document.getElementById("download");
const lyricsContent = document.getElementById("lyrics-content");

// Initialize Player
loadSong(songs[songIndex]);

// Functions
function loadSong(song) {
    songTitle.innerText = song.title;
    audio.src = song.src;
    coverImg.src = song.cover;
    downloadLink.href = song.src;
    
    // Load lyrics
    loadLyrics(song.lyrics);
}

function playSong() {
    audio.play();
    playBtn.textContent = "⏸";
}

function pauseSong() {
    audio.pause();
    playBtn.textContent = "▶";
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (isNaN(duration)) return;
    
    const progressPercent = (currentTime / duration) * 100;
    progress.value = progressPercent;
    
    currentContainer.innerText = formatTime(currentTime);
    durationContainer.innerText = formatTime(duration);
    
    syncLyrics(currentTime);
}

function setProgress() {
    const width = this.value;
    const duration = audio.duration;
    audio.currentTime = (width / 100) * duration;
}

function setVolume() {
    audio.volume = this.value;
}

function toggleMute() {
    audio.muted = !audio.muted;
    muteBtn.textContent = audio.muted ? "🔇" : "🔊";
}

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    let seconds = Math.floor(time % 60);
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
}

// Lyrics Logic
function loadLyrics(lyrics) {
    lyricsContent.innerHTML = "";
    if (!lyrics || lyrics.length === 0) {
        lyricsContent.innerHTML = "<p>No lyrics available.</p>";
        return;
    }
    
    lyrics.forEach((line, index) => {
        const p = document.createElement("p");
        p.innerText = line.text;
        p.setAttribute("data-time", line.time);
        p.id = `line-${index}`;
        lyricsContent.appendChild(p);
    });
}

function syncLyrics(currentTime) {
    const lyrics = songs[songIndex].lyrics;
    if (!lyrics) return;
    
    // Find current line
    let currentLineIndex = -1;
    
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time) {
            currentLineIndex = i;
        } else {
            break;
        }
    }
    
    // Highlight logic
    const allLines = lyricsContent.querySelectorAll("p");
    allLines.forEach(line => line.classList.remove("highlight"));
    
    if (currentLineIndex !== -1) {
        const activeLine = document.getElementById(`line-${currentLineIndex}`);
        if (activeLine) {
            activeLine.classList.add("highlight");
            // Auto scroll to active line
            activeLine.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }
}

// Event Listeners
playBtn.addEventListener("click", () => {
    const isPlaying = playBtn.textContent === "⏸";
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress);
audio.addEventListener("ended", nextSong);

progress.addEventListener("input", setProgress);
volumeSlider.addEventListener("input", setVolume);
muteBtn.addEventListener("click", toggleMute);
