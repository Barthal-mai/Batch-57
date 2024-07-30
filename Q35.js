function printAnimalStatements(animals) {
    // Print each animal name
    console.log("List of animals:");
    for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
        var animal = animals_1[_i];
        console.log(animal);
    }
    console.log(); // Empty line for separation
    // Print statement about each animal
    console.log("Statements about each animal:");
    for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
        var animal = animals_2[_a];
        switch (animal) {
            case "dog":
                console.log("A dog would make a great pet.");
                break;
            case "cat":
                console.log("A cat would make a great companion.");
                break;
            case "rabbit":
                console.log("A rabbit is cute and easy to care for.");
                break;
            default:
                console.log("A ".concat(animal, " would make a great pet."));
                break;
        }
    }
    console.log(); // Empty line for separation
    // Print common characteristic statement
    console.log("Common characteristic:");
    console.log("Any of these animals would make a great pet!");
}
// List of animals
var animals = ["dog", "cat", "rabbit"];
// Call function to print statements about animals
printAnimalStatements(animals);
