/*
Mở rộng bài toán FizzBuzz truyền thống.

Input
JavaScript

Copy
const start = 1;
const end = 100;
Quy tắc
Duyệt qua tất cả các số từ start đến end.

Với mỗi số, kiểm tra theo các quy tắc:

TEXT

Copy
Chia hết cho 3 và 5 → FizzBuzz
Chia hết cho 3       → Fizz
Chia hết cho 5       → Buzz
Số nguyên tố         → Prime
Không thuộc các trường hợp trên → số
Thứ tự ưu tiên
Phải thiết kế thứ tự kiểm tra rõ ràng.

FizzBuzz phải được kiểm tra trước Fizz và Buzz.

Ví dụ:

TEXT

Copy
15 → FizzBuzz
17 → Prime
21 → Fizz
25 → Buzz
Trong đó:

TEXT

Copy
15
→ Chia hết cho 3
→ Chia hết cho 5
→ FizzBuzz
17
→ Không chia hết cho 3
→ Không chia hết cho 5
→ Là số nguyên tố
→ Prime
Yêu cầu
In kết quả của từng số trong khoảng:

TEXT

Copy
1 → ...
2 → ...
3 → Fizz
4 → ...
5 → Buzz
...
15 → FizzBuzz
...
17 → Prime
...
Nếu một số không thuộc bất kỳ trường hợp đặc biệt nào, in chính số đó.

Ví dụ:

TEXT

Copy
1 → 1
2 → Prime
3 → Fizz
4 → 4
5 → Buzz
6 → Fizz
7 → Prime
8 → 8
9 → Fizz
10 → Buzz
15 → FizzBuzz
17 → Prime
Hard Extension 🚀
Sau khi duyệt toàn bộ khoảng số, thống kê số lượng của từng loại:

TEXT

Copy
Fizz count
Buzz count
FizzBuzz count
Prime count
Normal number count
Ví dụ Output
TEXT

Copy
Range: 1 - 100
Fizz count: ...
Buzz count: ...
FizzBuzz count: ...
Prime count: ...
Normal number count: ...
Lưu ý quan trọng
Một số chỉ được tính vào một nhóm duy nhất.

Ví dụ:

TEXT

Copy
15 → FizzBuzz
Không được đồng thời tăng:

TEXT

Copy
Fizz count
Buzz count
FizzBuzz count
Mà chỉ tăng:

TEXT

Copy
FizzBuzz count
Tương tự, số nguyên tố phải được phân loại thành Prime nếu nó không đồng thời thuộc trường hợp Fizz, Buzz hoặc FizzBuzz.

Edge Cases
Tự kiểm tra với các khoảng:

TEXT

Copy
start = 1
end = 1
TEXT

Copy
start = 1
end = 15
TEXT

Copy
start = 15
end = 30
Đặc biệt kiểm tra:

TEXT

Copy
3
5
15
17
21
25
30
Gợi ý tư duy
Có thể chia bài toán thành các bước:

TEXT

Copy
Input
  ↓
Loop Through Range
  ↓
Check FizzBuzz
  ↓
Check Fizz
  ↓
Check Buzz
  ↓
Check Prime
  ↓
Normal Number
  ↓
Update Counters
  ↓
Generate Statistics
Không nên viết toàn bộ logic vào một biểu thức phức tạp.

Hãy đảm bảo thứ tự kiểm tra điều kiện được thiết kế hợp lý.

Kiến thức cần sử dụng
for loop
if / else if / else
Toán tử %
Toán tử logic
Biến
Counter
Boolean
Hàm kiểm tra số nguyên tố
Template Literals
*/

const start = 1;
const end = 100;
let fizzCount = 0;
let buzzCount = 0;
let fizzbuzzCount = 0;
let primeCount = 0;
let normalNumberCount = 0;

for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} - FizzBuzz`)
        fizzbuzzCount++;
    } else if (i % 3 === 0) {
        console.log(`${i} - Fizz`)
        fizzCount++;
    } else if (i % 5 === 0) {
        console.log(`${i} - Buzz`)
        buzzCount++;
    } else if (isPrime(i)) {
        console.log(`${i} - Prime`)
        primeCount++;
    } else {
        console.log(`${i} - ${i}`)
        normalNumberCount++;
    }
}


console.log(`Range: ${start} - ${end}

Fizz count: ${fizzCount}
Buzz count: ${buzzCount}
FizzBuzz count: ${fizzbuzzCount}
Prime count: ${primeCount}
Normal number count: ${normalNumberCount}`)


function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}