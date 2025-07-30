// froyoShop array for flavors
const order = [
  "vanilla",
  "vanilla",
  "vanilla",
  "strawberry",
  "coffee",
  "coffee",
];

// creating an object to fill with order count
const flavorCount = {};

for (let i = 0; i < order.length; i++) {
  const flavors = order[i];
  // does the key exist in my object
  console.log(flavorCount);

  if (flavors in flavorCount) {
    // add one to the count
    flavorCount[flavors] += 1;
    // otherwise if it doesn't
  } else {
    // place it of object assign value to 1
    flavorCount[flavors] = 1;
  }
}

// split string into array of string
function splitString(commaSeparatedFlavors) {
  const string = commaSeparatedFlavors.split(",");
}

console.log(flavorCount);

const userInputString = prompt(
  "Please enter some Froyo Flavors separated by commas.",
  "vanilla, vanilla, vamilla, strawberry, coffee, coffee"
);
