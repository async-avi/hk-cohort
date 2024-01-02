// map and filter

//! make a function that multiplies 2 with every element in the array
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const twoMultiplier1 = arr.map((value) => {
  return value * 2;
});

// console.log(twoMultiplier1);

//? map function on my own
const twoMultiplier = (value) => {
  let newArr = [];
  for (let i = 0; i < value.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
};

// console.log(twoMultiplier(arr));

//! filter provides a new array based on true and false
const multipleOfTwo = arr.filter((value) => {
  if (value % 2 === 0) {
    return true;
  } else {
    return false;
  }
});
// the below function will return a new array of multiples of two
// console.log(multipleOfTwo);

//? filter function on my own
const filterFunc = (value) => {
  let newArr = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(filterFunc(arr));
