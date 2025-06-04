let id ;
function createDraggable() {//creacion de un elemento arrastrable
  let span = document.createElement("drag");
  span.id = "Hola-mundo";
  span.innerHTML = "arrastrable";
  span.draggable = true;
  span.ondragstart = e => {
    id = e.target.id; // se guarda el id del elemento arrastrable
   
  }

  return span;
}


function createDraggableArea() {// Create a drop area
  let dropArea = document.createElement("div");
  dropArea.className = "drop";

  dropArea.ondragenter = e => {
    e.target.style.backgroundColor = "yellow";
  };

  dropArea.ondragleave = e => {
    e.target.style.backgroundColor = "";
  };

  dropArea.ondragover = e => e.preventDefault(); // Prevent default to allow drop
   
  dropArea.ondrop = e => {
    e.target.appendChild(document.getElementById(id));
  };

  return dropArea;
}


let draggable = createDraggable();
let dropArea1 = createDraggableArea();
let dropArea2 = createDraggableArea();
document.body.append(dropArea1);
document.body.append(dropArea2);
document.body.append(draggable);
