/*
Viết hàm range(start, end) để tạo một mảng chứa các số nguyên từ start đến end, bao gồm cả hai đầu.
Ví dụ:
range(1, 5);
// [1, 2, 3, 4, 5]

range(3, 7);
// [3, 4, 5, 6, 7]


Sau đó, viết hàm sum(numbers) để tính tổng các phần tử trong mảng.
sum([1, 2, 3, 4, 5]);
// 15


Kết hợp hai hàm:
sum(range(1, 5));
// 15

*/

function range(start, end) {
    const numbers = [];
    for (let i = start; i <= end; i++) {
        numbers.push(i);
    }
    return numbers;
}

function sum(numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}


console.log(range(1, 5));
console.log(sum([1, 2, 3, 4, 5]));