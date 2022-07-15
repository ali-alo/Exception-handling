// In a try catch construction, wrap the code: console.log (a), let a = 3.
// And display an error - ‘let must be declared’ before use.
// When running 1/0, the error 'cannot be divided by zero'

try {
  console.log(a);
  let a = 3;
} catch (err) {
  console.log(`${err.name} ==> ${err.message}`); // ReferenceError ==> Cannot access 'a' before initialization
}

try {
  const temp = -20 / 0;
  if (!Number.isFinite(temp))
    // the value must not be 0, Infinity or -Infinity
    throw new SyntaxError("Cannot be divided by zero"); // an error with a custom message
} catch (err) {
  console.log(`${err.name} ==> ${err.message}`); // SyntaxError ==> Cannot be divided by zero
}
