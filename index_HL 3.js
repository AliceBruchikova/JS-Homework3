const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4];
let arr1 = [];
let arr2 = [];
let i;
function array (mixedNumbers) {
    for (i = 0; i < mixedNumbers.length; i++) {
    if (mixedNumbers[i] < 0) {
        arr1.push(mixedNumbers[i]);
    }
    if (mixedNumbers[i] >= 0) {
        arr2.push(mixedNumbers[i]);
    }
}
}
array(mixedNumbers)
console.log(arr1);
console.log(arr2);
