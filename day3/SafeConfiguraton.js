/*
Viết hàm startApp để xử lý cấu hình:
const config = {
    appName: "StudyApp",
    options: {
        theme: "dark"
    }
};


Yêu cầu:
- Dùng Function Parameter Destructuring để lấy appName.
- Lấy theme từ options và đổi tên thành currentTheme.
- currentTheme mặc định là "light" nếu thiếu.
- Nếu gọi startApp() mà không truyền đối số, hàm không được báo lỗi; kết quả là:
App: Unknown
Theme: light


Gợi ý: Em cần suy nghĩ về Default Values ở cả tham số ngoài cùng lẫn object options lồng bên trong.
*/

const config = {
    appName: "StudyApp",
    options: {
        theme: "dark"
    }
};

function startUp({
    appName = "Unknown",
    options: { theme: currentTheme = "light" } = {},
} = {}) {
    console.log(appName);
    console.log(currentTheme);
}

startUp();