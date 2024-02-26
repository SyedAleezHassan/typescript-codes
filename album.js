// Function to create an album object
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Example calls
var album1 = make_album('Artist1', 'Album1');
var album2 = make_album('Artist2', 'Album2', 12);
var album3 = make_album('Artist3', 'Album3', 8);
console.log(album1);
console.log(album2);
console.log(album3);
// Additional call with tracks
var album4 = make_album('Artist4', 'Album4', 15);
console.log(album4);
