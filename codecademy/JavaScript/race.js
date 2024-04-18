let raceNumber = Math.floor(Math.random() * 1000);
let earlyAdult = true;
let runnerAge = 18;
if (runnerAge >= 18 && earlyAdult === true) {
  raceNumber = raceNumber = +1000;
}
if (runnerAge >= 18 && earlyAdult === true) {
  console.log('Your race starts at 9:30 am');
} else if (runnerAge >= 18 && earlyAdult === false) {
  console.log('Your race starts at 11:00 am');
} else if (runnerAge < 18) {
  console.log('Your race starts at 12:30 pm')
}
