const userAge = 18;

if (userAge >= 18) {
  console.log(`welcome`);
} else {
  throw Error(`Can't enter your underage ${userAge}`);
}
