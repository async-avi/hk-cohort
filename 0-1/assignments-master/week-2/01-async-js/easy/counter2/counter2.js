function increase(value, duration) {
  setTimeout(() => {
    value = value + 1;
    console.log(value);
  }, duration);
}

increase(1, 1000);
