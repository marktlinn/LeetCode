/*
Link:

*/

/*
Pseudocode:
if the number is less than or equal to 0 return false
else while the number divided by 2 == 0 divide the number by 2
when the number is odd it'll break out of this loop and the it can be determined whether it's a 1 (return true if so), or another number (return false if so).

*/

package PowerOfTwo

func isPowerOfTwo(num int) bool {
	if num <= 0 {
		return false
	}
	for num%2 == 0 {
		num /= 2
	}

	return num == 1
}
