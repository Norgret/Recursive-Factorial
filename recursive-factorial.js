
function factorial(num) {
	let n = num;			// Idk if it's bad practice to overwrite a parameter
	if (n !== 1) {
		n *= factorial(n - 1);
	}
	return n;
}

let n = 30;
console.log(factorial(n));
