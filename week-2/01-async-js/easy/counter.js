function countdown(limit) {
  if (limit === 0) {
    console.log("Blast Off!");
    return;
  }

  console.log(limit);

  setTimeout(() => {
    countdown(limit - 1);
  }, 1 * 1000);
}

countdown(30);
