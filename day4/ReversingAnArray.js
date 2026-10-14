function reverseArray(array) {

    const result = [];

    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }

    return result;
}


const numbers = [1, 2, 3, 4, 5];

console.log(reverseArray(numbers));
// Mong đợi: [5, 4, 3, 2, 1]

console.log(numbers);
// Mong đợi: [1, 2, 3, 4, 5]