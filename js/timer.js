function timer() {
    // БЛОК - ПЕРЕМЕННЫЕ =========================================
    const timer = document.querySelector('.timer__time');


    // БЛОК - ФУНКЦИИ ===========================================
    function updateTimer() {
        const date = new Date(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();

        const fHours = hours < 10 ? `0${hours}` : hours;
        const fMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const fSeconds = seconds < 10 ? `0${seconds}` : seconds;

        timer.textContent = `${fHours}:${fMinutes}:${fSeconds}`;
    }

    function updateCountDown() {
        const deadline = '24 march 2022';

        const now = new Date().getTime(),
            timeDeadline = new Date(deadline).getTime(),
            timeRemain = (timeDeadline - now) / 1000;

        const days = Math.floor(timeRemain / 24 / 3600),
            hours = Math.floor((timeRemain / 3600) % 24),
            minutes = Math.floor((timeRemain / 60) % 60),
            seconds = Math.floor(timeRemain % 60);

        const fHours = hours < 10 ? `0${hours}` : hours,
            fMinutes = minutes < 10 ? `0${minutes}` : minutes,
            fSeconds = seconds < 10 ? `0${seconds}` : seconds;

        if (timeRemain <= 0) {
            clearInterval(interval);
            timer.textContent = `0 дней 00:00:00`;
        } else {
            timer.textContent = `${days} дней ${fHours}:${fMinutes}:${fSeconds}`;
        }
    }

    // БЛОК - ОБРАБОТЧИК ==========================================

    // Отобразить часы
    setInterval(updateTimer, 500);

    // Отобразить счетчик обратного отсчета
    // let interval = setInterval(updateCountDown, 500);


}

timer();