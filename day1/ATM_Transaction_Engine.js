/*
Xây dựng hệ thống xử lý giao dịch rút tiền ATM.

Input
JavaScript

Copy
let balance = 5000000;
const withdrawAmount = 1500000;
const isCardActive = true;
const dailyWithdrawn = 2000000;
const dailyLimit = 5000000;
Yêu cầu
Giao dịch chỉ hợp lệ khi tất cả các điều kiện sau đều đúng:

TEXT

Copy
Card active
AND
Amount > 0
AND
Amount <= balance
AND
dailyWithdrawn + amount <= dailyLimit
Nếu giao dịch hợp lệ:

TEXT

Copy
Transaction successful
Withdrawn: ...
Remaining balance: ...
Trong đó:

TEXT

Copy
Remaining balance = balance - withdrawAmount
Nếu giao dịch thất bại:

TEXT

Copy
Transaction failed
Reason: ...
Phải chỉ ra chính xác lý do khiến giao dịch thất bại.

Hard Extension 🚀
Thêm các quy tắc:

TEXT

Copy
Amount phải chia hết cho 50,000
Balance sau giao dịch phải >= 50,000
Ví dụ:

TEXT

Copy
withdrawAmount = 1,525,000
→ Giao dịch thất bại vì số tiền rút không chia hết cho 50,000.

Hoặc:

TEXT

Copy
balance = 100,000
withdrawAmount = 75,000
→ Giao dịch thất bại vì số dư sau giao dịch nhỏ hơn 50,000.

Yêu cầu quan trọng
Chương trình phải xác định chính xác lý do transaction thất bại.

Ví dụ:

TEXT

Copy
Transaction failed
Reason: Insufficient balance
Hoặc:

TEXT

Copy
Transaction failed
Reason: Daily withdrawal limit exceeded
Hoặc:

TEXT

Copy
Transaction failed
Reason: Withdrawal amount must be a multiple of 50,000
Edge Cases
Tự kiểm tra chương trình với các trường hợp:

TEXT

Copy
withdrawAmount = 0
withdrawAmount < 0
withdrawAmount > balance
dailyWithdrawn + withdrawAmount > dailyLimit
withdrawAmount không chia hết cho 50,000
balance - withdrawAmount < 50,000
isCardActive = false
Đặc biệt kiểm tra các giá trị nằm ngay tại ranh giới:

TEXT

Copy
withdrawAmount = balance
dailyWithdrawn + withdrawAmount = dailyLimit
balance - withdrawAmount = 50,000
withdrawAmount = 50,000
Gợi ý tư duy
Có thể chia bài toán thành các bước:

TEXT

Copy
Input
  ↓
Validate Card
  ↓
Validate Amount
  ↓
Check Balance
  ↓
Check Daily Limit
  ↓
Check Withdrawal Rule
  ↓
Execute Transaction
  ↓
Generate Result
Không nên viết toàn bộ logic vào một if duy nhất.

Hãy chia nhỏ từng điều kiện để có thể xác định chính xác lỗi xảy ra ở đâu.

Kiến thức cần sử dụng
if / else
&&
||
!
===
>
<
>=
<=
Toán tử %
Biến
Template Literals
Logical Operators
*/

let balance = 5000000;
const withdrawAmount = 1500000;
const isCardActive = true;
const dailyWithdrawn = 2000000;
const dailyLimit = 5000000;

let failedReason = "";

// Các điều kiện kiểm tra
const isInvalidAmount =
    withdrawAmount <= 0 || withdrawAmount > balance;

const isInvalidCard = !isCardActive;

const isDailyLimitExceeded =
    dailyWithdrawn + withdrawAmount > dailyLimit;

const isInvalidWithdrawalAmount =
    withdrawAmount % 50000 !== 0;

const isBalanceTooLow =
    balance - withdrawAmount < 50000;


// Kiểm tra giao dịch theo thứ tự
if (isInvalidCard) {
    failedReason = "Card is inactive";

} else if (isInvalidAmount) {
    failedReason = "Invalid withdrawal amount";

} else if (withdrawAmount > balance) {
    failedReason = "Insufficient balance";

} else if (isDailyLimitExceeded) {
    failedReason = "Daily withdrawal limit exceeded";

} else if (isInvalidWithdrawalAmount) {
    failedReason = "Withdrawal amount must be a multiple of 50,000";

} else if (isBalanceTooLow) {
    failedReason = "Remaining balance must be at least 50,000";

} else {
    // Giao dịch thành công
    const remainingBalance = balance - withdrawAmount;

    console.log(`
Transaction successful
Withdrawn: ${withdrawAmount}
Remaining balance: ${remainingBalance}
`);

    return;
}


// Giao dịch thất bại
const result = failedReason ? "Transaction failed" : "Transaction successful";

console.log(`
${result}
Reason: ${failedReason}
`);