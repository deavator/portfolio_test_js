function modal() {
    // БЛОК - ПЕРЕМЕННЫЕ =========================================
    const modalWindow = document.querySelector(".modal"),
        overlay = modalWindow.querySelector(".overlay"),
        modalOpenBtns = document.querySelectorAll(".more"),
        modalCloseBtn = modalWindow.querySelector(".modal__close");


    // БЛОК - ФУНКЦИИ ===========================================

    // БЛОК - ОБРАБОТЧИК ==========================================
    // Открытие модального окна
    modalOpenBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            modalWindow.classList.remove("hidden");
        });
    });

    // Закрытие модального окна
    modalCloseBtn.addEventListener('click', () => {
        modalWindow.classList.add("hidden");
    });

    overlay.addEventListener('click', () => {
        modalWindow.classList.add("hidden");
    });
}

modal();