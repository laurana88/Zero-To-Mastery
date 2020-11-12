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





// Question 3: Write a function that converts HEX to RGB. 
//Then Make that function auto-dect the formats so that if you enter HEX color
// format it returns RGB and if you enter RGB color format it returns
// HEX.

// Hex = "#XXXXXX"
// RGB = "(XXX,XXX,XXX)"


// Hex to RGB
const hexToRGB = (string) => { 

  //set up the arrays to use in the for loop
  let finalhexArray = [];
  let finalrgbArray = [];
  let initialArray = string.split("");
  initialArray.shift();

  
  //this array replaces letters with numbers and stores in a new "final" hex array that just has numbers
  for (element of initialArray) {
    
    //check & replace if there are any letters, and then push to a new array
    if (element === "A" || "B" ||  "C" || "D" || "E" || "F") {

      // replace the letter with number & store in temp variable
      let temp = element.replace("A", "10").replace("B", "11").replace("C", "12").replace("D",
      "13").replace("E", "14").replace("F", "15");

      //push the temp variable to the final hex array
      finalhexArray.push(Number(temp));
      
      //empty the temp variable so it can be used for the next array property
      temp = [];
    } else {
      
      //if there isn't a letter, then just push the number to the final hex array
      finalhexArray.push(Number(element));
    }
  }

  // calculate new rgb array from the numbers only hex array
  finalrgbArray.push((finalhexArray[0]*16)+finalhexArray[1]);
  finalrgbArray.push((finalhexArray[2]*16)+finalhexArray[3]);
  finalrgbArray.push((finalhexArray[4]*16)+finalhexArray[5]);

  //turn the rgb array into an rgb string in the correct format
  let finalRGB = "(" + finalrgbArray.join() + ")"

  console.log(finalRGB);

}

let hexValue = "#50068F";
hexToRGB(hexValue); // (80,6,143)



// RGB to Hex

const rgbToHex = (string) => {

  // remove the () and commas from the string and create an array with the numbers
  let cleanString = string.replace("(", "").replace(/,/g, " ").replace(")", "");
  let initialArray = cleanString.split(" ");

  // set up arrays to use in for loops
  let hexArray = [];
  let hexArrayLetters = [];

  // for loop to do calculations on each element of the rgb array, each RGB value is run through two equations to get the first (one) and then second (two) number for the hex
  for (num of initialArray) {
    let one = Math.floor(Number(num) / 16);
    let two = Number(num) % 16;
    hexArray.push(one,two);
  }

  // Take the new hex array and replace values over 10 with the correct letter
  for (num of hexArray) {
    if (num >= 10) {
      let temp = num.toString().replace("10", "A").replace("11", "B").replace("12", "C").replace("13", "D").
      replace("14", "E").replace("15", "F");
      hexArrayLetters.push(temp);
      temp = "";
    } else {
      let temp = num.toString()
      hexArrayLetters.push(num);
      temp = "";
    }
  }

  let finalHEX = "#" + hexArrayLetters.join("");
  console.log(finalHEX);

}

let rgbValue = "(80,6,143)"; // #50068F
rgbToHex(rgbValue);


// Function to Check

//Then Make that function auto-dect the formats so that if you enter HEX color
// format it returns RGB and if you enter RGB color format it returns
// HEX.

// Hex = "#XXXXXX"
// RGB = "(XXX,XXX,XXX)"

const checkAndConvert = (input) => {
  
}


