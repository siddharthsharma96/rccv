// // 1. Tag selector
// const h1 = document.getElementsByTagName("h1");
// console.log(h1[0]);
// // Html COllection
// // Id selector
// // let as = document.getElementById("a");
// // In this we will get single element and first element
// // console.log(as);

// // 3. Class Selector
// let cls = document.getElementsByClassName("a");
// // It will retun an array of tyoe htmlcollection
// console.log(cls[0]);

// // 4.querrySeletor
// let h2 = document.querySelector(".a");
// // return single element and first element
// console.log(h2);

// // 5. QuerySeletorAll
// let b = document.querySelectorAll(".a");
// console.log(b[0]);

// // read and write operations
// let num = document.querySelector(".number");
// // console.log(num.textContent);
// // num.textContent = "asdasasfd";
// // console.log(num.textContent);

// // add/ remove /toggle
// let aa = document.querySelector("input");
// console.log(aa);
// aa.classList.add("rt");
// aa.classList.add("re");

// aa.classList.remove("re");

// aa.classList.toggle("aa");

// num.style.color = "red";
//

// Want all the instance
let againBtn = document.querySelector(".again");
let checkBtn = document.querySelector(".check");
let guessValue = document.querySelector(".guess");
let number = document.querySelector(".number");
let msg = document.querySelector(".message");
let scr = document.querySelector(".score");
let highScr = document.querySelector(".highscore");

// Step2 : Generate a random number between 1-20
let scores = 20;
let randomNo = Math.trunc(Math.random() * 20) + 1;
console.log(randomNo);

checkBtn.addEventListener("click", () => {
  console.log(guessValue.value);
  if (guessValue.value == randomNo) {
    //- if number is equal to  random no
    // change the background to green

    document.body.style.backgroundColor = "green";
    // msg should be correct number
    msg.textContent = "...Correct Value";
    // instead of ? show the random value
    number.textContent = randomNo;
    if (scores > highScr.textContent) {
      highScr.textContent = scores;
    }
  } else if (guessValue.value > randomNo) {
    //- if number is greater than random no
    // score decrement by 1
    scores--;
    scr.textContent = scores;
    // msg should too high
    msg.textContent = "..too High";
  } else if (guessValue.value < randomNo) {
    //- if number is less than random no
    // score decrement by 1
    scores--;
    scr.textContent = scores;
    // msg should too low
    msg.textContent = "..to low";
  }
  // Check Button Functionality
  // step check the value is grater than or equal to random no

  // show the current in the highscore if highscore value is less than current score
});

// Again Button functionality
againBtn.addEventListener("click", () => {
  // Geanreat a RANDOM NUMBER AGAIN
  randomNo = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNo);

  // Change the background ciolor to bklack
  document.body.style.backgroundColor = "Black";
  // instaed of random number put ?
  number.textContent = "?";
  // CURRENT SCORE  value will bew 20
  scores = 20;
  scr.textContent = scores;
  // message should be Start guessing...
  msg.textContent = "Start guessing...";
});
