//• Tests for equality and inequality with strings
console.log("equality testing:", "barthalmai" === "barthalmai");
console.log("Inequality testing:", "barthalmai" === "Bm Judah");
//• Tests using the lower case function
console.log("lower case testing:", "BARTHALMAI".toLowerCase() === "barthalmai");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("equality:", 1000 === 1000);
console.log("inequality:", 10 !== 9);
console.log("greater than:", 10000 > 100);
console.log("less than", 10 < 1000);
console.log("greater than or equal:", 10 >= 20);
console.log("less than or equal to:", 5 < 10);
//• Tests using "and" and "or" operators
console.log("And operators:", true && true);
console.log("Or operators:", true || false);
//• Test whether an item is in a array
var car = [1, 2, 3, 4, 5]; // An array named 'car' with elements 1, 2, 3, 4, 5
console.log("Test Number:", car.includes(4)); // Logs "Test Number:" followed by true or false
//• Test whether an item is not in a array
console.log("Test Number is not in array:", !car.includes(10)); // Logs "Test Number:" followed by true or false
