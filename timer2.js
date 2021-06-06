const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// key === "\u0003" for ctrl + c
// process.stdout.write("\x07") for beep

const recursiveQuestion = () => {
  rl.question('Please enter between 1 to 9 for timer or b for immediate beep!\n', (answer) => {
    if (answer === 'c') {
      process.stdout.write("Thanks for using me, ciao!\n");
      return rl.close();
    }
    
    if (answer === 'b') {
      process.stdout.write("\x07");
    } else if (Number(answer) <= 9 && Number(answer) >= 1) {
      let sec = Number(answer);
      process.stdout.write(`setting timer for ${sec}\n`);
      setTimeout(() => {
        process.stdout.write("\x07");
      }, sec * 1000);
    }
    recursiveQuestion();
  });
}

recursiveQuestion();