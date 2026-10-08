/*
Bài 2: Product Information
Easy
Mục tiêu: Phân biệt tên thuộc tính với tên biến.
const product = {
  id: "P001",
  info: {
    name: "Mechanical Keyboard",
    price: 1500000
  }
};


Yêu cầu:
Viết code destructuring để tạo ra ba biến:
- productId có giá trị "P001".
- productName có giá trị "Mechanical Keyboard".
- productPrice có giá trị 1500000.
Sau đó in ba biến ra console.
Thử thách thêm: Giải thích tại sao info: { name: productName } không tạo biến info.
*/

const product = {
    id: "P001",
    info: {
        name: "Mechanical Keyboard",
        price: 1500000
    }
};

const {
    id: productId,
    info: { name: productName },
    info: { price: productPrice }
} = product;

console.log(productName);
console.log(productId);
console.log(productPrice);