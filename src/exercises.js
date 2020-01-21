function commonEnd(a, b) {

  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  if (a[0] ===b[0]) {
      return true;
    }
  else if (a[a.length - 1] === b[b.length - 1]) {
      return true;
    }
  else {
      return false;
    }

}

function endsMeet(values, n) {

  if (!values || values.length < n || n < 0) {
      return values = [];
  }
  else {
      let array = [];
      for (let i = 0; i < n; i++) {
          array.push(values[i]);
      }
      for (let j = values.length - n; j < values.length; j++) {
          array.push(values[j]);
      }
      return array;
  }

}

function difference(numbers) {

  let difference = 0;
  let large = 0;
  let small = 0;
  let counter = 0;
  const min = Number.MIN_SAFE_INTEGER;
  const max = Number.MAX_SAFE_INTEGER;

  if (!numbers || numbers.length <= 0) {
    difference = undefined
    return difference;
  }

  if (numbers.some(isNaN)) {
    return undefined;
    counter = 1
  }

  if (counter != 1) {
    let y = min
    for (z = 0; z < numbers.length; z++) {
      if (numbers[z] > y) {
        y = numbers[z];
        large = numbers[z];
      }
    }
    if (counter != 1) {
      let v = max
      for (x = 0; x < numbers.length; x++) {
        if (numbers[x] < v) {
          v = numbers[x];
          small = numbers[x];
        }
      }
      difference = large - small;
      return difference;
    }
  }

}

function max(number) {

  if (!number || number.length < 3 || number.length % 2 == 0) {
    return undefined;
  }

  if (number.some(isNaN)) {
    return undefined;
  }

  let last = number[number.length - 1]
  let middle = number[((number.length / 2) - 1) + 0.5]
  let first = number[0]

  if ((last > first) && (last > middle)) {
    return last;
  }

  else if ((first > middle) && (first > last)) {
    return first;
  }

  else if ((middle > last) && (middle > first)) {
    return middle;
  }

  else {
    return first;
  }
}

function middle(values) {

  if(!values || values.length%2 === 0 || values.length < 3 || values == undefined){
    return [];
  }else{
    let sum = [];
    for (let x = (values.length+1)/2; x >= (values.length-3)/2; x--){
      sum.unshift(values[x]);
    }
    return sum;
  }

}

function increasing(numbers) {

  if (numbers == undefined || numbers == []) {
  return undefined;

  }

  else if (numbers.length < 3 || numbers.some(isNaN)) {
    return undefined;
  }

  else {
  for (let i = 1; i < numbers.length; i++) {
  if ((numbers[i - 1] + 1) === numbers[i]) {
  i++

  if ((numbers[i - 1] + 1) === numbers[i]) {
  return true;
  break;
  }

  else {
  continue;
  }
  }

  else {
  continue;
  }
  }
  return false;
  }

}

function everywhere(values, x) {

    var result;

    if (!values || x === undefined || values.length < 1) {
       return false;
     }

     else {
       for (let i = 0; i < values.length - 1; i++) {
           if (values[i] === x) {
           result = 0;
         } else if (values[i - 1] === x || values[i + 1] === x) {
           result = 0;
         } else {
           result = 1;
           return false;
         }
       }
     }

     if (result === 0) {
       return true;
     }


}

function consecutive(numbers) {

  if (!numbers || numbers.length < 3) {
  return false;
}

for (let i = 0; i < numbers.length - 2; i++ ) {
  let index = numbers[i];
  let index_2 = numbers[i + 1];
  let index_3 = numbers[i + 2];
  if (Number.isInteger(index) == false || Number.isInteger(index_2) == false || Number.isInteger(index_3) == false ) {
    return false;
  }

  if (index % 2 == 0 && index_2 % 2 == 0 && index_3 % 2 == 0) {
    return true;
  }

  else if (index % 2 == 1 && index_2 % 2 == 1 && index_3 % 2 == 1) {
    return true;
  }
}
return false;
}

function balance(numbers) {

  let size = 0
  let sum1 = 0
  let sum2 = 0
  let count = 0

  if (!numbers || numbers.length < 2) {
    return false;
  }
  for (i = 0; i < numbers.length; i++) {
    if (!(Number.isInteger(numbers[i]))) {
      return false;
    }
  }
  for (z = 0; z < numbers.length; z++) {
    if (numbers[z] == undefined) {
      return true;
    }
  }
  for (x = numbers.length; x > -1; x--) {
    sum1 = 0
    sum2 = 0

    for(y = numbers.length - x; y > -1; y--) {
      sum1 = sum1 + numbers[y]
    }

    for(a = numbers.length - 1; a > numbers.length - x; a--) {
      sum2 = sum2 + numbers[a]

    }
    if (sum2 == sum1) {
      count = 1
      return true;
    }
  }
  if (count == 0) {
    return false;
  }
}

function clumps(values) {

  if (!values) {
    return -1;
  }
  if (values.length < 2) {
    return 0;
  }

  let last = values[0];
  let current;
  let clump = 0
  let count = 0
  let count2 = 0

  for (x = 1; x < values.length; x++) {
    current = values[x]
    if (last === current) {
      clump = clump + 1
      for (y = x; y < values.length; y++) {
        last = current
        current = values[y]
        if (!(last === current)) {
          count = 1
          x = y
          break;
        }
        else {
          count = -1
        }
      }
    }
    if (count == -1) {
      break;
    }
    last = current
  }
  return clump;
}



/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
