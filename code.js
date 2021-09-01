"use strict";

const addBtn = document.querySelector("button");
const rgbCont = document.querySelector("h3");
const saveBtn = document.querySelector(".save");
const saved = document.querySelector(".saved");
const showBtn = document.querySelector(".show");
const container = document.querySelector(".container");
const hidden = document.querySelector("#hidden");

const color = () => {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);

  const randomColor = `rgb(${red}, ${blue}, ${green})`;
  document.body.style.backgroundColor = randomColor;
  rgbCont.innerText = randomColor;
  saveBtn.disabled = false;
};

const saveColor = () => {
  const paragraph = document.createElement("p");
  paragraph.innerText = rgbCont.innerText;
  paragraph.onmouseover = () => {
    paragraph.style.cursor = "pointer";
  };
  paragraph.style.backgroundColor = rgbCont.innerText;
  paragraph.style.margin = "5px";
  paragraph.style.padding = "15px 0";
  const savedColors = saved.appendChild(paragraph);
  saveBtn.disabled = true;
};

const showColor = () => {
  if (hidden.style.display === "block") {
    hidden.style.display = "none";
  } else hidden.style.display = " block";
  if (showBtn.innerText === "Saved") {
    showBtn.innerText = "Close";
  } else showBtn.innerText = "Saved";
};

saved.addEventListener("click", function (e) {
  e.target.remove();
});

addBtn.addEventListener("click", color);
saveBtn.addEventListener("click", saveColor);
showBtn.addEventListener("click", showColor);
