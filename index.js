// Main Sketch

let columns = 32;
let rows = 32;
let draw = false;

const container = document.querySelector(".sketch-container");

container.addEventListener("mousedown", () => {
   draw = true;
});
container.addEventListener("mouseup", () => {
   draw = false
});

for (i = 0; i < columns; i++) {
   const column = document.createElement("div");
   column.setAttribute("class", "column");
   column.setAttribute("draggable", "false");

   for (j = 0; j < rows; j++) {
      const row = document.createElement("div");
      row.setAttribute("class", "row");
      row.setAttribute("draggable", "false");
      row.addEventListener("mousemove", () =>
         {
            if(draw) row.setAttribute("style", "background-color: blue");
         }
      );

      column.appendChild(row);
   }

   container.appendChild(column);
}
