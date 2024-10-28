// Excercise 1

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const newNums = nums.map((num) => {
  return num * 2;
});

console.log(newNums);

//Excercise 2

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
const [firstTopping, secondTopping] = pizzaToppings;

console.log(firstTopping);
console.log(secondTopping);

//Excercise 3

const car = {
  make: "Audi",
  model: "q5",
};

const { make, model } = car;

console.log(make);
console.log(model);

//Excercise 4

const pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
const duplicatePizzaToppings = [...pizzaToppings];
console.log(duplicatePizzaToppings);
const controversialPizzaToppings = duplicatePizzaToppings;

console.log(controversialPizzaToppings);

//Excercise 5

const car = {
  make: "Audi",
  model: "q5",
};

const clonedCar = { ...car };
console.log("Clone:", clonedCar);

clonedCar.model = "q7";
console.log(clonedCar);

//Excercise 6

const userProfile = {
  propertyName: "jesstheleftie",
};

const selectedUser = "propertyName";
const selectedUserInput = userProfile[selectedUser];
console.log(selectedUserInput);

//Excercise 7
//import and export files created

//Excercise 8
function describePet(noun = "cat", adjective = "white") {
  console.log(`The ${noun} is ${adjective}.`);
}

describePet();
describePet("dog", "black");

//Excercise 9

let pizza = "tasty";

pizza === "tasty" ? console.log("yum") : console.log("yuck");

//Excercise 10

const localLangConfig = null;

const lang = localLangConfig || "en";

console.log("Language Setting", lang);

const userSaveTheme = null;

const userTheme = userSaveTheme || "light";

console.log("User theme setting", userTheme);

//Excercise 11
const adventurer = {
  name: "Alice",
};
let cat = adventurer.cat?.age;

console.log(cat);
