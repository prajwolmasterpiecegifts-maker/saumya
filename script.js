function checkPin() {
    const userPin = document.getElementById('pin-input').value;
    const correctPin = "rohit"; 

    const pinScreen = document.getElementById('pin-screen');
    const content = document.getElementById('content');
    const errorMsg = document.getElementById('error-msg');
    const audio = document.getElementById('bg-audio');

    if (userPin === correctPin) {
        // Transition
        pinScreen.style.display = 'none';
        content.style.display = 'block';
        
        // Music logic
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => console.log("User interaction required for audio."));
            document.getElementById('music-icon').innerText = "⏸️";
            document.getElementById('music-text').innerText = "Pause";
        }
        
        // Date Stamp
        document.getElementById('current-date').innerText = new Date().toLocaleDateString('en-US', {
            month: 'long', day: 'numeric', year: 'numeric'
        });

        window.scrollTo(0, 0);
    } else {
        errorMsg.style.display = 'block';
        document.getElementById('pin-input').value = ""; 
        const card = document.querySelector('.auth-card');
        card.style.animation = 'none';
        card.offsetHeight; // trigger reflow
        card.style.animation = 'shake 0.4s ease';
    }
}

function toggleMusic() {
    const audio = document.getElementById('bg-audio');
    const musicIcon = document.getElementById('music-icon');
    const musicText = document.getElementById('music-text');

    if (audio.paused) {
        audio.play();
        musicIcon.innerText = "⏸️";
        musicText.innerText = "Pause";
    } else {
        audio.pause();
        musicIcon.innerText = "🎵";
        musicText.innerText = "Play Theme";
    }
}