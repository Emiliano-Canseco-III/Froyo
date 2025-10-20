const userOrder = prompt(
  "Hello! What froyo flavors would you like?",
  "Vanilla,Vanilla,Vanilla,Strawberry,Coffee,Coffee"
);
const froyoFlavor = userOrder.split(",");

// Count the occurrences of each flavor.
const flavorCount = {};

function countFlavors() {
  for (let i = 0; i < froyoFlavor.length; i++) {
    const flavor = froyoFlavor[i].toLowerCase();

    if (flavorCount[flavor]) {
      flavorCount[flavor] += 1;
    } else {
      flavorCount[flavor] = 1;
    }
  }

  // Generates users order summary.
  let message = "You have ordered:\n";
  for (const flavor in flavorCount) {
    message += `${flavorCount[flavor]} ${flavor}\n`;
  }
  return message;
}

console.log(countFlavors());
