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

// Play David Gray audio

function playDavid() {
    const audio = document.getElementById('david-audio')
    audio.volume = 0.5
    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}

function updateTimes() {
    const audio = document.getElementById('david-audio')
    const time = document.getElementById('current-time')
    const songDuration = document.getElementById('duration')
    const currentTime = Math.floor(audio.currentTime).toString()
    const currentDuration = Math.floor(audio.duration).toString()

    time.innerHTML = formatSecondsAsTime(currentTime)
    songDuration.innerHTML = formatSecondsAsTime(currentDuration)

}

// Play Vivaldi audio

function playVivaldi() {
    const audio = document.getElementById('vivaldi-audio')
    audio.volume = 0.5
    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}
// Play Queen audio

function playQueen() {
    const audio = document.getElementById('queen-audio')
    audio.volume = 0.5
    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}
// Play Tchaikovsy audio

function playTchaikovsky() {
    const audio = document.getElementById('tchaikovsky-audio')
    audio.volume = 0.3
    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}
// Play Aretha Franklin audio

function playAretha() {
    const audio = document.getElementById('aretha-audio')
    audio.volume = 0.5
    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}
// Play Tracy Chapman audio

function playTracy() {
    const audio = document.getElementById('tracy-audio')
    audio.volume = 0.5
    if (isPlaying ) {
        audio.play()
    } else {
        audio.pause()
    }
    
    isPlaying = !isPlaying
}
// Random audio

myAudios = ['david-audio', 'vivaldi-audio', 'queen-audio', 'tchaikovsky-audio', 'aretha-audio', 'tracy-audio']
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
