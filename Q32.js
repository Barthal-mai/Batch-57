/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/
var current_users = ["admin", "barthalmai", "Ahsan", "Anjum", "Inderias"];
var newUsers = ["admin", "Furqan", "Ahsan", "isha", "Inderias"];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var new_user = newUsers_1[_i];
    var lowercase_new_user = new_user.toLowerCase();
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_user)) {
        console.log("the username ".concat(new_user, " is not available"));
    }
    else {
        console.log("the username ".concat(new_user, " is available"));
    }
}
