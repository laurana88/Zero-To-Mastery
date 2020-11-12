// Question 1: Clean the room function: given an input of
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that
// organizes these into individual array that is ordered. For example
// answer(ArrayFromAbove) should return: 
// [[1,1,1,1],[2,2,2],4,5,10,[20,20], 391, 392,591]. 

const arrayNumbers = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const sortedArray = arrayNumbers.sort((a,b) => a-b);

let tempArray = [];

let finalArray = [];

const answer = (arr) => {

  arr.forEach(function(num, i) {
    if (num === arr[i + 1]) {
      tempArray.push(num);
    } else if (num === arr[i - 1]) {
      tempArray.push(num);
      finalArray.push(tempArray);
      tempArray = [];
    } else {
      finalArray.push(num);
    }

  })
  console.log(finalArray);
}

answer(arrayNumbers);

// Bonus: Make it so it organizes strings
// differently from number types. i.e. 
// [1, "2", "3", 2] should return
// [[1,2], ["2", "3"]]

const arrayNumbers2 = [1, "2", "3", 2];

const answer1a = (arr) => {

  const numArray = arrayNumbers2.filter(num => {
    return typeof num === "number";
  })

  const stringArray = arrayNumbers2.filter(num => {
    return typeof num === "string";
  })

  let finaltypeArray = [numArray, stringArray];

  console.log(finaltypeArray);
}

answer1a(arrayNumbers2);