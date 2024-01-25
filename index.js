function isPalindrome(word) {
  
    const length = word.length
    let i = 0; let j = 1
    while(i <= (length - j)){
       if(word[i] !== word[length - j]){
           // I would have done this but for the ske of the tests. return console.log("This is not a Palindrome")
           return false
       }
    
      i ++ ; j ++
   }
   // I would have done this but for the ske of the tests. return console.log(`${word} is a palindrome`)
   return true

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
