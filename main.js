
// Add a new playlist
function addPlaylist() {
    const playlist = document.getElementById('playlist')
    const allPlaylists = document.getElementById('all-playlists')
    const clone = playlist.cloneNode(true)

    const newPlaylist = allPlaylists.appendChild(clone)
    newPlaylist.innerHTML = playlistName()
}

function playlistName() {
    const name = prompt('Playlist name?')
    return name
}

// Convert seconds to time format
function formatSecondsAsTime(secs) {
    let hr  = Math.floor(secs / 3600);
    let min = Math.floor((secs - (hr * 3600))/60);
    let sec = Math.floor(secs - (hr * 3600) -  (min * 60));
  
    if (min < 10){ 
      min = "0" + min; 
    }
    if (sec < 10){ 
      sec  = "0" + sec;
    }
  
    return min + ':' + sec;
  }


// Play audios
let isPlaying = false

// Play Ethereal audio
function playEthereal() {
    const audio = document.getElementById('ethereal-audio')
    audio.volume = 0.5

    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}

function updateTimes() {
    const audio = document.getElementById('ethereal-audio')
    const time = document.getElementById('current-time')
    const songDuration = document.getElementById('duration')
    const currentTime = Math.floor(audio.currentTime).toString()
    const currentDuration = Math.floor(audio.duration).toString()

    time.innerHTML = formatSecondsAsTime(currentTime)
    songDuration.innerHTML = formatSecondsAsTime(currentDuration)

}

// Play Fun life audio
function playFun() {
    const audio = document.getElementById('fun-audio')
    audio.volume = 0.5

    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}

// Play Happy rock audio
function playHappy() {
    const audio = document.getElementById('happy-audio')
    audio.volume = 0.5

    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}

// Play Dance audio
function playDance() {
    const audio = document.getElementById('dance-audio')
    audio.volume = 0.3

    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}

// Play Trap audio
function playTrap() {
    const audio = document.getElementById('trap-audio')
    audio.volume = 0.5

    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}

// Play Sunshine audio
function playSunshine() {
    const audio = document.getElementById('sunshine-audio')
    audio.volume = 0.5

    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}

// Random audio
myAudios = ['ethereal-audio', 'fun-audio', 'happy-audio', 'dance-audio', 'trap-audio', 'sunshine-audio']
function randomAudio() {
    let index = Math.floor(Math.random() * 100) % myAudios.length
    let id = myAudios[index]
    const audioElement = document.getElementById(id)
    audioElement.volume = 0.5

    if (isPlaying) {
        audioElement.play()
    } else {
        audioElement.pause()
    }

   isPlaying = !isPlaying
}