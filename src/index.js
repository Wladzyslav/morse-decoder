const MORSE_TABLE = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "-----": "0"
  };
  
  function decode(expr) {
    let dotsDashes = "",
      morseArr = [],
      count = 0,
      result = "";
  
    for (let i = expr.length - 1; i >= 0; i--) {
      if (expr[i] == "0" && expr[i - 1] == "1") {
        dotsDashes += ".";
        count++;
        i--;
      } else if (expr[i] == "1" && expr[i - 1] == "1") {
        dotsDashes += "-";
        count++;
        i--;
      } else if (expr[i] == "0" && expr[i - 1] == "0") {
        count++;
        i--;
      } else if (expr[i] == "*" && expr[i - 9] == "*") {
        dotsDashes += " ";
        count += 9;
        i -= 9;
      }
      count++;
      if (count % 10 == 0) {
        morseArr.unshift(
          dotsDashes
            .split("")
            .reverse()
            .join("")
        );
        dotsDashes = "";
      }
    }
  
    for (let k = 0; k < morseArr.length; k++) {
      if (morseArr[k] == " ") {
        result += " ";
        k++;
      }
      result += MORSE_TABLE[morseArr[k]];
    }
    return result;
  }
  
  module.exports = {
    decode
  };