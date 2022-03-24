function tabs() {
    // БЛОК - ПЕРЕМЕННЫЕ =========================================
    const tabs = document.querySelectorAll('.design-list__item'),
        tabsContent = document.querySelectorAll('.design__descr'),
        tabsImages = document.querySelectorAll('.design-images'),
        tabsCoverImage = document.querySelectorAll('.feature__img'),
        tabsTitle = document.querySelectorAll('.section__title');


    // БЛОК - ФУНКЦИИ ===========================================
    function hideTabs(tabName) {
        // Скрываем все табы
        tabName.forEach(tab => {
            if (tab.classList.contains("hidden")) {} else {
                tab.classList.add("hidden");
            }
        });
    }

    function showTabs(tabName, dataValue) {
        // Скрываем все табы
        hideTabs(tabName);

        // Открываем таб по индексу
        tabName.forEach(tab => {
            if (tab.dataset.tabsField === dataValue) {
                tab.classList.remove("hidden");
            }
        });
    }

    function changeDOMTitle(dataValue) {
        tabsTitle.forEach(tab => {
            if (tab.dataset.tabsField === dataValue) {
                document.title = tab.textContent;
            }
        });
    }

    // БЛОК - ОБРАБОТЧИК ==========================================

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            const dataValue = tab.dataset.tabsHandler;

            tabs.forEach(tab => {
                if (tab === e.target) {
                    tab.classList.add("design-list__item_active");
                } else {
                    tab.classList.remove("design-list__item_active");
                }
            });

            showTabs(tabsContent, dataValue);
            showTabs(tabsImages, dataValue);
            showTabs(tabsCoverImage, dataValue);
            showTabs(tabsTitle, dataValue);

            changeDOMTitle(dataValue);

        });
    });


}

tabs();