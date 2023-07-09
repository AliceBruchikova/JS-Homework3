let arr = ['a', 'b'];
function addItem() {
    arr[2] = 'c';
}
addItem(arr, 'c');
console.log("Элементы: " + arr);