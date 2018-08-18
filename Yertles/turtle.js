#!/usr/bin/env node
const directions = ["east", "south", "west", "north"];
class Turtle {
    constructor(x, y) {
        //x and y will be updated by our moves, which will then push new coordinate pairs to this.commandEndPoints.
        this.x = x;
        this.y = y;
        //facingIndex is used to determine the direction of travel by the forward function.
        this.facingIndex = 0;
        //facing can be used to get a text readout of the turtle's heading.
        this.facing = directions[this.facingIndex];
        this.touchedCoordinates = [];
        this.commandEndPoints = [[this.x, this.y]];
        //couldn't get (Math.max(allX)-(Math.min(allX) to return anything but undefined, so included a long way to
        //calculate the total grid-width and height. 
        this.minX = 0;
        this.maxX = 0;
        this.minY = 0;
        this.maxY = 0;
    }
    bark(){
        console.log(`The turtler borks "BORK-BROK!`);
    }
    findMinXandY(){
        if (this.x<this.minX) {this.minX = this.x};
        if (this.y<this.minY) {this.minY = this.y};
        return this;
    }
    findMaxXandY(){
        if (this.x>this.maxX) {this.maxX = this.x};
        if (this.y>this.maxY) {this.maxY = this.y};
        return this;
    }
    stepsGroup(){
        this.findMinXandY();
        this.findMaxXandY();

    }
    forward(steps){
        //in case variable entered as steps is NaN.
        if (isNaN(steps)){
            console.log("Please enter a number")
            return "Please enter a number of steps";
        }     
        // HEADING 0 = EAST, 1 = SOUTH, 2 = WEST, 3 = NORTH
        else if (this.facingIndex === 0) {
            for (let i = 0; i < steps; i++) 
                if(i<steps-1){
                    this.touchedCoordinates.push([this.x += 1, this.y]);
                } else {this.commandEndPoints.push([this.x+=1, this.y]);
                    this.stepsGroup();
                } return this;
        } else if (this.facingIndex === 1) {
                for (let i = 0; i < steps; i++) if (i<steps-1){
                    this.touchedCoordinates.push([this.x, this.y -= 1]);
                } else {this.commandEndPoints.push([this.x, this.y -= 1]);
                    this.stepsGroup();}
                return this;
        
        } else if (this.facingIndex === 2){
                for (let i = 0; i < steps; i++) if (i<steps-1){
                    this.touchedCoordinates.push([this.x -= 1, this.y]);      
                } else {this.commandEndPoints.push([this.x -= 1, this.y]);
                    this.stepsGroup();
                } return this;
        
        } else if (this.facingIndex === 3) {
                for (let i = 0; i < steps; i++) if (i<steps-1){
                    this.touchedCoordinates.push([this.x, this.y += 1]);
                } else { this.commandEndPoints.push([this.x, this.y += 1]);
                    this.stepsGroup();}
                return this;
        }
    }
    right(){
        if (this.facingIndex === 3){
            this.facingIndex = 0;
            return this;
        } else {
            this.facingIndex += 1;

        } return this;
    }
    left(){
        if(this.facingIndex === 0){
            this.facingIndex = 3;
            return this;
        } else {
            this.facingIndex -= 1;
        }  return this;
    }
    allPoints(){
        console.log(this.commandEndPoints)
    }
    print(){
        const yPlane = [];
         let commandString = JSON.stringify(this.commandEndPoints); //Stores the coordinates as a string to run indexOf() on
         let touchedString = JSON.stringify(this.touchedCoordinates);
         for(let y = this.maxY; y >= this.minY; y--){
                let temp = [];
                for(let x = this.minX; x <= this.maxX; x++){
                    let checking = [x,y];
                    checking = JSON.stringify(checking); //Stores current x/y value as string to pass to the string of coordinates
                    let c = commandString.indexOf(checking) //Stores index. Index value is irrelevant, important part is either -1 (doesn't exist) or above (does exist)
                    let t = touchedString.indexOf(checking)
                    if(c !== -1){
                        temp.push("🐢");
                        } else if(t !== -1){
                            temp.push("🔥");
                        } else {
                            temp.push(" ");
                        }             
                }
                yPlane.push(temp);
            }
            let result = "";
            for(let line of yPlane){
                result += line.join("  ") + "\n";
        }
        console.log(result);
        this.bark();
    } 
}

const speedy = new Turtle(0, 4)
.forward(3)
.left()
.forward(3)
.right()
.forward(5)
.right()
.forward(8)
.right()
.forward(5)
.right()
.forward(3)
.left()
.forward(3)
.print();