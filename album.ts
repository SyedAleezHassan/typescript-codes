// Function to create an album object
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = { artist, title };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Example calls
let album1 = make_album('Artist1', 'Album1');
let album2 = make_album('Artist2', 'Album2', 12);
let album3 = make_album('Artist3', 'Album3', 8);

console.log(album1);
console.log(album2);
console.log(album3);

// Additional call with tracks
let album4 = make_album('Artist4', 'Album4', 15);
console.log(album4);
