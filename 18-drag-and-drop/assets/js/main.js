const draggable = document.querySelector(".draggable");
const boxes = document.querySelectorAll(".box");

draggable.addEventListener("dragstart", dragStart);
draggable.addEventListener("dragend", dragEnd);

boxes.forEach((box) => {
  box.addEventListener("dragover", dragOver);
  box.addEventListener("drop", dragDrop);
});

function dragStart() {
  this.classList.add("dragging");
}

function dragEnd() {
  this.classList.remove("dragging");
}

function dragOver(e) {
  e.preventDefault();
  this.appendChild(draggable);
}

function dragDrop() {
  this.appendChild(draggable);
}
