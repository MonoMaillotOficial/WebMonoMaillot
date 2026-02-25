const songs = [
    {
        title: "FFH",
        src: "songs/FFH.mp3",
        cover: "imgs/Gemini_Generated_Image_2zeup82zeup82zeu.png",
        lyrics: [
            { time: 0, text: "Intro musical..." },
            { time: 10, text: "Esta es la canción FFH" },
            { time: 15, text: "Disfruta del ritmo" },
            { time: 20, text: "Mono Maillot en la casa" },
            { time: 25, text: "Sigue la música" },
            { time: 30, text: "..." }
        ]
    },
    {
        title: "Insano",
        src: "songs/Insano.mp3",
        cover: "imgs/Gemini_Generated_Image_2zeup82zeup82zeu.png",
        lyrics: [
            { time: 0, text: "Insano..." },
            { time: 5, text: "Todo se vuelve loco" },
            { time: 10, text: "No hay control" }
        ]
    },
    {
        title: "MASA",
        src: "songs/MASA.mp3",
        cover: "imgs/Gemini_Generated_Image_2zeup82zeup82zeu.png",
        lyrics: [
            { time: 0, text: "MASA" },
            { time: 5, text: "Mucho volumen" },
            { time: 10, text: "Siente el bajo" }
        ]
    },
    {
        title: "Noche loca",
        src: "songs/Noche loca.mp3",
        cover: "imgs/Gemini_Generated_Image_2zeup82zeup82zeu.png",  
        lyrics: [
            { time: 0, text: "Noche loca" },
            { time: 5, text: "Nadie duerme hoy" },
            { time: 10, text: "Fiesta hasta el amanecer" }
        ]
    },
    {
        title: "Not mine",
        src: "songs/Not mine.mp3",
        cover: "imgs/Gemini_Generated_Image_2zeup82zeup82zeu.png",
        lyrics: [
            { time: 0, text: "Not mine" },
            { time: 5, text: "No es mío" },
            { time: 10, text: "Pero suena bien" }
        ]
    },
    {
        title: "Dioses del reggaeton",
        src: "songs/dioses del reggaeton.mp3",
        cover: "imgs/Gemini_Generated_Image_2zeup82zeup82zeu.png",
        lyrics: [
            { time: 0, text: "Dioses del reggaeton" },
            { time: 5, text: "Bajaron del cielo" },
            { time: 10, text: "Para hacernos perrear" }
        ]
    },
    {
        title: "Moñota",
        src: "songs/moñota.mp3",
        cover: "imgs/Gemini_Generated_Image_2zeup82zeup82zeu.png",      
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
