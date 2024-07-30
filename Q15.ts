let gustList=["Ali","BmJudah","Barthalmai"];
let dontCome=gustList[0];
console.log(dontCome,"is never come");
gustList.splice(0,1, "Eava");
gustList.forEach(oneGuest => console.log(`Hi ${oneGuest}, Would you like to diner with me?`));