// // console.log(a);
// // // Hoisting
// // var a = 10;
// // console.log(a);

// // console.log(b);
// // // Temporal Dead Zone
// // let b = 20;
// // b = 40;
// // console.log(b);

// // const c = 30;
// // c = 50;
// // console.log(c);
// hello();

// //1. Named Function
// function hello() {
//   console.log("Hello world");
//   console.log("Hello world1");

//   console.log("Hello world2");
// }

// hello();
// // a();
// // 2. Function Expression
// let a = function () {
//   console.log("Function Expression");

//   console.log("Hello world");
//   console.log("Hello world");

//   console.log("Hello world");

//   console.log("Hello world");
// };
// a();

// // 3.Arrow Function
// let b = () => {
//   console.log("Arrow Function");
// };

// b();

// // 4. Callback Function 5. IIFE ( Immediately invoked function expression)

// (() => {
//   console.log("IIFE and Callabck Function");
// })();

// let addTwoNo = (parameter1, parameter2) => {
//   console.log(parameter1 + parameter2);
// };
// addTwoNo(23, 34);
// addTwoNo(32, 67);
// addTwoNo(45, 78);

// create a calculator

console.log(2 === "2");

let a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(a);
let c = [1, 2, 3];
let d = [1, 2, 3];
// console.log([1, 2, 3] === [1, 2, 3]);
console.log(c[0] === d[0]);
// intialization,condition,in/dec
for (let i = 0; i < a.length; i++) {
  a[i] = a[i] * 2;
  console.log(a[i]);
}
console.log(a);

let ab = [1, 2, 3, 4, 5, 6, 7, 8];

let cc = ab.map((el, index) => {
  return el * 2;
});
console.log("Previous array ", ab);

console.log("New Array", cc);

let dd = ab.filter((el, index) => {
  return el % 2 == 1;
});

console.log(dd);

let re = ab.reduce((acc, el, index) => {
  console.log(acc, el);

  return acc + el;
}, 10);

console.log(re);

let obj = {
  a: 10,
  b: "sidd",
  obj1: {
    name: "siddharth",
    email: "sid",
  },
};

let arrobj = [
  {
    name: "sid",
    email: "assa",
  },
  {
    name: "sid1",
    email: "assa1",
  },
  {
    name: "sid2",
    email: "assa2",
  },
];
console.log(arrobj[0].name);

arrobj.map((el) => {
  console.log(el.name);
});

console.log(obj.obj1);
