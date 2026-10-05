/*
Cho một số nguyên:

Input
JavaScript

Copy
const number = 150;
Yêu cầu
Phân tích số nguyên và xác định:

Số dương, số âm hay số 0.
Số chẵn hay số lẻ.
Số nguyên tố hay không phải số nguyên tố.
Có chia hết cho 3 hay không.
Có chia hết cho 5 hay không.
Có chia hết cho cả 3 và 5 hay không.
Output
Với:

JavaScript

Copy
const number = 150;
Kết quả mong muốn:

TEXT

Copy
Number: 150
Type: Positive
Parity: Even
Prime: No
Divisible by 3: Yes
Divisible by 5: Yes
Divisible by 3 and 5: Yes
Hard Extension 🚀
Thay vì chỉ phân tích một số, hãy phân tích toàn bộ một khoảng số.

#
Input
JavaScript

Copy
const start = 1;
const end = 1000;
Duyệt qua tất cả các số từ start đến end và thống kê:

TEXT

Copy
Prime count
Even count
Odd count
Divisible by 3
Divisible by 5
Divisible by both 3 and 5
Ví dụ Output
TEXT

Copy
Range: 1 - 1000
Prime count: ...
Even count: ...
Odd count: ...
Divisible by 3: ...
Divisible by 5: ...
Divisible by both 3 and 5: ...
Yêu cầu thêm
Khi kiểm tra số nguyên tố, không được sử dụng thư viện bên ngoài.

Hãy tự xây dựng logic kiểm tra số nguyên tố bằng các kiến thức JavaScript đã học.

Edge Cases
Tự kiểm tra với các giá trị:

TEXT

Copy
number = 0
number = 1
number = 2
number = 3
number = 5
number = 9
number = 15
number = -5
Đặc biệt chú ý:

0 không phải số nguyên tố.
1 không phải số nguyên tố.
2 là số nguyên tố chẵn duy nhất.
Gợi ý tư duy
Có thể chia bài toán thành các bước:

TEXT

Copy
Input
  ↓
Check Positive / Negative / Zero
  ↓
Check Even / Odd
  ↓
Check Prime
  ↓
Check Divisibility
  ↓
Generate Report
Với Hard Extension:

TEXT

Copy
Input Range
  ↓
Loop Through Numbers
  ↓
Analyze Each Number
  ↓
Update Counters
  ↓
Generate Statistics
Kiến thức cần sử dụng
if / else
for loop
Toán tử %
Toán tử so sánh
Toán tử logic
Biến
Counter
Boolean
Hàm
Template Literals
*/

const number = 150;

let type; // So duong , so am hay so 0
let parity; // so chan hay so le
let isPrime = true; // so nguyen to
let isDivisibleBy3; // chia het cho 3
let isDivisibleBy5; // chia het cho 5
let isDivisibleBy3And5; // chia het cho 3 va 5


// kiem tra so chan hay le
if (number % 2 == 0) {
    parity = "Even";
} else {
    parity = "Odd";
}

if (number > 0) {
    type = "Positive";

    // kiem tra so nguyen to
    if (number < 2) {
        isPrime = false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    // kiem tra chia het cho 3 
    if (number % 3 === 0 || number % 5 === 0) {
        if (number % 3 === 0) {
            isDivisibleBy3 = true;
        }

        if (number % 5 === 0) {
            isDivisibleBy5 = true;
        }

        if (number % 3 === 0 && number % 5 === 0) {
            isDivisibleBy3And5 = true;
        }
    }

} else if (number < 0) {
    type = "Negative";
} else {
    type = "Zero";
}


console.log(`Number: ${number}
Type: ${type}
Parity: ${parity}
Prime: ${(isPrime) ? "Yes" : "No"}
Divisible by 3: ${(isDivisibleBy3) ? "Yes" : "No"}
Divisible by 5: ${(isDivisibleBy5) ? "Yes" : "No"}
Divisible by 3 and 5: ${(isDivisibleBy3And5) ? "Yes" : "No"}
`)



// output nang cao
const start = 1;
const end = 100;

let primeCount = 0;
let evenCount = 0;
let oddCount = 0;
let divisibleBy3Count = 0;
let divisibleBy5Count = 0;
let divisibleBy3And5Count = 0;

for (let i = start; i <= end; i++) {
    let isPrime = true;

    if (i > 0) {
        // kiem tra so chan hay le
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }

        // kiem tra so nguyen to
        if (i < 2) {
            isPrime = false;
        }
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) primeCount++;


        // kiem tra chia het cho 3 
        if (i % 3 === 0 || i % 5 === 0) {
            if (i % 3 === 0) {
                divisibleBy3Count++;
            }

            if (i % 5 === 0) {
                divisibleBy5Count++;
            }

            if (i % 3 === 0 && i % 5 === 0) {
                divisibleBy3And5Count++;
            }
        }
    }
}

console.log(`Range : ${start} - ${end}

Prime count : ${primeCount}
Even count : ${evenCount}
Odd count : ${oddCount}
Divisible by 3 : ${divisibleBy3Count}
Divisible by 5 : ${divisibleBy5Count}
Divisible by both 3 and 5 : ${divisibleBy3And5Count}`);