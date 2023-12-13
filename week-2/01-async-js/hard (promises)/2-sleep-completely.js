/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Resolved after ${seconds} seconds`);
      resolve();
    }, seconds * 1000);
  });

  return p;
}

console.log("Start");

sleep(3).then(() => {
  console.log("End");
}); console.log(`Resolved after ${milliseconds} milliseconds`);
resolve();
