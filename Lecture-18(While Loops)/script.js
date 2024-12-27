// While Loops = repeat some code While some condition is true

// Example 1: Print numbers from 1 to 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Example 2: Print even numbers from 2 to 10
let j = 2;
while (j <= 10) {
  console.log(j);
  j += 2;
}

// Example 3: Print numbers from 10 to 1 in reverse order
let k = 10;
while (k >= 1) {
  console.log(k);
  k--;
}

// Example 4: Sum of numbers from 1 to 5
let sum = 0;
let l = 1;
while (l <= 15) {
  sum += l;
  l++;
}
console.log("Sum of numbers from 1 to 5 is: " + sum);

let username = "";

// while (username === "" || username === null) {
//     username = window.prompt(`Enter your name`);

// }
// console.log(`Hello ${username}`);

// do {
//   username = window.prompt(`Enter your name`);
// } while (username === "" || username === null);
// console.log(`Hello ${username}`);

let loogedIn = false;
let accesname;
let password;

while (!loogedIn) {
    accesname = window.prompt(`Enter your name`);
    password = window.prompt(`Enter your password`);
    if (accesname === "admin" && password === "123") {
        loogedIn = true;
        console.log("Welcome Admin");
    }
    else {
        console.log("Incorrect username or password");
    }
}
