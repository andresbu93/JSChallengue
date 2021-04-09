function plusOne(arr) {
	// precondition arr beetween 0 and 9

	arr = arr.filter(x => x !== 0)

	let n = arr.length - 1

	if (arr[n] < 9) {
		arr[n]++
			return arr
	} else {

		let i = n

		while (i >= 0 && arr[i] == 9) {
			arr[i] = 0
			i--
		}

		if (i == -1) {
			// have to add a new zero

			arr[n + 1] = 0
			arr[i + 1] = 1
		} else {
			arr[i]++
		}

		return arr
	}
}

function sendZerosToTheEnd(arr) {

	let n = arr.length
	let count = 0

	for (let i = 0; i < n; i++) {
		if (arr[i] !== 0) {
			arr[count] = arr[i]
			count++
		}
	}

	while (count < n) {
		arr[count] = 0
		count++
	}

	return arr
}

let a = [4, 8, 0, 9, 2, 5, 0, 3, 3, 0]
let b = sendZerosToTheEnd(a)
console.log(b)

let c = plusOne(b)
console.log(c)
