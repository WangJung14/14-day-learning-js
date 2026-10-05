/*
Xây dựng chương trình tính tiền điện theo bậc.

Input
JavaScript

Copy
const kWh = 350;
Quy tắc tính tiền điện
Giá điện được tính theo từng bậc:

TEXT

Copy
0 - 50       → 1,800 / kWh
51 - 100     → 2,000 / kWh
101 - 200    → 2,500 / kWh
201 - 300    → 3,000 / kWh
301+         → 3,500 / kWh
Yêu cầu
Không được tính toàn bộ số điện theo mức giá của bậc cao nhất.

Ví dụ với:

TEXT

Copy
kWh = 350
Không được tính:

TEXT

Copy
350 × 3,500
Mà phải chia số điện thành từng bậc:

TEXT

Copy
50 kWh đầu tiên
+
50 kWh tiếp theo
+
100 kWh tiếp theo
+
100 kWh tiếp theo
+
50 kWh còn lại
Sau đó tính tiền riêng cho từng bậc.

Output
Hiển thị số tiền điện của từng bậc:

TEXT

Copy
Tier 1: ...
Tier 2: ...
Tier 3: ...
Tier 4: ...
Tier 5: ...
Total: ...
Nếu một bậc không được sử dụng, có thể hiển thị:

TEXT

Copy
Tier 5: 0
Ví dụ tư duy
Với:

TEXT

Copy
kWh = 350
Có thể phân bổ:

TEXT

Copy
Tier 1 → 50 kWh
Tier 2 → 50 kWh
Tier 3 → 100 kWh
Tier 4 → 100 kWh
Tier 5 → 50 kWh
Sau đó:

TEXT

Copy
Tier 1 = 50 × 1,800
Tier 2 = 50 × 2,000
Tier 3 = 100 × 2,500
Tier 4 = 100 × 3,000
Tier 5 = 50 × 3,500
Cuối cùng:

TEXT

Copy
Total = Tier 1 + Tier 2 + Tier 3 + Tier 4 + Tier 5
Hard Extension 🚀
Thêm VAT:

TEXT

Copy
VAT = 10%
Tính:

TEXT

Copy
VAT Amount = Total × 10%
và:

TEXT

Copy
Final Total = Total + VAT Amount
Hóa đơn
Xuất hóa đơn hoàn chỉnh bằng Template Literals:

TEXT

Copy
Electricity Bill
------------------------------
Consumption: 350 kWh
Tier 1: ...
Tier 2: ...
Tier 3: ...
Tier 4: ...
Tier 5: ...
Subtotal: ...
VAT (10%): ...
Total: ...
Edge Cases
Tự kiểm tra chương trình với các trường hợp:

TEXT

Copy
kWh = 0
kWh = 50
kWh = 51
kWh = 100
kWh = 101
kWh = 200
kWh = 201
kWh = 300
kWh = 301
Đặc biệt kiểm tra các giá trị nằm ngay tại ranh giới của từng bậc.

Gợi ý tư duy
Có thể chia bài toán thành các bước:

TEXT

Copy
Input
  ↓
Validate kWh
  ↓
Determine Tier 1
  ↓
Determine Tier 2
  ↓
Determine Tier 3
  ↓
Determine Tier 4
  ↓
Determine Tier 5
  ↓
Calculate Subtotal
  ↓
Calculate VAT
  ↓
Calculate Final Total
  ↓
Generate Invoice
Không nên viết toàn bộ phép tính vào một biểu thức duy nhất.

Hãy chia nhỏ từng bậc để dễ kiểm tra và tránh tính sai số kWh.

Kiến thức cần sử dụng
if / else
Toán tử so sánh
Toán tử số học
Math.min()
Math.max()
Biến
Template Literals
Phép tính phần trăm
*/

const kWh = 350;
const VAT = 10 / 100;
/*
0 - 50       → 1,800 / kWh
51 - 100     → 2,000 / kWh
101 - 200    → 2,500 / kWh
201 - 300    → 3,000 / kWh
301+         → 3,500 / kWh
*/

const tier1KWh = Math.min(kWh, 50);
const tier2KWh = Math.min(Math.max(kWh - 50, 0), 50);
const tier3KWh = Math.min(Math.max(kWh - 100, 0), 100);
const tier4KWh = Math.min(Math.max(kWh - 200, 0), 100);
const tier5KWh = Math.max(kWh - 300, 0);

const tier1 = tier1KWh * 1800;
const tier2 = tier2KWh * 2000;
const tier3 = tier3KWh * 2500;
const tier4 = tier4KWh * 3000;
const tier5 = tier5KWh * 3500;

const total = tier1 + tier2 + tier3 + tier4 + tier5;
const vatAmount = total * VAT;
const finalTotal = total + vatAmount;


console.log(`Electricity Bill
------------------------------
Consumption : ${kWh}kWh

Tier 1: ${tier1}
Tier 2: ${tier2}
Tier 3: ${tier3}
Tier 4: ${tier4}
Tier 5: ${tier5}

Subtotal : ${total}
VAT(${VAT * 100}%) : ${vatAmount}
Total : ${finalTotal}`)