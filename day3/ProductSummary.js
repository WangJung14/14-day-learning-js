/*
Cho object:
const product = {
    name: "Laptop",
    price: 20000000
};


Yêu cầu: Viết hàm showProduct thỏa mãn:
- Dùng Function Parameter Destructuring.
- Đổi name thành biến productName.
- Thuộc tính category có giá trị mặc định "General".
- Nếu gọi hàm với object đã cho, kết quả phải là:
Laptop
20000000
General
*/

const product = {
    name: "LapTop",
    price: 20000000
};

function showProduct({
    name: productName,
    price,
    category = "General"
}) {
    console.log(productName);
    console.log(price);
    console.log(category);
}

showProduct(product);