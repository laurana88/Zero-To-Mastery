//Question 2: Write a javascript function that takes an array of
//numbers and a target number. The function should find two different
//numbers in the array that, when added together, give the target
//number. For example: answer([1,2,3], 4)should return [1,3]

// MY ORIGINAL

const question2Array = [1, 2, 3];

let allAnswers = [];

const answer2 = (arr, input) => {

  // go through each element of the array and do the following
  for (i=0; i < arr.length; i++) {

    // create a new temp array by adding each number of the original array to the one being evaluated by the for loop
    let tempArray = arr.map((num) => {

      // if the two numbers being added equal the input, add to a new array. this array will have all the numbers
      if (num + arr[i] === input) {
        allAnswers.push(num, arr[i]);
      }
    })

  }

  // create the final array by taking the first two numbers of the array with all the numbers 
  const finalArray2 = allAnswers.slice(0, 2);
  console.log(finalArray2);
    
}

answer2(question2Array, 4);


// QUESTION 2 -> USING 2 FOR LOOPS

const question2Array = [1, 2, 3];
const question2Arrayb = [0,1,2,3,4,5,6,7];

let finalArray2 = [];
let pair = [];

const answer2 = (arr, input) => {

  // go through each element of the array and do the following
  for (i=0; i < arr.length; i++) {

    // then check it against the number next to it, ascendingup
    for (j = i + 1; j < arr.length; j++) {

      //if it equals the input, add it to an array, then add that array to the final one, and clear the pair array
      if (arr[i] + arr[j] === input) {
        //finalArray2.push(arr[i], arr[j]);
        pair.push(arr[i],arr[j]);
        finalArray2.push(pair);
        pair=[];
      }

    }
  }
  console.log(finalArray2);
    
}

// answer2(question2Array, 4);
answer2(question2Arrayb, 7);


