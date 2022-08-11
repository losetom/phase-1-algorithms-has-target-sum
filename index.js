function hasTargetSum(array, target) {
  // Write your algorithm here
const seenNUmbers = new Set();
for (const number of array) {
  const complement = target - number;
  if (seenNUmbers.has(complement)) return true 
  seenNUmbers.add(number);
}
return false
}

/* 
  Write the Big O time complexity of your function here

  space and time complexity of 0(n)

*/

/* 
  Add your pseudocode here

  create object for observed values 
  iterate over the array of values
    for the current number, find complementary number adding to target
    check if any keys are the complement 
      if so, return true 
    save the number in the key to be checked against other numbers 
      if we hit the end of the array, return false 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
