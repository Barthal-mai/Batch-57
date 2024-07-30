function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`Shirt size: ${size.toUpperCase()}, Message: ${message}`);
}

// Making a large shirt with the default message
make_shirt(); // Outputs: Shirt size: LARGE, Message: I love TypeScript

// Making a medium shirt with the default message
make_shirt("medium"); // Outputs: Shirt size: MEDIUM, Message: I love TypeScript

// Making a shirt of any size with a different message
make_shirt("small", "Hello from TypeScript!"); // Outputs: Shirt size: SMALL, Message: Hello from TypeScript!
