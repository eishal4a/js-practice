let array = [1, 2, 2, 3, 4, 4, 5];
let uniqueArray = [];

for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
        uniqueArray.push(array[i]);
    }
}

alert(uniqueArray);
