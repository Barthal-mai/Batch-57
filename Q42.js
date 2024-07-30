var magicians = ["barthalmai", "Ahsan", "Anjum", "Inderias", "Nico ul Dum"];
function show_magicians(names) {
    names.forEach(function (name) {
        console.log(name);
    });
}
function make_great(names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "the Great " + names[i];
    }
}
make_great(magicians);
show_magicians(magicians);
