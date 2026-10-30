// 1. Store a student's name, roll number, department, and marks in five subjects
let name = "Rahul Kumar";
let rollNo = 101;
let department = "Computer Science";

// 2. Store the five subject marks in an array
let marks = [78, 85, 62, 91, 34];

// 3. Function to calculate the total marks
function calculateTotal(marksArray) {
    let total = 0;
    for (let i = 0; i < marksArray.length; i++) {
        total += marksArray[i];
    }
    return total;
}

// 4. Function to calculate the percentage (assuming each subject is out of 100)
function calculatePercentage(marksArray) {
    let total = calculateTotal(marksArray);
    let maxPossibleMarks = marksArray.length * 100;
    return (total / maxPossibleMarks) * 100;
}

// 5. Function to find the highest mark
function findHighest(marksArray) {
    let highest = marksArray[0];
    for (let i = 1; i < marksArray.length; i++) {
        if (marksArray[i] > highest) {
            highest = marksArray[i];
        }
    }
    return highest;
}

// 6. Function to find the lowest mark
function findLowest(marksArray) {
    let lowest = marksArray[0];
    for (let i = 1; i < marksArray.length; i++) {
        if (marksArray[i] < lowest) {
            lowest = marksArray[i];
        }
    }
    return lowest;
}

// 7. Count how many subjects have marks greater than or equal to 40 (Passing criteria)
let passedSubjectsCount = 0;
for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 40) {
        passedSubjectsCount++;
    }
}

// 8. Convert the student's name to uppercase and get the number of characters
let upperCaseName = name.toUpperCase();
let nameCharacterCount = name.length; // Includes spaces (or use name.replace(/\s+/g, "").length for letters only)

// Bonus Challenge: Performance grade based on percentage
function getPerformanceGrade(marksArray) {
    let percentage = calculatePercentage(marksArray);
    if (percentage >= 85) {
        return "Excellent";
    } else if (percentage >= 70) {
        return "Good";
    } else if (percentage >= 50) {
        return "Average";
    } else {
        return "Needs Improvement";
    }
}

// 9. Display the final report
console.log("Student: " + upperCaseName);
console.log("Roll Number: " + rollNo);
console.log("Department: " + department);
console.log("Total Marks: " + calculateTotal(marks));
console.log("Percentage: " + calculatePercentage(marks) + "%");
console.log("Highest Marks: " + findHighest(marks));
console.log("Lowest Marks: " + findLowest(marks));
console.log("Subjects Passed: " + passedSubjectsCount);
console.log("Name Character Count: " + nameCharacterCount);
console.log("Performance: " + getPerformanceGrade(marks));
