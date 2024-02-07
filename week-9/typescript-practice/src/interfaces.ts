interface User {
  firstName: String;
  lastName: String;
  age: number;
}

function isLegal(user: User): boolean {
  if (user.age < 18) {
    return false;
  } else {
    return true;
  }
}

isLegal({
  firstName: "John",
  lastName: "Doe",
  age: 17,
});
