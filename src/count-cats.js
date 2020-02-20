module.exports = function countCats(arr) {
	arr = arr.flat();
	let n = 0;
	for (i=0; i<arr.length ; i++) {
		if (arr[i] == "^^"){ 
			n++
		}
	}
	return n;
};
