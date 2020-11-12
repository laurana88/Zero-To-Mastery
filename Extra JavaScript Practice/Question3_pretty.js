// Question 3: Write a function that converts HEX "#XXXXXX" to RGB "(XXX,XXX,XXX)". 
//Then Make that function auto-dect the formats so that if you enter HEX color
// format it returns RGB and if you enter RGB color format it returns
// HEX.

// Function to Prompt the User to Enter a Value & Checks if it's a HEX or RGB, then sends to the right function
const checkAndConvert = () => {
  let input = prompt("Enter your value:");

  // this checks if it's a hex, if it's not it's an RGB
  if (input.length <= 7) {
    console.log(`Your Hex Value is ${input}.`)
    hexToRGB(input);
  } else {
    console.log(`Your RGB Value is ${input}.`)
    rgbToHex(input);
  }
  
}

// HEX TO RGB CONVERTER
const hexToRGB = (input) => { 

  // change the input string to an array
  let initialArray = createHexArray(input);

  // remove hashtags from the array (if any)
  let noHashtags = removeHashtag(initialArray);

  // change letters to numbers in the array
  let finalhexArray = removeLetters(noHashtags);

  // calculate new rgb array from the numbers only hex array
  let finalrgbArray = calculateRGB(finalhexArray);

  // turn the rgb array into an rgb string in the correct format
  let finalRGB = rgbArraytoString(finalrgbArray);

  // log the RGB String
  console.log(`That means your RGB value is ${finalRGB}.`);

}

// RGB TO HEX CONVERTER

const rgbToHex = (input) => {

  // remove the () and commas from the string and convert to an array
  let initialArray = createRGBArray(input);

  // calculate the new hex array from the RGB array values (each RGB is run through two formulas) 
  let hexArray = calculateHex(initialArray);

  // Take the new hex array and replace values over 10 with the correct letter
  let hexArrayLetters = addLetters(hexArray);

  // Turn the final Hex array into a Hex string
  let finalHEX = hexArraytoString(hexArrayLetters);

  // Log the Hex Array
  console.log(`That means your HEX value is ${finalHEX}.`);

}

//HEX TO RGB FUNCTIONS

const createHexArray = (input) => {
  let initialArray = input.split("");
  return initialArray;
}

const removeHashtag = (arr) => {
    if (arr[0] === "#") {
    let noHashtags = arr.shift();
    return noHashtags;
  } else {
    let noHashtags = arr;
    return noHashtags;
  }
}

const removeLetters = (arr) => {
  let finalhexArray = [];
  //this for loop replaces letters with numbers and stores in a new final hex array that just has numbers
  for (element of arr) {
     if (element === "A" || "B" ||  "C" || "D" || "E" || "F") {
      // replace the letter with a number & store in temp variable
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
  return finalhexArray;
}

const calculateRGB = (arr) => {
  let finalrgbArray = []
  finalrgbArray.push((arr[0]*16)+arr[1]);
  finalrgbArray.push((arr[2]*16)+arr[3]);
  finalrgbArray.push((arr[4]*16)+arr[5]);
  return finalrgbArray;
}

const rgbArraytoString = (arr) => {
  let finalRGB = "(" + arr.join() + ")"
  return finalRGB;
}

// RGB TO HEX FUNCTIONS

const createRGBArray = (input) => {
  let cleanString = input.replace("(", "").replace(/,/g, " ").replace(")", "");
  let initialArray = cleanString.split(" ");
  return initialArray;
}

const calculateHex = (arr) => {
  let hexArray = [];
  for (num of arr) {
    let one = Math.floor(Number(num) / 16);
    let two = Number(num) % 16;
    hexArray.push(one,two);
  }
  return hexArray;
}

const addLetters = (arr) => {
  let hexArrayLetters = [];
  for (num of arr) {
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
  return hexArrayLetters;
}

const hexArraytoString = (arr) => {
  let finalHEX = "#" + arr.join("");
  return finalHEX;
}

checkAndConvert();