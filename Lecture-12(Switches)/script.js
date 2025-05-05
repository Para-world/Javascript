// switch = can be an efficient replacement to many else if statements
// switch is faster than if-else chain because it is a jump table

// let day = window.prompt("Enter a number between 1 and 7");
// day = Number(day);
// switch (day) {
//   case 1:
//     console.log("It is Monday");
//     break;
//   case 2:
//     console.log("It is Tuesday");
//     break;
//   case 3:
//     console.log("It is Wednesday");
//     break;
//   case 4:
//     console.log("It is Thursday");
//     break;
//   case 5:
//     console.log("It is Friday");
//     break;
//   case 6:
//     console.log("It is Saturday");
//     break;
//   case 7:
//     console.log("It is Sunday");
//     break;
//   default:
//     console.log(`${day} is not a valid day`);
// }

document.getElementById("button").onclick = function (event) {
    event.preventDefault(); // Prevent form submission
    let marks = document.getElementById("marks").value;
    marks = Number(marks); // Convert the input to a number
    const gradeElement = document.getElementById("grade");
    let grade;

    if (isNaN(marks) || marks < 0 || marks > 100) {
        grade = "Invalid Marks. Please enter a number between 0 and 100.";
    } else {
        switch (true) {
            case marks >= 90:
                grade = "A";
                break;
            case marks >= 80:
                grade = "B";
                break;
            case marks >= 70:
                grade = "C";
                break;
            case marks >= 60:
                grade = "D";
                break;
            default:
                grade = "F";
                break;
        }
    }

    // Update the displayed grade
    gradeElement.textContent = grade;
};
