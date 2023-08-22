const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
});
rl.question('Welcome to Holberton School, what is your name?', (INPUT) => {
    console.log('Your name is:', INPUT);
  console.log('This important software is now closing');
  rl.close();
});
