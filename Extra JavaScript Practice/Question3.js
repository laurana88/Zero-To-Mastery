

// Question 3: Write a function that converts HEX to RGB. 
//Then Make that function auto-dect the formats so that if you enter HEX color
// format it returns RGB and if you enter RGB color format it returns
// HEX.

// Hex = "#XXXXXX"
// RGB = "(XXX,XXX,XXX)"

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
const hexToRGB = (string) => { 

  //set up the arrays to use in the for loop
  let finalhexArray = [];
  let finalrgbArray = [];
  let initialArray = string.split("");

  // remove the # if it's there
  if (initialArray[0] === "#") {
    initialArray.shift();
  }

  
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

  console.log(`That means your RGB value is ${finalRGB}.`);

}



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

  console.log(`That means your HEX value is ${finalHEX}.`);

}

// let rgbValue = "(80,6,143)"; // #50068F
// rgbToHex(rgbValue);


checkAndConvert();


