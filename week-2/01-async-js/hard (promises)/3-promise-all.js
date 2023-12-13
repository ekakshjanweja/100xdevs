/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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

  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    () => {
      const endTime = Date.now();
      const timeDiff = endTime - startTime;
      console.log(
        "All promises were resolved in " + timeDiff + " milliseconds"
      );
    }
  );
}

calculateTime();
