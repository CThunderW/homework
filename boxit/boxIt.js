
function drawLine(inputName){
   return "-".repeat(inputName.length);
}

function drawTopBorder(inputName){
    return `┏${drawLine(inputName)}"┓`;
};

function drawMiddleBorder(inputName){
    return `┣${drawLine(inputName)}┫`;
};

function drawBottomBorder(inputName){
    return `┗${drawLine(inputName)}┛`;
};


function drawBarsAround(inputName){
    return `|${inputName}|`;
};

drawTopBorder(inputName)
drawBarsAround(inputName)
drawMiddleBorder(inputName)

function boxIt(inputName, ...) {}

//git upload test for charlotte