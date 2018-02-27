'use strict'

// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
const fs = require('fs');

function copyIt(oldF: string, newF: string) {
    let readMe: string = fs.readFileSync(oldF, 'utf-8');
    try {
        readMe = fs.writeFileSync(newF, readMe);
        console.log(true);
    } catch {
        console.log(false);
    }
}
copyIt("my-file.txt", "newFile.txt");
