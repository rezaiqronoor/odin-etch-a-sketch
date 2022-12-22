// Main Sketch

let columns = 32;
let rows = 32;
let draw = false;

const container = document.querySelector(".sketch-container");

container.addEventListener("mousedown", () => {
   draw = true;
});
container.addEventListener("mouseup", () => {
   draw = false;
});


for (i = 0; i < columns; i++) {
   const column = document.createElement("div");
   column.setAttribute("class", "column");
   column.setAttribute("draggable", "false");

   for (j = 0; j < rows; j++) {
      const row = document.createElement("div");
      row.setAttribute("class", "row");
      row.setAttribute("draggable", "false");
      row.addEventListener("mousemove", () => {
         if (draw) row.setAttribute("style", "background-color: black");
      });

      column.appendChild(row);
   }

   container.appendChild(column);
}

// Buttons

const btnSetGrid = document.querySelector(".btn-set-grid");
btnSetGrid.addEventListener("click", () => setGrid());

const setGrid = () => {
   const gridAmount = +prompt("Please enter the amount of grid you want to set, from 3-100.");

   if(gridAmount < 3 || gridAmount > 100) alert("Please enter the number in range of 3-100");
   else {
      document.querySelectorAll('.column').forEach(e => e.remove());
      document.querySelectorAll('.row').forEach(e => e.remove());

      for (i = 0; i < gridAmount; i++) {
         const column = document.createElement("div");
         column.setAttribute("class", "column");
         column.setAttribute("draggable", "false");
      
         for (j = 0; j < gridAmount; j++) {
            const row = document.createElement("div");
            row.setAttribute("class", "row");
            row.setAttribute("draggable", "false");
            row.addEventListener("mousemove", () => {
               if (draw) row.setAttribute("style", "background-color: black");
            });
      
            column.appendChild(row);
         }
      
         container.appendChild(column);
      }
   };
}

const btnErase = document.querySelector(".btn-erase");
btnErase.addEventListener("click", () => {
   document.querySelectorAll(".row").forEach(e => e.setAttribute("style", "background-color: lightgrey"));
});
