function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Shirt size: ".concat(size.toUpperCase(), ", Message: ").concat(message));
}
// Making a large shirt with the default message
make_shirt(); // Outputs: Shirt size: LARGE, Message: I love TypeScript
// Making a medium shirt with the default message
make_shirt("medium"); // Outputs: Shirt size: MEDIUM, Message: I love TypeScript
// Making a shirt of any size with a different message
make_shirt("small", "Hello from TypeScript!"); // Outputs: Shirt size: SMALL, Message: Hello from TypeScript!
