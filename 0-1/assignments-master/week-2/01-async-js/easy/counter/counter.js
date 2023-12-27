let a = 0;

function counter(value, duration) {
  setInterval(function () {
    value = value + 1;
    console.log(value);
  }, duration);
}

counter(a, 1000);
