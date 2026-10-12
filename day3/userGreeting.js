/*
Bài 1 — User Greeting (Easy)
Cho object:
const user = {
    name: "Minh",
    age: 21,
    city: "Da Nang"
};


Yêu cầu: Viết hàm greetUser sử dụng Function Parameter Destructuring để in:
Hello Minh!
Age: 21
City: Da Nang


Gọi hàm với user. Không được sử dụng user.name hoặc user.age bên trong hàm.

*/

const user = {
    name: "Minh",
    age: 21,
    city: "Da Nang"
};

function greetUser({ name, age, city }) {
    console.log(`Hello ${name}!`);
    console.log(`Age: ${age}`);
    console.log(`City : ${city}`)
}

greetUser(user);