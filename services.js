const modal = document.getElementById("modalForm");
const buttons = document.querySelectorAll(".order-btn");
const span = document.getElementsByClassName("close")[0];
const modalText = document.getElementById("modalText");

// Открываем модальное окно с определёнными данными
buttons.forEach(button => {
    button.onclick = function() {
        modalText.innerText = button.getAttribute("data-param");
        modal.style.display = "block";
    }
});

// Закрываем модальное окно при клике на крестик
span.onclick = function() {
    modal.style.display = "none";
}

// Закрываем модальное окно при клике вне области контента
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}