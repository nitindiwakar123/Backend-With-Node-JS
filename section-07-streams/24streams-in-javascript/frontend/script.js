// console.time();
const response = await fetch('http://localhost:4000/');
const data = await response.text();
console.log(data);
// console.timeEnd();

// console.log(data);
// console.log(response);
// console.log(response.body);

// const decoder = new TextDecoder();
// console.time();
// let i = 0;
// for await (const chunk of response.body) {
//   i++;
//   console.log(decoder.decode(chunk));

//   if (i == 1) {
//     console.timeEnd();
//   }
// }