let song = new Audio,
    muted = false,
    vol = 1;

song.type = 'audio/mpeg';
song.src = 'https://www.bensound.com/bensound-music/bensound-summer.mp3';

skip = time => {
    if(time == 'back'){
        song.currentTime = (song.currentTime - 5);
    }else if(time == 'fwd'){
        song.currentTime = (song.currentTime + 5);
    }
}

//Control for Play & Pause
playpause = () => {
    if(!song.paused){
        song.pause();
    }else{
        song.play();
    }
}

//