let userNames: string[]=["admin","barthalmai","Ahsan","Anjum","Inderias"];

userNames.forEach(usernames => {
    if(usernames==="Admin"){
        console.log("Hello", usernames, "would you like to see a status report?");
    }else{
        console.log("Hello", usernames, "thank you for logging in again.");

    }
});