// JavaScript is single-threaded, meaning it executes code line by line. However, some operations take time, such as fetching data from an API, reading files, or running timers. If JavaScript waits for these operations, the page would freeze.
// To solve this, JavaScript uses asynchronous programming with callbacks, promises, and async/await.


// 1. Callbacks: A function passed as an argument to another function, which is executed after the completion of the first function.

function fetchData(callback) {
    setTimeout(() => {
        console.log("✅ Data fetched!");
        callback();
    }, 2000);
}

fetchData(() => {
    console.log("🔁 Processing data...");
});

//  Problem with Callbacks? → Callback Hell (Nested Callbacks)

setTimeout(() => {
    console.log("Step 1 completed");
    setTimeout(() => {
        console.log("Step 2 completed");
        setTimeout(() => {
            console.log("Step 3 completed");
        }, 1000);
    }, 1000);
}, 1000);



// 2. Promises: A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states: pending, fulfilled, or rejected.

// Example of creation and maintaince of promise
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("✅ Data fetched successfully!");
            } else {
                reject("❌ Failed to fetch data.");
            }
        }, 2000);
    });
}

// Handling a promise with `.then()` and `.catch()`
fetchData()
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });


// Example of Promise.all() to handle multiple promises
const promise1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 resolved"), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 resolved"), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 resolved"), 3000));


// Chaining Promises
fetchData()
    .then((data) => {
        console.log(data);
        return "🔄 Processing data...";
    })
    .then((processed) => {
        console.log(processed);
    })
    .catch((error) => {
        console.log(error);
    });

    // Async/Await (Modern and Clean Approach)


