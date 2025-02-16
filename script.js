document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image");
    let draggedItem = null;

    images.forEach(image => {
        image.addEventListener("dragstart", (e) => {
            draggedItem = e.target;
            draggedItem.classList.add("selected");
            e.dataTransfer.setData("text/plain", draggedItem.id);
        });

        image.addEventListener("dragover", (e) => {
            e.preventDefault();
        });

        image.addEventListener("drop", (e) => {
            e.preventDefault();
            
            const targetItem = e.target.closest(".image");  // Ensure dropping only happens on images
            if (draggedItem !== targetItem && targetItem) {
                const parent = draggedItem.parentNode;
                const nextSibling = targetItem.nextSibling === draggedItem ? targetItem : targetItem.nextSibling;

                // Swap places
                parent.insertBefore(draggedItem, targetItem);
                parent.insertBefore(targetItem, nextSibling);
            }

            draggedItem.classList.remove("selected");
            draggedItem = null;
        });

        image.addEventListener("dragend", () => {
            if (draggedItem) {
                draggedItem.classList.remove("selected");
            }
        });
    });
});
