//EXERCISE TITLE - The Beatles with a twist - work in progress
//EXERCISE DATE - Feb 1 2021

// Start off loading some Beatles lyrics. Will improve formatting.
//My funny idea here is to replace Jude with Dude. Now, how to go about doing so?

let lyrics = `Hey Jude, don't make it bad \n
Take a sad song and make it better \n
Remember to let her into your heart \n
Then you can start to make it better \n
Hey Jude, don't be afraid \n
You were made to go out and get her \n
The minute you let her under your skin \n 
Then you begin to make it better \n
Oh-oh-oh, and anytime you feel the pain \n
Hey Jude, refrain \n
Don't carry the world upon your shoulders \n
For well you know that it's a fool \n
Who plays it cool \n
By making his world a little colder`;

//V.1 use replace. Only works for first instance of "Jude" though.

// desiredOutput = lyrics.replace("Jude", "Dude");

//V.2 Simple iterative function works. Now, how to format?

function dudeCall(str) {
  for (i = 0; i < str.length - 1; i++) {
    if (str.charAt(i) === "J") {
      str = str.replace("Jude", "Dude");
    } else if (str.charAt(i) === "\n") {
      str = str.replace("\n", "</br>");
    }
  }
  return str;
}

// desired Output and such goes here
