/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond(n) {
  const p = new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });

  return p;
}

function waitTwoSecond(n) {
  const p = new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });

  return p;
}

function waitThreeSecond(n) {
  const p = new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });

  return p;
}

function calculateTime(n1, n2, n3) {
  const startTime = Date.now();

  return Promise.all([
    waitOneSecond(n1),
    waitTwoSecond(n2),
    waitThreeSecond(n3),
  ]).then(() => {
    const endTime = Date.now();
    const timeDiff = endTime - startTime;
    return timeDiff;
  });
}

module.exports = calculateTime;
