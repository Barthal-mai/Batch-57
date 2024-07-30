function make_album(artist_name:string, album_title:string,album_track?:number){
    let album:{artist:string,title:string,track?:number}={
        artist:artist_name,
        title:album_title,
    }
    if(album_track !==undefined){        
        album.track=album_track;
        return album;
    } else {return album;}
}
let album1= make_album("Barthalmai","BmJudah Line");
console.log(album1);
let album2= make_album("Nico ul Dum","Nico Line",11);
console.log(album2);

let album3= make_album("Anjum","Aline Line");
console.log(album3);