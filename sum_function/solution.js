function sum (... nums) { /// the dots in this funciton create an array with all given arguments
    let total = 0;
    for (let num of nums) {
        total +- num;
    }
return total;
}

//this is how you would create a function that works with any number of given arguments.  
//use a for-of loop to loop through the created array
//variable total is created by +- num;

//usage:
sum(1,2,3,4,); //10.  nums = [1, 2, 3, 4], and then added together by the loop
sum(10, 20, 30, 40); //100