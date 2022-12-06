export default function validateInput(inputArray) {
    if (inputArray.length >= 2 && inputArray.length <= 10) {
        let isValidated = inputArray.every((value) => {
        return value >= -1000 && value <= 1000;
      });
      console.log(isValidated)
      return isValidated;
    }
    false;
  }