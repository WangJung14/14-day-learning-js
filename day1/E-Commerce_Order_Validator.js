/*
Xây dựng hệ thống kiểm tra và xác nhận đơn hàng thương mại điện tử.

Input
JavaScript

Copy
const orderValue = 850000;
const customerType = "member";
const isPremium = true;
const paymentCompleted = true;
const addressValid = true;
Yêu cầu
Hệ thống phải kiểm tra:

Đơn hàng có giá trị hợp lệ.
Payment đã hoàn thành.
Địa chỉ giao hàng có hợp lệ không.
Customer có thuộc nhóm khách hàng hợp lệ không.
Customer có phải là Premium Member không.
Premium Member có được hưởng ưu đãi hay không.
Order Validation Rules
Đơn hàng chỉ được xác nhận khi:

TEXT

Copy
Order value hợp lệ
AND
Payment completed
AND
Address valid
AND
Customer type hợp lệ
Nếu một trong các điều kiện trên không thỏa mãn, đơn hàng phải bị từ chối và chỉ ra chính xác lý do.

Ví dụ:

TEXT

Copy
Order Status: Rejected
Reason: Payment not completed
Shipping Rule
Phí vận chuyển được xác định theo các quy tắc:

TEXT

Copy
Order >= 1,000,000 → Free Shipping
Premium Member → Free Shipping
Các trường hợp còn lại → 30,000
Nếu đơn hàng vừa đạt giá trị tối thiểu vừa là Premium Member thì vẫn được miễn phí vận chuyển.

Output
Nếu đơn hàng hợp lệ:

TEXT

Copy
Order Status: Confirmed
Shipping Fee: 0
Customer Type: Premium Member
Nếu đơn hàng không hợp lệ:

TEXT

Copy
Order Status: Rejected
Reason: ...
Hard Extension 🚀
Thêm các phương thức vận chuyển:

TEXT

Copy
standard
express
same-day
Mỗi phương thức có mức phí khác nhau.

Ví dụ:

TEXT

Copy
standard → 30,000
express → 50,000
same-day → 100,000
Sử dụng switch-case để xử lý shippingMethod.

Ví dụ:

JavaScript

Copy
const shippingMethod = "express";
Sau đó xác định phí vận chuyển dựa trên phương thức được lựa chọn.

Premium Member
Nếu customer là Premium Member:

TEXT

Copy
isPremium === true
thì được hưởng:

TEXT

Copy
Free Shipping
bất kể giá trị đơn hàng hoặc phương thức vận chuyển.

Edge Cases
Tự kiểm tra chương trình với các trường hợp:

TEXT

Copy
orderValue = 0
orderValue < 0
orderValue = 1,000,000
orderValue < 1,000,000
paymentCompleted = false
addressValid = false
customerType không hợp lệ
isPremium = true
isPremium = false
shippingMethod = "standard"
shippingMethod = "express"
shippingMethod = "same-day"
shippingMethod không hợp lệ
Đặc biệt kiểm tra các giá trị nằm ngay tại ranh giới:

TEXT

Copy
orderValue = 999,999
orderValue = 1,000,000
Gợi ý tư duy
Có thể chia bài toán thành các bước:

TEXT

Copy
Input
  ↓
Validate Order
  ↓
Validate Payment
  ↓
Validate Address
  ↓
Validate Customer
  ↓
Determine Premium Status
  ↓
Calculate Shipping Fee
  ↓
Generate Order Result
Với Hard Extension:

TEXT

Copy
Input
  ↓
Validate Order
  ↓
Validate Customer
  ↓
Validate Payment & Address
  ↓
Check Premium
  ↓
switch(shippingMethod)
  ↓
Calculate Shipping Fee
  ↓
Generate Report
Không nên viết toàn bộ logic vào một if duy nhất.

Hãy chia nhỏ từng điều kiện để code dễ đọc, dễ kiểm tra và dễ mở rộng.

Kiến thức cần sử dụng
if / else
&&
||
!
===
!==
>
<
>=
<=
Ternary Operator
switch-case
Biến
Template Literals
Logical Operators
*/

const orderValue = 850000;
let customerType = "member";
const isPremium = true;
const paymentCompleted = true;
const addressValid = true;
const shippingMethod = "express";

let failedReason = "";
let shippingFee;

// Tinh tien ship
if (isPremium || orderValue >= 1000000) {
    shippingFee = 0;
} else {
    switch (shippingMethod) {
        case "standard":
            shippingFee = 30000;
            break;
        case "express":
            shippingFee = 50000;
            break;
        case "same-day":
            shippingFee = 100000;
            break;
    }
}

// validate order
const isOrderValid = (orderValue > 0) ? true : false;

// validate payment
const isPayment = paymentCompleted;

// validate address
const isAddressValid = addressValid;

// validate customer type
const isCustomerTypeValid = (customerType === "member") ? true : false;

// customer type
const customerDisplayName =
    isPremium ? "Premium Member" : "Member";

if (!isOrderValid) {
    failedReason = "Invalid order value";
} else if (!paymentCompleted) {
    failedReason = "Payment not completed";
} else if (!isAddressValid) {
    failedReason = "Invalid Address";
} else if (!isCustomerTypeValid) {
    failedReason = "Invalid Customer Type";
} else {
    console.log(`Order Status: Confirmed
Shipping Fee: ${shippingFee}
Customer Type: ${customerDisplayName}`);
    return;
}

const result = failedReason ? "Rejected" : "Confirmed";
console.log(`Order status: ${result}
Reason : ${failedReason}`);





