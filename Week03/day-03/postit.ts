'use strict'

/* Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!" */

class PostIt {
    backgroundColor:string;
    text: string;
    textColor: string;
}

let first = new PostIt();
first.backgroundColor = "orange";
first.text = "Idea 1";
first.textColor = "blue";

let second = new PostIt();
second.backgroundColor = "pink";
second.text = "Awesome";
second.textColor = "black";

let third = new PostIt();
third.backgroundColor = "yellow";
third.text = "Superb!";
third.textColor = "green";