/*
Bài 1: Student Profile
Easy
Mục tiêu: Lấy dữ liệu từ object lồng nhau và đổi tên biến.
Cho dữ liệu:
const student = {
  name: "An",
  age: 20,
  contact: {
    email: "an@example.com",
    phone: "0123456789"
  }
};


Yêu cầu:
1. Dùng Nested Destructuring lấy name và đổi tên thành studentName.
2. Lấy email bên trong contact, đổi tên thành studentEmail.
3. In cả hai biến ra console.
4. Không sử dụng cách truy cập thuộc tính thông thường như student.contact.email để lấy dữ liệu.
Kết quả mong đợi:
An
an@example.com
*/

const student = {
    name: "An",
    age: 20,
    contact: {
        email: "an@example.com",
        phone: "0123456789"
    }
};

const {
    contact: { email: studentEmail }
} = student;

console.log(studentEmail);