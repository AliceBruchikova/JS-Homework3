let numbers = [27, -3, 92, 0, -17, -2, 108];
let i;
let arr1 = [];
let arr2 = [];
let arr3 = [];
for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        arr1.push(numbers[i]);
    }
    if (numbers[i] == 0) {
        arr2.push(numbers[i]);
    }
    if (numbers[i] < 0) {
        arr3.push(numbers[i]);
    }
}
console.log("числа массива > 0: " + arr1);
console.log("число массива = 0: " + arr2);
console.log("число массива < 0: " + arr3);

let nmbr;
let arr4 = [];
let arr5 = [];
let arr6 = [];
for (nmbr of numbers) {
    function array (numbers) {
        if (nmbr > 0) {
            arr4.push(nmbr);
        }
        if (nmbr == 0) {
            arr5.push(nmbr);
            }
        if (nmbr < 0) {
            arr6.push(nmbr);
        }
    }
    array(numbers)
}
console.log("> 0: " + arr4);
console.log("= 0: " + arr5);
console.log("< 0: " + arr6);