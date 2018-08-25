const readline = require("readline");
const fs = require("fs")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const currentListArr = [[1, "test1"], [1, "test2"], [0, "test3"]];
const welcomeText = "Welcome to CLI TO-DO!";
const menuText = "(v) View • (n) New • (c#) Complete • (d#) Delete • (q) Quit"
const divider = "‾".repeat(menuText.length);
const welcomePadNum = (menuText.length - welcomeText.length) /2;
const welcomePad = "✩".repeat(welcomePadNum-1);

function testDispay(){
    for (let i = 1; i < currentListArr.length+1; i++){
        let checkbox = "✅";
        if (currentListArr[i-1][0] === 0){
            checkbox = "❗️";
        } console.log(i, checkbox, currentListArr[i-1][1]);
    } console.log(menuText);
}

console.log();
console.log();
console.log(welcomePad, welcomeText, welcomePad);
console.log(divider);
console.log(menuText);

rl.on('line', function (cmd) {
        // console.log(menuText);
        if (!cmd) {
            console.log("Please enter a command")
        } else if (cmd === "v") {
            if (currentListArr.length === 0) {
                console.log("please add something to your list by pressing `n + enter`")
            } else {
            console.log("Showing your current list!")
            testDispay();
            }
        } else if (cmd === "n"){
            rl.question('What would you like to add to your to-dos?\n', (answer) => {
                currentListArr.push([0, answer]);
                console.log(`Okie, added '${answer}' to your list 📝`);
                testDispay();
              });
        } else if (cmd.startsWith("c")) {
            let markComplete = (cmd.slice(1)-1);
            currentListArr[markComplete][0] = 1;
            console.log(`Marked '${currentListArr[markComplete][1]}' as completed! ✅`);
            testDispay();
        } else if (cmd.startsWith("d")) {
            let toDel = (cmd.slice(1)-1);
            console.log(`Deleted '${currentListArr[toDel][1]}' from your list! ❌`);
            currentListArr.splice(toDel, 1);
            testDispay();
        } else if (cmd === "q") {
            console.log("Give'r ✌️");
            rl.close();
        } else {
            console.log("please enter a VALID command");
            testDispay();
        }
    });
    