const images = document.querySelectorAll(".image");
let draggedItem = null;

images.forEach(image => {
    image.addEventListener("dragstart", (e) => {
        draggedItem = e.target;
        e.target.classList.add("selected");
    });
 image.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

 
    image.addEventListener("drop", (e) => {
        e.preventDefault();

        if (draggedItem !== e.target) {
            let temp = document.createElement("div");
            e.target.replaceWith(temp);
            draggedItem.replaceWith(e.target);
            temp.replaceWith(draggedItem);
        }
        draggedItem.classList.remove("dragging");
        draggedItem = null;
    });

  
    image.addEventListener("dragend", () => {
        if (draggedItem) {
            draggedItem.classList.remove("selected");
        }
    });
});
