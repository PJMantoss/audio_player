let song = new Audio,
    muted = false,
    vol = 1;

song.type = 'audio/mpeg';
song.src = 'https://www.bensound.com/bensound-music/bensound-summer.mp3';

//Control for Backward & Forward buttons
skip = time => {
    if(time == 'back'){
        song.currentTime = (song.currentTime - 5);
    }else if(time == 'fwd'){
        song.currentTime = (song.currentTime + 5);
    }
}

//Control for Play & Pause buttons
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

//Control for stop button
setPos = pos => {
    song.currentTime = pos;
}

//Control for mute button
mute = () => {
    if(muted){
        song.volume = vol;
        muted = false;
        document.getElementById('mute').innerHTML = '<i class="fa fa-volume-up"></i>';
    }else {
        song.volume = 0;
        muted = true;
        document.getElementById('muted').innerHTML = '<i class="fa fa-volume-up"></i>';
    }
}

//Control for Setting Volume
setVolume = volume => {
    song.volume = volume;
    vol = volume;
}

song.addEventListener('timeupdate', function(){
    curtime = parseInt(song.currentTime, 10);
})