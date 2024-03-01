"use strict";
function sumOfAge(userOne, user2) {
    return userOne.age + user2.age;
}
const age = sumOfAge({ name: "John", age: 20 }, { name: "Jane", age: 25 });
console.log(age);
