function makeSandwich(...items:string[]){
    console.log("Making Sandwiches using flowing items:\n");

    items.forEach(singleItem=>console.log(singleItem));

    console.log("Enjoy Sandwich\n");

}
// Calling the function 3 time with 3 arguments
makeSandwich("oil","pepper","green zucchini","ricotta cheese","lettuce","rocket");

makeSandwich("pepper","mayonnaise","butter","lettuce","rocket");

makeSandwich("oil","croissant","pickle","potato salli");
