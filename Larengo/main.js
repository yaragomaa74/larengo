window.addEventListener('load', () => {
    const introMusic = document.getElementById('introMusic');
    const welcomeVoice = document.getElementById('welcomeVoice');
    const startDayBtn = document.getElementById('startDayBtn');

    startDayBtn.addEventListener('click', () => {
        introMusic.play();
        setTimeout(() => {
            welcomeVoice.play();
        }, 1500);
    });
});