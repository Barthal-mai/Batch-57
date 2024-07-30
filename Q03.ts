let personName:string="barthalmai";
console.log("LowerCase:", personName.toLowerCase());
console.log("UpperCase:",personName.toUpperCase());
console.log("UpperCase:", toTitleCase(personName));
// Function to convert string to titlecase
function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}