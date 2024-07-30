var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var locations = ["islamabad", "peshawar", "Karchi", "Taxila", "Wahcantt"];
console.log("location array order:", locations);
//Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order:", __spreadArray([], locations, true).sort());
//Show that your array is still in its original order by printing it.
console.log("location array order:", locations);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse alphabetical order:", __spreadArray([], locations, true).sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("location array order:", locations);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order:", locations.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original order:", locations.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("alphabetical order:", locations.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("alphabetical order:", locations.reverse());
