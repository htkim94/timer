//Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

//Grabs arguments from CLI, change to number and sort by ascending order
const args = process.argv
  .slice(2)
  .map((a) => Number(a))
  .sort((a, b) => a - b);

//Loop for beep if there is input
if (args.length >= 1) {
  for (let a of args) {
    if (a >= 0) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, a * 1000);
    }
  }
}
