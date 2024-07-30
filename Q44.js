function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making Sandwiches using flowing items:\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("Enjoy Sandwich\n");
}
// Calling the function 3 time with 3 arguments
makeSandwich("oil", "pepper", "green zucchini", "ricotta cheese", "lettuce", "rocket");
makeSandwich("pepper", "mayonnaise", "butter", "lettuce", "rocket");
makeSandwich("oil", "croissant", "pickle", "potato salli");
