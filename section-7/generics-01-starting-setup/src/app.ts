// Code goes here!

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("10");
  }, 2000);
});

function merge(objA: object, objB: object) {}
