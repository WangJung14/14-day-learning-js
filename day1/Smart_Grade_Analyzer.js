/*
Xây dựng chương trình phân tích kết quả học tập của một sinh viên.
Yêu cầu
Tính toán và xác định:
Điểm trung bình.
Xếp loại A / B / C / D / F.
Trạng thái Passed / Failed.
Trạng thái chuyên cần.
Thông báo kết quả bằng Template Literals.

Quy tắc xếp loại
Average >= 90 → A
Average >= 80 → B
Average >= 70 → C
Average >= 60 → D
Average < 60  → F

Quy tắc Passed / Failed:
Sinh viên chỉ được Passed khi thỏa mãn cả hai điều kiện:

Average >= 50
AND
Attendance >= 80

Nếu không thỏa mãn một trong hai điều kiện trên:
Failed

Quy tắc chuyên cần
Kiểm tra trạng thái chuyên cần dựa trên attendance:
Attendance >= 80 → Good Attendance
Attendance < 80  → Poor Attendance

Edge Cases
Tự kiểm tra chương trình với các trường hợp:

Average = 100
Average = 50
Average = 49
Attendance = 80
Attendance = 79

Output:
Kết quả mong muốn
Sử dụng Template Literals để tạo một báo cáo kết quả.
Student: Tommy
Average: 85
Grade: B
Status: Passed
Attendance: 87%
Attendance Status: Good Attendance
*/

let studentName = prompt("Please enter your name:");
let math = Number(prompt("Enter your math point:"));
let javascript = Number(prompt("Enter your javascript point:"));
let english = Number(prompt("Enter your english point:"));
let attendance = Number(prompt("Enter your attendace point:"))


// tinh diem trung binh
let average = (math + javascript + english) / 3;
let ranking = "";
// xep loai diem trung binh

if (average >= 90) {
    ranking = "A";
} else if (average >= 80) {
    ranking = "B";
} else if (average >= 70) {
    ranking = "C";
} else if (average >= 60) {
    ranking = "D";
} else {
    ranking = "F";
}

// kiem tra status 
let isPassed = (average >= 50 && attendance >= 80) ? "Passed" : "Failed";
let isGoodAttendance = (attendance >= 80) ? "Good Attendance" : "Poor Attendance";

console.log(`Student: ${studentName}
Average: ${average}
Grade : ${ranking}
Status : ${isPassed}
Attendace : ${attendance}%
Attendance Status: ${isGoodAttendance}
`)