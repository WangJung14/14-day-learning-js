/*
Viết chương trình đánh giá độ mạnh của một password dựa trên các tiêu chí cơ bản.

Input
JAVASCRIPT

Copy
const password = "JavaScript@2026";
Yêu cầu
Kiểm tra password có đáp ứng các điều kiện:

Độ dài tối thiểu.
Có ít nhất một chữ hoa.
Có ít nhất một chữ thường.
Có ít nhất một chữ số.
Có ít nhất một ký tự đặc biệt.
Kết quả
Password được phân loại thành một trong ba mức:

TEXT

Copy
Weak
Medium
Strong
Hard Extension 🚀
Thay vì chỉ trả về level, hãy hiển thị chi tiết các yêu cầu mà password còn thiếu.

Ví dụ:

TEXT

Copy
Password Strength: Medium
Missing requirements:
- Special character
#
Password yếu phổ biến
Nếu password chứa một trong các giá trị phổ biến sau:

TEXT

Copy
password
123456
qwerty
thì phải cảnh báo password yếu.

Ví dụ:

TEXT

Copy
Password Strength: Weak
Warning:
- This is a commonly used password.
Constraints
Không cần sử dụng Regex ở bài này nếu bạn chưa học Regex.
Hãy sử dụng những kiến thức JavaScript đã học để giải quyết bài toán.
Tập trung vào việc sử dụng:
if / else
vòng lặp
biến
String methods
các phép toán logic
*/


const password = "rungdepzai123";
const uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCharacter = uppercaseCharacter.toLowerCase();
const numberCharacter = "1234567890";
const specialCharacter = "!@#$%^&*()-_=+[]{};:',.<>?/\\"
// validate password length >= 8
const isValidLength = password.length >= 8;

// validate at least 1 uppercase
let isValidUpper = false;
let isValidLower = false;
let isNumber = false;
let isSpecial = false;

for (let i = 0; i < password.length; i++) {
    if (uppercaseCharacter.includes(password[i])) {
        isValidUpper = true;
    } else if (lowercaseCharacter.includes(password[i])) {
        isValidLower = true;
    } else if (numberCharacter.includes(password[i])) {
        isNumber = true;
    } else if (specialCharacter.includes(password[i])) {
        isSpecial = true;
    }
}

let missingCount = 0;
let missingRequirements = "";
if (!isValidLength) {
    missingRequirements += "The password must contain at least 8 characters\n";
    ratingPassword++;
}
if (!isValidUpper) {
    missingRequirements += "The password must contain at least 1 uppercase letter\n";
    ratingPassword++;
}
if (!isValidLower) {
    missingRequirements += "The password must contain at least 1 lowercase letter\n";
    ratingPassword++;
}
if (!isNumber) {
    missingRequirements += "The password must contain at least 1 number\n";
    ratingPassword++;
}
if (!isSpecial) {
    missingRequirements += "The password must contain at least 1 special character\n";
    ratingPassword++;
}

const passwordStatus = (ratingPassword === 0) ? "Strong" : ((ratingPassword < 3) ? "Medium" : "Weak")

console.log(`Password Strength : ${passwordStatus}`);
if (ratingPassword > 0) {
    console.log(missingRequirements);
}