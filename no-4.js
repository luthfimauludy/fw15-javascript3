// promise 1
let promise = false;

const Promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (promise) {
      resolve("Janji telah ditepati");
    } else {
      reject("Janji tidak ditepati");
    }
  }, 3000);
});

Promises.then((result) => console.log(result)).catch((error) =>
  console.log(error)
);

// promise 2
// function rejectedPromise() {
//   return new Promise((resolve, reject) => {
//     reject(new Error("This promise is Rejected!"));
//   });
// }

// async function displayData() {
//   try {
//     await rejectedPromise();
//   } catch (error) {
//     console.log("Error Message:", error.message);
//   }
// }

// displayData();
