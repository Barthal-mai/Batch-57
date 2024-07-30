let magicians: string[] = ["barthalmai","Ahsan","Anjum","Inderias","Nico ul Dum"];

function show_magicians(names: string[]): void {
    names.forEach(name => {
        console.log(name);
    });
}
function make_great(names: string[]): void {
    for (let i = 0; i < names.length; i++) {
        names[i] = "the Great " + names[i];
    }
}

make_great(magicians);

show_magicians(magicians);
