/*
Viết hàm calculateAverage(...scores) thỏa mãn:
1. Nhận số lượng điểm bất kỳ bằng Rest Parameters.
2. Nếu không có điểm nào được truyền vào, trả về 0.
3. Nếu có điểm, tính và trả về điểm trung bình.
4. Không sử dụng thư viện bên ngoài.
*/

function calculateAverage(...scores) {
    if (scores.length === 0) return 0;

    let average = 0;
    for (score in scores) {
        average += scores[score];
    }
    average = (average / scores.length);

    return average;
}

console.log(calculateAverage(8, 9, 10));
console.log(calculateAverage(5, 7));
console.log(calculateAverage());