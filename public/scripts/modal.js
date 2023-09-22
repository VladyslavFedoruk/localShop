const buyButton = document.querySelector('.buy-button');
const modal = document.getElementById("modal");
const body = document.body;

buyButton.addEventListener("click", () => {
    modal.style.display = "block";
    body.classList.add('active');
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        body.classList.remove('active');
    }
});