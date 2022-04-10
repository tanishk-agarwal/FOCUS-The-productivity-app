const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
// const progress = document.querySelector('.music-container')
// const musicContainer = document.querySelector('.music-container')
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');

// song titles
const songs = ['bird', 'breeze', 'rain'];

// keep track of songs
let songIndex = 0;

// initially load song info DOM
loadSong(songs[songIndex]);

// update song info
function loadSong(song)
{
    // changing title
    title.innerText = song;

    // changing audio
    audio.src = `Audio/${song}.mp3`;

    //changing cover pic
    cover.src = `Icons/${song}.png`;
}

// event listeners
//play button

function playSong()
{
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong()
{
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong()
{
    songIndex--;

    if (songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong()
{
    songIndex++;

    if (songIndex > songs.length - 1){
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong();
    }
    else {
        playSong();
    }
});

//change song events

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);