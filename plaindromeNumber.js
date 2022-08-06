/*Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.
For example, 121 is a palindrome while 123 is not.
*/

//Convert the number ot a string, then we turn it into an array, reverse it and join it.
// finally compare the reversed num to the num.
//if equal return trie, else false

const isPalindrome = function(num) {
     let reversedNum = Array.from(String(num)).reverse().join('')
    return reversedNum == num? true : false
};

console.log(isPalindrome(141))
