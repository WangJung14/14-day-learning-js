/*
Mini-project: Immutable Student Manager
Mục tiêu là xây dựng một chương trình quản lý sinh viên bằng JavaScript, áp dụng array, object, spread và immutable.
*/

const students = [
    { id: 1, name: "An", score: 8 },
    { id: 2, name: "Bình", score: 7 },
    { id: 3, name: "Chi", score: 9 }
];

const bonus = 1;
// them sinh vien
function addStudent(students, newStudent) {
    if (!newStudent) {
        throw new Error("Student is required");
    }

    if (
        newStudent.id == null ||
        typeof newStudent.name !== "string" ||
        newStudent.name.trim() === "" ||
        typeof newStudent.score !== "number" ||
        !Number.isFinite(newStudent.score) ||
        newStudent.score < 0
    ) {
        throw new Error("Invalid student data");
    }


    return [...students, newStudent];
}

// cap nhat diem sinh vien
function updateStudentScore(students, studentId, newScore) {
    return students.map(student => {
        return student.id === studentId ?
            { ...student, score: newScore }
            : student
    });
}

// xoa sinh vien
function removeStudent(students, studentId) {
    return students.filter(student => {
        return student.id !== studentId;
    });
}

//tim kiem sinh vien theo id
function findStudentById(students, studentId) {
    return students.find(student => {
        return student.id === studentId;
    })
}

// tinh diem trung binh 
function getAverageScore(students) {
    const numberOfStudent = students.length;

    if (numberOfStudent === 0) {
        return 0;
    }

    let totalScore = 0;

    for (const student of students) {
        totalScore += student.score;
    }

    return totalScore / numberOfStudent;

}

// loc sinh vien theo diem nho nhat
function getStudentsByMinScore(students, minScore) {
    return students.filter(student => {
        return student.score >= minScore;
    })
}

// sort sinh vien theo diem
function sortStudentsByScore(students) {
    return [...students].sort((a, b) => {
        return b.score - a.score;
    });
}

// lay sinh vien co diem cao nhat
function getTopStudent(students) {
    if (students.length === 0) return undefined;
    let newArr = sortStudentsByScore(students);
    return getFirst(newArr);
}

// lay sinh vien co diem cao nhat dung reduce
function getTopStudentV2(students) {
    return students.reduce((top, student) => {
        if (top === undefined || student.score > top.score) {
            return student;
        }

        return top;
    }, undefined);
}

//tra ve object dau tien trong mang
function getFirst(students) {
    return students[0];
}

// loc sinh vien dat yeu cau
function getPassedStudents(students) {
    return students.filter(student => {
        return student.score >= 8;
    })
}

// bonus point 
function bonusPoints(students, bonus) {
    return students.map(student => {
        return { ...student, score: student.score + bonus }
    })
}

// tinh tong diem tat ca sinh vien v2 dung reduce

function getAverageScoreV2(students) {
    const numberOfStudent = students.length;
    if (numberOfStudent === 0) return 0;

    const totalScore = students.reduce(
        (sum, student) => sum + student.score, 0
    );

    return totalScore / numberOfStudent;
}

console.log(bonusPoints(students, bonus));
console.log(getAverageScoreV2(students));
// console.log(getPassedStudents(students));