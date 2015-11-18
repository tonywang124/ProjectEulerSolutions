/* The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ? */

var num = 600851475143;
var found = false;
var baseFactor = 2;
while (!found) {
	while(num % baseFactor === 0) {
		num = num / baseFactor;
	}
	
	if (baseFactor === num || num === 1) {
		found = true;
		console.log(baseFactor)
	}
	baseFactor += 1;

}
