let magicians: string[] =  ["barthalmai","Ahsan","Anjum","Inderias","Nico ul Dum"];

function show_magicians(names: string[]): void {
    names.forEach(name => {
        console.log(name);
    });
}
function make_great(names: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let name of names) {
        greatMagicians.push("the Great " + name);
    }
    return greatMagicians;
}
let greatMagicians = make_great([...magicians]);
console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(greatMagicians);
