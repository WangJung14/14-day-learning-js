/*
🎯 Mục tiêu
Luyện Closure + Private State + Default Parameters + Arrow Function.
📌 Mô tả
Xây dựng một Counter Factory có khả năng tạo ra nhiều bộ đếm độc lập. Trạng thái của mỗi bộ đếm phải được đóng gói bên trong Closure và không thể bị truy cập hoặc thay đổi trực tiếp từ bên ngoài.
📥 Input
Viết hàm:
createCounter(initialValue = 0)

Tạo 2 counter:
const counterA = createCounter(10);
const counterB = createCounter(100);

Thực hiện:
counterA.increment();
counterA.increment();
counterA.decrement();

counterB.increment();

console.log(counterA.getValue());
console.log(counterB.getValue());

counterA.reset();

console.log(counterA.getValue());
console.log(counterB.getValue());

⚙️ Yêu cầu
1. createCounter() phải trả về một Object chứa 4 function.
2. Các function phải sử dụng Arrow Function:
   - increment(): tăng value lên 1, trả về giá trị mới.
   - decrement(): giảm value xuống 1, trả về giá trị mới.
   - reset(): đưa value về initialValue.
   - getValue(): trả về giá trị hiện tại.
3. Giá trị counter phải là private.
4. Không được khai báo value ở global scope.
5. Không được cho phép:
counterA.value = 999;

làm thay đổi state thật.
6. counterA và counterB phải có state độc lập.
📤 Output mong đợi
counterA: 11
counterB: 101

After reset:
counterA: 10
counterB: 101
*/

