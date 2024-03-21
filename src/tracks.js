function combineTracks(trackList, albumInfo) {
  const formattedTracks = []
  albumInfoClone = Object.assign({}, albumInfo)

  albumInfoClone.isArtist = false
  albumInfoClone.isAlbum = false

  for (let i = 0; i < trackList.length; i++) {
    albumInfoClone.trackName = trackList[i]
    formattedTracks.push(Object.assign({}, albumInfoClone))
  }
  //   albumInfoClone.isArtist = true
  //   formattedTracks.push(Object.assign({}, albumInfoClone))

  //   albumInfoClone.isArtist = false
  //   albumInfoClone.isAlbum = true

  //   formattedTracks.push(Object.assign({}, albumInfoClone))
  return formattedTracks
}

function shuffle(tracks) {
    const shuffled = [...tracks]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

const bandList = []

const bandfTrackList = [
  "Burgers and Fries",
  "Lukewarm Tea",
  "Mac Pack and Cheese",
  "Come on Down",
  "The Bluesberry Shake",
  "Cheese and Ham Surprise",
  "Squid Bucket",
  "No Time to Explain!",
  "Burrito Kombat",
  "That's What It's Smaller Than (The Toaster Song)",
  "See Food",
  "Don't Worry About It",
  "Unsigned",
]

const bandf = {
  albumTitle: "Burgers and Fries",
  artistName: "Just 2 Guys",
  artPath: "assets/img/j2g_bandf.jpg",
  artistArtPath: "assets/img/j2g_artist.jpg",
}

const just4SongsTrackList = [
  "Just 2 Guys - Demo",
  "Toaster(That's What It's Smaller Than)",
  "Burrito Kombat - Demo",
  "Cheese and Ham Surprise - Demo",
]

const just4Songs = {
  albumTitle: "Just 4 Songs",
  artistName: "Just 2 Guys",
  artPath: "assets/img/j2g_j4s.jpg",
  artistArtPath: "assets/img/j2g_artist.jpg",
}

const LivinLaVidaTrackList = ["Livin' la Vida Loca"]

const LivinLaVida = {
  albumTitle: "Livin' la Vida Loca",
  artistName: "Just 2 Guys",
  artPath: "assets/img/j2g_livin.jpg",
  artistArtPath: "assets/img/j2g_artist.jpg",
}

const j2gTrackList = ["Just 2 Guys"]

const j2gSingle = {
  albumTitle: "Just 2 Guys",
  artistName: "Just 2 Guys",
  artPath: "assets/img/j2g_j2g.jpg",
  artistArtPath: "assets/img/j2g_artist.jpg",
}

bandList.push(combineTracks(LivinLaVidaTrackList, LivinLaVida))
bandList.push(combineTracks(j2gTrackList, j2gSingle))
bandList.push(combineTracks(just4SongsTrackList, just4Songs))
bandList.push(combineTracks(bandfTrackList, bandf))

finalBandlist = shuffle(bandList.flat())

function populateItems(bandList) {
  let i = 0

  for (i = 0; i < 7; i++) {
    const clone = document.querySelector(".recent-track").cloneNode(true)
    const art = clone.firstElementChild
    const title = art.nextElementSibling
    let j = i
    if (j > bandList.length) {
      j = j - bandList.length
    }
    art.src = bandList[j].artPath
    title.innerText = bandList[j].trackName
    document.querySelector(".recent").appendChild(clone)
  }

  for (0; i < 11; i++) {
    const clone = document.querySelector(".item").cloneNode(true)
    const art = clone.firstElementChild.firstElementChild
    const title = clone.firstElementChild.nextElementSibling
    const artist = title.nextElementSibling
    let j = i
    if (j > bandList.length) {
      j = j - bandList.length
    }
    art.src = bandList[j].artPath
    title.innerText = bandList[j].trackName
    document.querySelector(".item-container").appendChild(clone)
  }

  for (0; i < 16; i++) {
    const clone = document.querySelector(".item").cloneNode(true)
    const art = clone.firstElementChild.firstElementChild
    const title = clone.firstElementChild.nextElementSibling
    const artist = title.nextElementSibling
    let j = i
    if (j > bandList.length) {
      j = j - bandList.length
    }
    art.src = bandList[j].artPath
    title.innerText = bandList[j].trackName
    document
      .querySelector(".made-for")
      .firstElementChild.nextElementSibling.nextElementSibling.appendChild(
        clone
      )
  }

  for (0; i < 21; i++) {
    const clone = document.querySelector(".item").cloneNode(true)
    const art = clone.firstElementChild.firstElementChild
    const title = clone.firstElementChild.nextElementSibling
    const artist = title.nextElementSibling
    let j = i
    if (j > bandList.length - 1) {
      j = j - bandList.length
    }
    art.src = bandList[j].artPath
    title.innerText = bandList[j].trackName
    document
      .querySelector(".recently-played")
      .firstElementChild.nextElementSibling.nextElementSibling.appendChild(
        clone
      )
  }

  for (0; i < 41; i++) {
    const clone = document.querySelector(".item").cloneNode(true)
    const art = clone.firstElementChild.firstElementChild
    const title = clone.firstElementChild.nextElementSibling
    const artist = title.nextElementSibling
    let j = i
    if (j > bandList.length - 1) {
      j = j - bandList.length
    }
    art.src = bandList[j].artPath
    title.innerText = bandList[j].trackName
    document.querySelector(".library-explore").appendChild(clone)
  }

  return true
}

populateItems(finalBandlist)
