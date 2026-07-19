console.log("A");

const intervalId = setInterval(() => {
  console.log("B");
}, 10);

setTimeout(() => {
  const promise = new Promise((resolve) => {
    console.log("C");
    resolve("D");
    console.log("E");
  });

  promise.then((value) => {
    console.log(value);
    setTimeout(() => {
      console.log("F");
      clearInterval(intervalId);
    }, 10);
  });

  console.log("G");
}, 10);
