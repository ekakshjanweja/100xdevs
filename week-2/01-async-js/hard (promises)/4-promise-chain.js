/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Resolved waitOneSecond()");
      resolve();
    }, 1000);
  });

  return p;
}

function waitTwoSecond() {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Resolved waitTwoSecond()");
      resolve();
    }, 2000);
  });

  return p;
}

function waitThreeSecond() {
  const p = new Promise((resolve) => {
    setTimeout(() => {
      console.log("Resolved waitThreeSecond()");
      resolve();
    }, 3000);
  });

  return p;
}

function calculateTime() {
  const startTime = Date.now();

  waitOneSecond()
    .then(() => {
      return waitTwoSecond();
    })
    .then(() => {
      return waitThreeSecond;
    })
    .then(() => {
      const endTime = Date.now();
      const timeDiff = endTime - startTime;
      console.log(
        "All promises were resolved in " + timeDiff + " milliseconds"
      );
    });
}

calculateTime();
