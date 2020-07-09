let song = new Audio,
    muted = false,
    vol = 1;

song.type = 'audio/mpeg';
song.src = 'https://www.bensound.com/bensound-music/bensound-summer.mp3';

//Controls for Backward & Forward buttons
skip = time => {
    if(time == 'back'){
        song.currentTime = (song.currentTime - 5);
    }else if(time == 'fwd'){
        song.currentTime = (song.currentTime + 5);
    }
}

//Controls for Play & Pause buttons
playpause = () => {
    if(!song.paused){
        song.pause();
    }else{
        song.play();
    }
}

//Control for stop button
stop = () => {
    song.pause();
    song.currentTime = 0;
    document.getElementById('seek').value = 0;
}