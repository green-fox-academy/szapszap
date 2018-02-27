// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

function divTen (x: number) {
    console.log(x / 10);
    if (x === 0) {
    throw new Error("Fail");
    }
}

divTen(0);
