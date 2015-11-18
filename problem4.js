var productNum = 0;

function isPalindrome(number) {
	stringNum = number.toString()
	result = ''
	for (var x = stringNum.length; x >= 0; x --) {
		result += stringNum.substring(x-1,x);
	}
	return Number(result) === number;
}

for (var num1 = 100; num1 < 1000; num1 ++) {
	for (var num2 = 100; num2 < 1000; num2 ++) {
		result = num1 * num2
		if (result > productNum && isPalindrome(result)) {
			productNum = result;
		}
	}
}
console.log(productNum)
