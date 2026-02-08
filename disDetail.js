// Image switching
function changeImage(element) {
    const mainImage = document.getElementById('mainImage');
    mainImage.src = element.src.replace('w=200', 'w=800');
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnails img').forEach(img => {
        img.style.border = '2px solid transparent';
    });
    element.style.border = '2px solid #0077ff';
}

// Show notification
function showNotification(message, type = 'success') {
    const notif = document.createElement('div');
    notif.className = `deal-notification ${type}`;
    notif.textContent = message;

    // Append to body
    document.body.appendChild(notif);

    // Force reflow so transition works
    void notif.offsetWidth;

    // Add show class
    notif.classList.add('show');

    // Hide after 3 seconds
    setTimeout(() => {
        notif.classList.remove('show');
        setTimeout(() => notif.remove(), 400);
    }, 3000);
}

// Button click handlers
document.addEventListener('DOMContentLoaded', () => {
    const getDealBtn = document.getElementById('getDealBtn');
    const saveDealBtn = document.getElementById('saveDealBtn');

    if (getDealBtn) {
        getDealBtn.addEventListener('click', () => {
            showNotification(' Deal activated! Redirecting...', 'success');
            setTimeout(() => {
                window.location.href = 'https://www.sony.co.uk';
            }, 2000);
        });
    }

    if (saveDealBtn) {
        saveDealBtn.addEventListener('click', () => {
            showNotification(' Deal saved successfully!', 'success');
        });
    }
});

// Countdown Timer (fixed duration)
function startCountdown() {
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    // Total countdown in seconds: 2 days, 12 hours, 45 minutes, 30 seconds
    let totalSeconds = 
        2 * 24 * 60 * 60 + // 2 days
        12 * 60 * 60 +     // 12 hours
        45 * 60 +          // 45 minutes
        30;                // 30 seconds

    function updateTimer() {
        if (totalSeconds <= 0) {
            daysEl.textContent = '00';
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }

        const days = Math.floor(totalSeconds / (24 * 60 * 60));
        const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');

        totalSeconds--;
    }

    updateTimer();
    setInterval(updateTimer, 1000);
}

document.addEventListener('DOMContentLoaded', startCountdown);



