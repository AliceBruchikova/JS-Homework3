let arr = [2, 5, 1, 3];
let sum = 0;
function calcSumArr() {
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
}
calcSumArr(arr);
console.log("Сумма массива: " + sum);