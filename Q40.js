function make_album(artist_name, album_title, album_track) {
    var album = {
        artist: artist_name,
        title: album_title,
    };
    if (album_track !== undefined) {
        album.track = album_track;
        return album;
    }
    else {
        return album;
    }
}
var album1 = make_album("Barthalmai", "BmJudah Line");
console.log(album1);
var album2 = make_album("Nico ul Dum", "Nico Line", 11);
console.log(album2);
var album3 = make_album("Anjum", "Aline Line");
console.log(album3);
