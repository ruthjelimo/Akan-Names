function getAkanName() {
  event.preventDefault();
  var yearOfBirth = document.getElementById("year-input").value;
  var monthOfBirth = parseInt(document.getElementById("month-input").value);
  var dayOfBirth = parseInt(document.getElementById("day-input").value);
  
  var genders = document.getElementsByName("gender");
  console.log(genders);

  function getGender() {
    for (var gender of genders) {
      if (gender.checked) {
        return gender.value;
      }
    }
  }

  var myGenderValue = getGender();
  console.log(myGenderValue);

  function dayValidator() {
    if (
      (monthOfBirth === 2 && parseInt(yearOfBirth) % 4 === 0) ||
      (yearOfBirth % 400 === 0 && dayOfBirth > 28) ||
      dayOfBirth < 1
    ) {
      if (dayOfBirth > 28 || dayOfBirth < 1) {
        return false;
      } else if ((monthOfBirth === 2 && dayOfBirth > 29) || dayOfBirth < 1) {
        return false;
      } else if (
        monthOfBirth === 2 &&
        parseInt(yearOfBirth) % 100 === 0 &&
        dayOfBirth > 29
      ) {
        return false;
      } else if (monthOfBirth === 2 && dayOfBirth < 1) {
        return false;
      } else {
        return true;
      }
    } else if (dayOfBirth < 1 || dayOfBirth > 31) {
      return false;
    } else {
      return true;
    }
  }
  function monthValidator() {
    if (monthOfBirth < 1 || monthOfBirth > 12) {
      return false;
    } else {
      return true;
    }
  }
  var monthValid = monthValidator();
  var dayValid = dayValidator();
  let dayOfWeekNumber = Math.floor(
    (Number(yearOfBirth.slice(0, 2)) / 4 -
      2 * Number(yearOfBirth.slice(0, 2)) -
      1 +
      (5 * Number(yearOfBirth.slice(2, 4))) / 4 +
      (26 * (monthOfBirth + 1)) / 10 +
      dayOfBirth) %
      7
  );

  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var maleAkanNames = [
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  var femaleAkanNames = [
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
    "Ama",
  ];
  var index;
  if (dayOfWeekNumber == 0) {
    index = 6;
  } else {
    index = dayOfWeekNumber - 1;
  }
  console.log(index);

  if (myGenderValue == "male" && monthValid && dayValid) {
    document.getElementById("result").textContent =
      "You were born on a " +
      daysOfWeek[index] +
      " , your Akan name is " +
      maleAkanNames[index];
    document.getElementById("output-name").textContent = "Your Akan name is: ";
    return false;
  } else if (myGenderValue == "female" && monthValid && dayValid) {
    document.getElementById("result").textContent =
      "You were born on a " +
      daysOfWeek[index] +
      " , your Akan name is " +
      femaleAkanNames[index];
    document.getElementById("output-name").textContent =
      "Your Akan name is : ";
    return false;
  } else {
    alert("You entered an invalid day or month, please try again");
  }
}

