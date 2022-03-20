console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath:"songs\songs\1.mp3" , coverPath:"<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/rpt5rF19/music-background.jpg' border='0' alt='1'/></a>"},
    {songName: "Cielo - Huma-Huma", filePath: "songs\songs\2.mp3", coverPath: "<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/yNz9wMjL/6.jpg' border='0' alt='2'/></a>"},
    {songName: "DEAF KEV", filePath: "songs\songs\3.mp3", coverPath: "<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/QtFT5jdx/3.jpg' border='0' alt='3'/></a>"},
    {songName: "Different Heaven & EH!DE", filePath: "songs\songs\4.mp3", coverPath: "<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/QtFT5jdx/3.jpg' border='0' alt='4'/></a>"},
    {songName: "Janji-Heroes-Tonight-feat", filePath: "songs\songs\5.mp3", coverPath: "<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/yNz9wMjL/6.jpg' border='0' alt='5'/></a>"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs\songs\6.mp3", coverPath: "<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/rpt5rF19/music-background.jpg' border='0' alt='6'/></a>"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs\songs\7.mp3", coverPath: "<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/QtFT5jdx/3.jpg' border='0' alt='7'/></a>"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs\songs\8.mp3", coverPath: "<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/QtFT5jdx/3.jpg' border='0' alt='8'/></a>"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs\songs\9.mp3", coverPath: "<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/yNz9wMjL/6.jpg' border='0' alt='9'/></a>"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs\songs\10.mp3", coverPath: "<a href='https://postimages.org/' target='_blank'><img src='https://i.postimg.cc/rpt5rF19/music-background.jpg' border='0' alt='10'/></a>"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})