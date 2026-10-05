/*
Xây dựng một ví điện tử đơn giản.

Input
JavaScript

Copy
let balance = 2000000;
let dailySpent = 500000;
const dailyLimit = 5000000;
const transactionFee = 1000;
Chức năng
Ví điện tử hỗ trợ các giao dịch:

TEXT

Copy
Deposit
Withdraw
Transfer
Check Balance
Quy tắc
Hệ thống phải đảm bảo:

Không được giao dịch số tiền <= 0.
Không được rút số tiền lớn hơn balance.
Tổng số tiền đã chi trong ngày không được vượt quá dailyLimit.
Transfer phải tính thêm transactionFee.
Balance không được âm.
Sau mỗi giao dịch hợp lệ phải cập nhật lại balance.
Nếu giao dịch thất bại, balance không được thay đổi.
Deposit
Khi Deposit:

TEXT

Copy
balance = balance + amount
Ví dụ:

TEXT

Copy
Balance: 2,000,000
Deposit: 1,000,000
New Balance: 3,000,000
Withdraw
Khi Withdraw:

TEXT

Copy
balance = balance - amount
Nhưng phải kiểm tra:

TEXT

Copy
amount > 0
AND
amount <= balance
AND
dailySpent + amount <= dailyLimit
Nếu hợp lệ thì cập nhật:

TEXT

Copy
balance
dailySpent
Transfer
Khi Transfer, số tiền bị trừ khỏi ví bao gồm cả phí giao dịch:

TEXT

Copy
Total Cost = amount + transactionFee
Ví dụ:

TEXT

Copy
Transfer: 500,000
Transaction Fee: 1,000
Total Cost: 501,000
Balance sau giao dịch:

TEXT

Copy
balance = balance - 501,000
Đồng thời cập nhật:

TEXT

Copy
dailySpent = dailySpent + 501,000
Check Balance
Khi chọn Check Balance, chỉ hiển thị số dư hiện tại:

TEXT

Copy
Current Balance: 2,000,000
Không được thay đổi balance hoặc dailySpent.

Output
Mỗi giao dịch phải thông báo kết quả.

Nếu thành công:

TEXT

Copy
Transaction successful
Type: Deposit
Amount: 1,000,000
Balance: 3,000,000
Nếu thất bại:

TEXT

Copy
Transaction failed
Reason: Insufficient balance
Phải xác định chính xác lý do giao dịch thất bại.

Hard Extension 🚀
Mô phỏng một chuỗi transaction:

TEXT

Copy
Deposit 1,000,000
Transfer 500,000
Withdraw 200,000
Deposit 2,000,000
Transfer 1,500,000
Sau mỗi transaction phải:

Kiểm tra giao dịch có hợp lệ không.
Nếu hợp lệ, thực hiện giao dịch.
Cập nhật balance.
Cập nhật dailySpent nếu giao dịch làm phát sinh chi tiêu.
In kết quả giao dịch.
Hiển thị balance hiện tại.
Ví dụ Flow
TEXT

Copy
Initial Balance: 2,000,000
Initial Daily Spent: 500,000
↓ Deposit 1,000,000
Balance: 3,000,000
Daily Spent: 500,000
↓ Transfer 500,000
Balance: 2,499,000
Daily Spent: 1,001,000
↓ Withdraw 200,000
Balance: 2,299,000
Daily Spent: 1,201,000
↓ Deposit 2,000,000
Balance: 4,299,000
Daily Spent: 1,201,000
↓ Transfer 1,500,000
Balance: 2,798,000
Daily Spent: 2,702,000
Edge Cases
Tự kiểm tra các trường hợp:

TEXT

Copy
Deposit 0
Deposit số âm
Withdraw 0
Withdraw số âm
Withdraw > balance
Transfer 0
Transfer số âm
Transfer + fee > balance
dailySpent + transaction > dailyLimit
Balance sau giao dịch = 0
Balance sau giao dịch < 0
Đặc biệt kiểm tra trường hợp:

TEXT

Copy
dailySpent + transactionCost = dailyLimit
và:

TEXT

Copy
dailySpent + transactionCost > dailyLimit
Gợi ý tư duy
Có thể chia bài toán thành các bước:

TEXT

Copy
Input
  ↓
Choose Transaction
  ↓
Validate Amount
  ↓
Check Balance
  ↓
Check Daily Limit
  ↓
Calculate Fee
  ↓
Execute Transaction
  ↓
Update Balance
  ↓
Update Daily Spent
  ↓
Generate Transaction Result
Với Hard Extension:

TEXT

Copy
Transaction 1
  ↓
Update State
  ↓
Transaction 2
  ↓
Update State
  ↓
Transaction 3
  ↓
Update State
  ↓
...
  ↓
Final Wallet State
Kiến thức cần sử dụng
if / else
switch-case
for loop
&&
||
!
===
>
<
>=
<=
Toán tử số học
Biến
Counter
Template Literals
Functions
Cập nhật trạng thái của chương trình
*/