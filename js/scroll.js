function scroll() {
    // 

    // БЛОК - ПЕРЕМЕННЫЕ =========================================
    const menuLinks = document.querySelectorAll(".menu-list__link"),
        mainSection = document.getElementById("main"),
        mainBtn = document.querySelector('.main__button'),
        mainScroll = document.querySelector('.main__scroll'),
        gotoTop = document.querySelector(".goto-top");


    // Собираем все ссылки в спред-массив
    const allLinks = [...menuLinks, gotoTop, mainBtn, mainScroll];

    // БЛОК - ФУНКЦИИ ===========================================

    // БЛОК - ОБРАБОТЧИК ==========================================
    allLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();

            // Получаем имя идентификатора ссылки 
            // и отрезаем первый символ (#)
            const id = link.getAttribute('href').substring(1);
            const section = document.getElementById(id);

            if (section) {
                // Без поддержки MacOS и iOS (offline)
                section.scrollIntoView({
                    block: 'start',
                    behavior: 'smooth'
                });

                // C поддержкой MacOS и iOS (online)
                // seamless.scrollIntoView(section, {
                //     behavior: "smooth",
                //     block: "center",
                //     inline: "center"
                // });
            }
        });

        // Отображение кнопки "на верх" при скролле
        document.addEventListener('scroll', () => {

            if (Math.round(window.scrollY) > window.innerHeight) {
                gotoTop.classList.remove("hidden");
            } else {
                gotoTop.classList.add("hidden");
            }
        });
    });
}
scroll();