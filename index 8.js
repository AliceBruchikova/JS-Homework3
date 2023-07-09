const users = [
    { name: 'Alex', age: 31},
    { name: 'Olga', age: 17},
    { name: 'Carl', age: 15},
    { name: 'Nancy', age: 28},
    { name: 'Eric', age: 9}
]
let arr = [];
for (i = 0; i < users.length; i++) {
    function array (users) {
        if (users[i].age < 18) {
            arr.push(users[i].name);
        }
    }
    array(users)
}
console.log(arr);
