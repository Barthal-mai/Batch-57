function printAnimalStatements(animals: string[]): void {
    console.log("List of animals:");
    for (let animal of animals) {
        console.log(animal);
    }

    console.log(); 
    console.log("Statements about each animal:");
    for (let animal of animals) {
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
                console.log(`A ${animal} would make a great pet.`);
                break;
        }
    }

    console.log();
    
    console.log("Common characteristic:");
    console.log("Any of these animals would make a great pet!");
}

let animals: string[] = ["dog", "cat", "rabbit"];
printAnimalStatements(animals);
