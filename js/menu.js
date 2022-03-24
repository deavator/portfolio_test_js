function menu() {
    // БЛОК - ПЕРЕМЕННЫЕ =========================================
    const burgerBtn = document.querySelector(".humburger-menu"),
        burgerMenu = document.querySelector(".menu"),
        menuOverlay = document.querySelector(".main"),
        menuLinks = document.querySelectorAll(".menu-list__item");



    // БЛОК - ФУНКЦИИ ===========================================

    // БЛОК - ОБРАБОТЧИК ==========================================
    // Управление меню бургера
    burgerBtn.addEventListener('click', () => {
        burgerMenu.classList.toggle("menu-active");
    });

    // menuOverlay.addEventListener('click', () => {
    //     burgerMenu.classList.remove("menu-active");
    // });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove("menu-active");
        });
    });

    document.addEventListener('click', (e) => {
        if (!(e.target.closest(".menu") || e.target.closest(".humburger-menu"))) {
            burgerMenu.classList.remove("menu-active");
        }
    });



}

menu();