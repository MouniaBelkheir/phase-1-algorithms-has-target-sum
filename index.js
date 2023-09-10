// Function to check if any pair of numbers in the array adds up to the target number
function hasTargetSum(array, target) {
  
  // Initialize a new Set to store the numbers we've seen so far
  let numSet = new Set();

  // Loop through each number in the array
  for (let i = 0; i < array.length; i++) {

      // Calculate the complement of the current number (i.e., target - current number)
      let complement = target - array[i];

      // If the complement is in our Set, we've found a pair that adds up to the target
      if (numSet.has(complement)) {
          return true;  // Return true and end the function
      }

      // If not, add the current number to our Set and continue with the next iteration
      numSet.add(array[i]);
  }

  // If we've gone through the entire array and haven't found a pair, return false
  return false;
}

/* 
This function uses a Set to keep track of numbers we’ve seen so far. For each number, it calculates the complement (target - current number) and checks if it’s in the Set. If it is, that means we’ve found a pair that adds up to the target, so we return true. If we go through the entire array without finding a pair, we return false.

This solution has a time complexity of O(n), where n is the length of the array, because we’re doing a single pass through the array. It has a space complexity of O(n) as well, because in the worst case scenario, we might have to store every number in the Set. This is an optimized solution as it avoids the need for nested loops which would result in a higher time complexity of O(n^2).
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
