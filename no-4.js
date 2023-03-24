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
