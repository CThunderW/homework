//BOXIT
const strings = process.argv.slice(2);

// if(!args[0]){
//     console.log("Please enter strings or a CSV filename")

//FIND LONGEST STRING FUNCTION
// let args = ["jon snow", "Khaleesi", "shitbag Stannis"]
let longestString = 0;
for (let string of strings){
    if (string.length>longestString) {
        longestString = string.length
    }
}

//DRAWLINE FUNCTION
//draws lines for the mid-sections of other draw functions
function drawLine(longestString){
    let result = "";
    for(let i = 0; i<longestString; i++){
        result += "-";
    }return result;
}
//TOP BORDER FUNCTION
function drawTopBorder(longestString){
    const mid = drawLine(longestString);
    return `┏${mid}┓`;
}

//MIDDLE BORDER FUNCTION
function drawMidBorder(longestString){
    const mid = drawLine(longestString);
    return `┣${mid}┫`;
}

//LOWER BORDER FUNCTION
function drawLowBorder(longestString){
    const mid = drawLine(longestString);
    return `┗${mid}┛`;
}

//DRAW BARS AROUND FUNCTION
//places a sidebar in front of and behind each entry.
function drawStringBorder(string){
    return `┃${string}${" ".repeat(longestString-string.length)}┃`;
}

//BOX IT FUNCTION
function boxIt(strings){
    let finalDraw = "";
    let tempString = "";
        if (strings.length === 0){
        return finalDraw +=`${drawTopBorder(longestString)}\n${drawLowBorder(longestString)}`
        }   else if (strings.length ===1){
            return finalDraw += `${drawTopBorder(longestString)}\n${drawStringBorder(strings[0])}\n${drawLowBorder(longestString)}`
     } else {finalDraw+=`${drawTopBorder(longestString)}\n`
            for (let i=0; i<strings.length; i+=1) {
                finalDraw += `${drawStringBorder(strings[i])}\n`;
                if (i<strings.length-1){
                    finalDraw += `${drawMidBorder(longestString)}\n`;
                } else {
                    finalDraw += `${drawLowBorder(longestString)}\n`;
                }
            

            }
        return finalDraw;
     }
}
            
console.log(boxIt(strings));


