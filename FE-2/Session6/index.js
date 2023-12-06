// learning set timeout
/*
      console.log(0);
      setTimeout(() => {
        console.log(1);
      }, 100);

      setTimeout(() => {
        console.log(2);
      }, 0);

      setTimeout(() => {
        console.log(3);
      }, 200);

      setTimeout(() => {
        console.log(4);
      }, 500);
      */

// promises
const res = fetch("https://api.kanye.rest/");
console.log(res);
