const fs = require('fs');

// List of students with their grades
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 78 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 88 },
    { name: "Eve", grade: 95 }
];

// Function to calculate average grade
function calculateAverage(students) {
    const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
    return totalGrades / students.length;
}

// Calculate the average grade
const averageGrade = calculateAverage(students);

// Prepare the result message
const resultMessage = `The average grade of the students is: ${averageGrade.toFixed(2)}\n`;

// Write the result to a text file
fs.writeFile('averageGrade.txt', resultMessage, (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Average grade written to averageGrade.txt');
    }
});
