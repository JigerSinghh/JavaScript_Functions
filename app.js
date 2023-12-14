console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

printOdds(100);

function printOdds(count) {

    for (let i = 1; i <= count; i++) {

        if (i % 2 != 0) {
            console.log(i);
        }
        else {
            console.log("Even number!");
        }

    }

}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

checkAge("Andre", 13);

function checkAge(name, age) {

    let aboveSixteen = `Congrats ${name}, you can drive!`
    let belowSixteen = `Sorry ${name}, but you need to wait until you're 16.`
    if (age < 16) {
        console.log(belowSixteen);
    }
    else {
        console.log(aboveSixteen);
    }
}


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

checkQuadrant(0, 0);

function checkQuadrant(x, y) {

    if (x > 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 1`);
    }
    else if (x < 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 3`);
    }
    else if (x < 0 && y > 0) {
        console.log(`(${x}, ${y}) is in Quadrant 2`);
    }
    else if (x > 0 && y < 0) {
        console.log(`(${x}, ${y}) is in Quadrant 4`);
    }
    else if (x == 0 && y == 0) {
        console.log(`(${x}, ${y}) is on the x and y axis`);
    }
    else if (x == 0 && y != 0) {
        console.log(`(${x}, ${y}) is on the y axis`);
    }
    else if (x != 0 && y == 0) {
        console.log(`(${x}, ${y}) is on the x axis`);
    }
    else {
        console.log("This is not supposed to be seen!!!");
    }


}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

checkTriangle(2, 2, 1);

function checkTriangle(equalSide1, equalSide2, differentSide1) {
    if (equalSide1 + equalSide2 > differentSide1) {
        console.log(`Sides ${equalSide1}, ${equalSide2}, and ${differentSide1} make a valid isosceles triangle`);
    }
    else {
        console.log(`Sides ${equalSide1}, ${equalSide2}, and ${differentSide1} make an invalid isosceles triangle`);
    }
}