/*Here the object is: given an array of numbers and a target value, to find two numbers within the array
that will add up to the target value. There will always be two numbers which make the sum.
This could be achieved with two loops, but it'll be less efficient.
It's better to use HashMaps, which are similar to keys and allow for rapid access and reference when checking data.
We instantiate a ahshMap variable. Then create a regular for...loop
We want to loop through each individual number in the array and check if there is a number currently held in the hashMap that can be used to make the sum of the target value.
The easiest way to do this is decalre a remainder variable that = ourTarget - OurCurrentNumber
this way the remainderis= exactly the number we require to make our target value.
We check if the hashMap has the remainder, if it does, then we return the index of our current number and the value (which is its index) of the remainder.
Else, if the remainder is not in the hashMap, we simply hadd the current number to the hashMap as a key: value pair - the key being the current number, the value being the current index
*/

function twoSum (nums, target){
    const hashMap = new Map();
    for(let i = 0; i<nums.length; i++){
        console.log(i)
        let remainder = target-nums[i];
        if(hashMap.has(remainder)){
            return [hashMap.get(remainder), i]
        }
        else{
            hashMap.set(nums[i], i)
        }
    }
}

console.log(twoSum([2,7,11,15], 9))