/*
Xây dựng logic đăng nhập cho một hệ thống.

Input
JavaScript

Copy
const username = "admin";
const password = "123456";
const isAccountActive = true;
const isAccountLocked = false;
const loginAttempts = 2;
Yêu cầu
Hệ thống phải kiểm tra lần lượt các điều kiện:

Account có tồn tại không.
Account có đang active không.
Account có bị khóa không.
Username có chính xác không.
Password có chính xác không.
Số lần đăng nhập có vượt giới hạn không.
Nếu tất cả điều kiện đều hợp lệ, đăng nhập thành công.

Login thành công
Kết quả:

TEXT

Copy
Login successful
Welcome back, admin!
Login thất bại
Nếu đăng nhập thất bại, phải chỉ ra nguyên nhân cụ thể.

Ví dụ:

TEXT

Copy
Login failed
Reason: Account is locked
Hoặc:

TEXT

Copy
Login failed
Reason: Invalid username or password
Hard Extension 🚀
Thiết kế hệ thống giới hạn tối đa 3 lần đăng nhập.

Nếu số lần đăng nhập vượt quá giới hạn:

TEXT

Copy
Account locked
Hãy đảm bảo hệ thống xử lý đúng các trường hợp:

TEXT

Copy
loginAttempts = 0
loginAttempts = 2
loginAttempts = 3
loginAttempts = 4
Logic cần sử dụng
Trong bài tập này, bắt buộc sử dụng:

&& — AND
|| — OR
! — NOT
=== — so sánh bằng tuyệt đối
Ternary Operator ? :
Gợi ý tư duy
Có thể chia bài toán thành các bước:

TEXT

Copy
Input
  ↓
Check Account
  ↓
Check Account Status
  ↓
Check Login Attempts
  ↓
Check Username & Password
  ↓
Login Success / Login Failed
Không nên viết toàn bộ logic vào một câu lệnh if quá dài.

Hãy chia nhỏ các điều kiện để code dễ đọc, dễ kiểm tra và dễ mở rộng.
*/

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    "Please enter your username:",
    "Please enter your password:",
    "Is your account active (true or false):",
    "Is your account locked (true or false):",
    "Please enter login attempts:"
];

const answer = [];
const adminUsername = "admin";
const adminPassword = "123456";
function ask(index) {
    if (index === questions.length) {
        rl.close();

        const username = answer[0];
        const password = answer[1];
        const isAccountActive = Number(answer[2]);
        const isAccountLocked = Number(answer[3]);
        const loginAttempts = Number(answer[4]);

        let reason = "";
        if (!isAccountActive || isAccountLocked || (username !== adminUsername) || (password !== adminPassword) || loginAttempts > 3) {
            if (!isAccountActive) {
                reason = "Account is not acctive";
            } else if (isAccountLocked || loginAttempts > 3) {
                reason = "Account is locked";
            } else if ((username !== adminUsername) || (password !== adminPassword)) {
                reason = "Invalid username or password";
            }
        } else {
            console.log("Login successful\nWelcome back, admin!")
            return;
        }
        console.log(`Login failed
reason :${reason}`);
        return;
    }
    rl.question(questions[index], (answer) => {
        answers.push(answer);
        ask(index + 1);
    });
}
ask(0);