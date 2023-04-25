/*
Link:
https://leetcode.com/problems/sleep/

Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.
Example 1:
  Input: millis = 100
  Output: 100
  Explanation: It should return a promise that resolves after 100ms.
  let t = Date.now();
  sleep(100).then(() => {
    console.log(Date.now() - t); // 100
  });

Example 2:
  Input: millis = 200
  Output: 200
  Explanation: It should return a promise that resolves after 200ms.
Constraints:
  1 <= millis <= 1000
*/

/*
Pseudocode:
Create a promise and within set a timeout return the promise resolved with a delay of the input milliseconds.
Return the promise object
*/

//without async await
// function sleep(millis) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return resolve();
//     }, millis);
//   });
// }

//with async await and more succint syntax
async function sleep(millis) {
  return await new Promise(resolve => setTimeout(resolve, millis));
}
