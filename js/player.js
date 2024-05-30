class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

var jbox = new Jukebox()
const albumsList = [
    {artist: 'Operation Ivy', title: 'Energy'},
    {artist: 'Blink 182', title: 'Dude Ranch'},
    {artist: 'New Found Glory', title: 'Sticks and Stones'}
]

albumsList.forEach(data => {
    const album = new Album(data.artist, data.title)
    jbox.addAlbum(album)
})

const albumSelect = document.getElementById('albumSelect')
jbox.albums.forEach((album, index) => {
    const option = document.createElement('option')
    option.value = index;
    option.textContent = `${album.artist} - ${album.title}`
    albumSelect.appendChild(option)
})

document.getElementById('playButton').addEventListener('click', () => {
    const selectedIndex = albumSelect.value;
    if(selectedIndex !== '') {
        jbox.albums[selectedIndex].play()
        console.log(`Playing ${jbox.albums[selectedIndex].display()}`)
    }
})

document.getElementById('showFavoriteButton').addEventListener('click', () => {
    const favoriteAlbumText = jbox.favoriteAlbum();
    document.getElementById('favoriteAlbum').textContent = `Your favorite album is ${favoriteAlbumText}`
})