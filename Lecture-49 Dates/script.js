// Date objects = objects that contain values that represent dates and times
//                These date objects can be changed and formatted

// const date = new Date(); // Create a new date object

// console.log(date);

//Date(year, month, day, hour, minute, second, ms)

// const  date = new Date(2025, 1, 19, 10, 30, 0, 0); 
// console.log(date);

// const date = new Date("2025-01-19T12:00:00z");
// console.log(date);

// const date = new Date(1700000000000);
// console.log(date);


// const date = new Date();
//  const year = date.getFullYear();
//  const month = date.getMonth();
//  const day = date.getDate();
//  const hour =  date.getHours();
//  const minute = date.getMinutes();
//  const seconds = date.getSeconds();
//  const dayofweek = date.getDay();
//  console.log(year);
//  console.log(month);
//  console.log(day);
//  console.log(hour);
//  console.log(minute);
//  console.log(seconds);
//  console.log(dayofweek);



// const date = new Date();
// date.setFullYear(2025);
// date.setMonth(0);
// date.setDate(19);
// date.setHours(12);
// date.setMinutes(60);
// date.setSeconds(60);

// console.log(date);


const date1 = new Date("2025-1-1");
const date2 = new Date("2025-12-1");

if (date2 > date1){
    console.log("Happy new year!")
}


