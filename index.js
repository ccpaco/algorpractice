//EXERCISE TITLE - The Beatles with a twist - work in progress
//EXERCISE DATE - Jan 27 2020

// Start off loading some Beatles lyrics. Will improve formatting.
//My funny idea here is to replace Jude with Dude. Now, how to go about doing so?

let lyrics =
  "Hey Jude, don't make it bad \
Take a sad song and make it better \
Remember to let her into your heart \
Then you can start to make it better \
Hey Jude, don't be afraid \
You were made to go out and get her \
The minute you let her under your skin \
Then you begin to make it better \
Oh-oh-oh, and anytime you feel the pain \
Hey Jude, refrain \
Don't carry the world upon your shoulders \
For well you know that it's a fool \
Who plays it cool \
By making his world a little colder";

//V.1 use replace. Only works for first instance of "Jude" though.

// desiredOutput = lyrics.replace("Jude", "Dude");

//V.2 Simple iterative function works. Now, how to format?

function dudeCall(str) {
  let count = 0;
  for (i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) === "J") {
      str = str.replace("Jude", "Dude");
    }
  }
  return str;
}

desiredOutput = dudeCall(lyrics);

//DONT CHANGE! THIS IS OUTPUT LINE
document.getElementById("jsedit").innerHTML =
  "Result from exercise: " + desiredOutput;

// desired Output and such goes here
