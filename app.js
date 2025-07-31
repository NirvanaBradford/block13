// prompt user input
const userInputString = prompt(
  "Please enter some Froyo Flavors separated by commas.",
  "vanilla, vanilla, vanilla, strawberry, coffee, coffee"
);

// froyoShop array for flavors
const order = userInputString;

// turning order into an array
const froyoShop = order.split(", ");
console.log(froyoShop);

// creating an object to fill with order count
const flavorCount = {};

// creating a froyoShop loop throught flavors
for (let i = 0; i < froyoShop.length; i++) {
  const flavors = froyoShop[i];
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

console.log("order", flavorCount);
