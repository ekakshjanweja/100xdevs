/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(miliseconds) {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`resolves after ${miliseconds * 1000} seconds`);
      resolve();
    }, miliseconds);
  });

  return p;
}

module.exports = sleep;
