import { changeSlide } from "./carousel.js";
import { onClickCreateTask } from "./todo.js";

// Carousel
const nextBtn = document.querySelector("#nextBtn");
const prevBtn = document.querySelector("#prevBtn");

nextBtn.addEventListener("click", function () {
  changeSlide(1);
});

prevBtn.addEventListener("click", function () {
  changeSlide(-1);
});

// Todo
let createBtn = document.getElementById("addTaskBtn");

createBtn.addEventListener("click", onClickCreateTask);
