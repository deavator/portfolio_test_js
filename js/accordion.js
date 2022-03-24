function accordion() {
    // БЛОК - ПЕРЕМЕННЫЕ =========================================
    const features = document.querySelectorAll(".feature__link");


    // БЛОК - ФУНКЦИИ ===========================================
    function closeItems() {
        features.forEach(item => {

            item.classList.remove('feature__link_active');
            item.nextElementSibling.classList.add('hidden');
        });
    }


    // БЛОК - ОБРАБОТЧИК ==========================================
    features.forEach(item => {
        item.addEventListener('click', (e) => {
            // Предварительно закрываем все открытые items
            if (!(item.classList.contains("feature__link_active"))) {
                closeItems();
            }
            // Открываем кликнутый item
            item.classList.toggle('feature__link_active');
            item.nextElementSibling.classList.toggle('hidden');

            console.log(e.target.closest(".feature__link"));
        });
    });


}

accordion();