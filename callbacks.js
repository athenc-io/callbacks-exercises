//function that returns true if a number is odd, and false if it's even

// function isOdd(number) {
//     if(number % 2 === 1) {
//         number = true;
//     } else {
//         number = false;
//     }
//     console.log(number);
// }


//another way to write using arrow function
const isOdd = (number) => number % 2 === 1;
console.log(isOdd(2)); 






//write a function that returns the given string with a concatenated exclamation ! at the end.

//const exclaim = (string) => string + '!';

//another way to write using template literals
const exclaim = (string) => `${string}!`;
console.log(exclaim('apple'));







//write a function that duplicates each character in a string

// function doubleChars (string) {
//     const letters = string.split('');
//     function duplication (letters) {
//         const map1 = letters.map(letter => letter + letter);
//         const map2 = map1.join('');
//         console.log(map2);

//     }
//     duplication(letters);   
// }

//another way to write using arrow function
const doubleChars = (string) => string.split('').map(letter => `${letter}${letter}`).join('');
console.log(doubleChars('terra'));







//write a function that receives an array  and a callback as its arguments. 
//if at least two elements from the array return a truthy value when passed as an argument to the callback, atLeastTwo should return true
//if there are less than two elements from the array that returns a truthy value, then atLeastTwo should return false

// const atLeastTwo = (array, callback) => {
//     const oddNumbers = array.filter(number => callback(number));
//     if(oddNumbers.length >= 2) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

//another way
const atLeastTwo = (array, callback) => array.filter(number => callback(number)).length >= 2
console.log(atLeastTwo([1, 2, 3, 4, 5], t => t > 3));

//write a groupBy function that groups elements from an array by the returned value from the callback when an element from the array is passed as an argument
const groupBy = (array, callback) => {
    array.reduce(function (accumulator, currentValue) {
        const key = callback(currentValue);

        if(accumulator[key]) {
            accumulator[key].push(currentValue);
        } else {
            accumulator[key] = [currentValue];
        }
        return accumulator;
    },
    {},
)}

const input = [
    {
      name: 'John',
      yearOfBirth: 1988,
      placeOfBirth: 'New York',
    },
    {
      name: 'Nancy',
      yearOfBirth: 1963,
      placeOfBirth: 'New York',
    },
    {
      name: 'John',
      yearOfBirth: 1980,
      placeOfBirth: 'Toronto',
    },
  ];

  groupBy(input, t => t.name);
  groupBy(input, t => isOdd(t.yearOfBirth));



//write a function that receives 3 arguments: string, number of reps, and a callback
//the repeat function passes the string to the callback as an argument and repeat the callback x times,
//with the result of previous repetition as an argument

const repeat = (string, num, callback) => {
    let result = string;
    for (i = 0; i < num; i++) {
      result = callback(result);
    }
    console.log(result);
  }
  repeat('infinite power', 3, exclaim);
  repeat('triple', 2, doubleChars);
  repeat('trogdor', 3, t => `°${t}°`);

  const repeatRecursion = (string, num, callback) => {
     if(num === 0) return input;
     return repeatRecursive(callback(string), num-1, callback);
  }