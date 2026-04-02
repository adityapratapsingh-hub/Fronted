const arr = [5, 1, 9, 3];

let max = arr[0]; // initialize with first element

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max);