/*
Viết hàm getHighestScore(...scores) với yêu cầu:
- Nhận số lượng điểm bất kỳ.
- Nếu không có điểm nào, trả về null.
- Nếu có điểm, trả về điểm cao nhất.
- Không sử dụng Math.max().
*/

function getHighestScore(...scores) {
    if (scores.length === 0) return null;

    let highestScore = -99999999;

    for (score of scores) {
        if (score >= highestScore) {
            highestScore = score;
        }
    }
    return highestScore;
}

console.log(getHighestScore(8, 9, 10)); // 10
console.log(getHighestScore(5, 7));     // 7
console.log(getHighestScore());         // null
console.log(getHighestScore(-3, -1));   // -1