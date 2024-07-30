let locations:string[]=["islamabad","peshawar","Karchi","Taxila","Wahcantt"];
console.log("location array order:",locations);
//Print your array in alphabetical order without modifying the actual list.
console.log("alphabetical order:",[...locations].sort());
//Show that your array is still in its original order by printing it.
console.log("location array order:",locations);
// Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse alphabetical order:",[...locations].sort().reverse());
// Show that your array is still in its original order by printing it again.
console.log("location array order:",locations);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse the order:",locations.reverse());
//Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("Original order:",locations.reverse());
//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("alphabetical order:",locations.sort());
//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("alphabetical order:",locations.reverse());