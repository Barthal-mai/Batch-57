var gustList = ["Ali", "BmJudah", "Barthalmai"];
var dontCome = gustList[0];
console.log(dontCome, "is never come");
gustList.splice(0, 1, "Eava");
gustList.forEach(function (oneGuest) { return console.log("Hi ".concat(oneGuest, ", Would you like to diner with me?")); });
