const modal = document.getElementById("myModal");

function openModal() {
    modal.classList.remove("hidden");
    modal.classList.add("flex");
}

function closeModal() {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
}

window.addEventListener("click", function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

