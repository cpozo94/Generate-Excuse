/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function generateExcuse() {
    let whoindx = Math.floor(Math.random() * who.length);
    let actionindx = Math.floor(Math.random() * action.length);
    let whatindx = Math.floor(Math.random() * what.length);
    let whenindx = Math.floor(Math.random() * when.length);

    let str = `${who[whoindx]} ${action[actionindx]} ${what[whatindx]} ${when[whenindx]}`;
    const h3 = document.getElementById("excuse");
    h3.innerHTML = str;
  }

  generateExcuse();
  const btn = document.getElementById("button");
  btn.addEventListener("click", generateExcuse);
};
