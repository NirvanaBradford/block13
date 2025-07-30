// froyoShop array for flavours
const order = [
  "vanilla",
  "vanilla",
  "vanilla",
  "strawberry",
  "coffee",
  "coffee",
];

// creating an object to fill with order count
const flavourCount = {};

for (let i = 0; i < order.length; i++) {
  const flavours = order[i];
  // does the key exist in my object
  console.log(flavourCount);

  if (flavours in flavourCount) {
    // add one to the count
    flavourCount[flavours] += 1;
    // otherwise if it doesn't
  } else {
    flavourCount[flavours] = 1;
  }
}

console.log(flavourCount);

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "vanilla, vanilla, vamilla, strawberry, coffee, coffee"
);
