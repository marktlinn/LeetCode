package PowerOfTwo

import "testing"

func TestIsPowerOfTwo(t *testing.T) {
	type powersTest struct {
		num    int
		result bool
	}

	var powersOfTwo = []powersTest{
		{1, true},
		{2, true},
		{4, true},
		{8, true},
		{16, true},
		{32, true},
	}

	for _, test := range powersOfTwo {
		if isPowerOfTwo(test.num) != test.result {
			t.Errorf("%d is a power of 2, but the function erroneously return false", test.num)
		}
	}

	var notPowersOfTwo = []powersTest{
		{0, false},
		{-1, false},
		{3, false},
		{5, false},
		{10, false},
		{15, false},
	}

	for _, test := range notPowersOfTwo {
		if isPowerOfTwo(test.num) != test.result {
			t.Errorf("%d is not a power of 3, but the function erroneously returned true", test.num)
		}
	}

}
