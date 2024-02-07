let x: number = 1;
console.log(x);

const greet = (name: string) => {
  console.log(`Hello ${name}`);
};

const sum = (a: number, b: number): number => {
  return a + b;
};

// const isLegal = (age: number): boolean => {
//   return age >= 18;
// };

function runAfterOneSecond(fn: () => void) {
  setTimeout(fn, 2000);
}

greet("Ekaksh");

const sumValue = sum(1, 2);

console.log(sumValue);

// const isLegalValue = isLegal(18);

// console.log(isLegalValue);

runAfterOneSecond(() => {
  console.log("Hello");
});
