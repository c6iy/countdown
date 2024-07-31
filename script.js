const countdown = () => {
    // Get current time in Egypt time zone
    const now = new Date().toLocaleString("en-US", { timeZone: "Africa/Cairo" });
    const currentDate = new Date(now);

    // Set target date to today's 6 PM Egypt time
    const targetDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 18, 0, 0);

    // If current time is past 6 PM, set target to tomorrow's 6 PM
    if (currentDate > targetDate) {
        targetDate.setDate(targetDate.getDate() + 1);
    }

    const gap = targetDate - currentDate;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(gap / day);
    const hours = Math.floor((gap % day) / hour);
    const minutes = Math.floor((gap % hour) / minute);
    const seconds = Math.floor((gap % minute) / second);

    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
};

setInterval(countdown, 1000);
