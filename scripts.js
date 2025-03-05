document.addEventListener("click", function() {
        var audio = document.getElementById("bg-music");
        if (audio.muted) {
            audio.muted = false;
            audio.play();
        }
    }, { once: true });

    const slider = document.getElementById('speedSlider');
    const speedValue = document.getElementById('speedValue');
    const pyramid = document.querySelector('.pyramid');
    const changeTile1Button = document.getElementById('changeTile1');
    const changeTile2Button = document.getElementById('changeTile2'); 
    const changeTile3Button = document.getElementById('changeTile3');
    const fullscreenButton = document.getElementById('fullscreenButton');
    slider.addEventListener('input', () => {
        const speed = slider.value;
        speedValue.textContent = speed;
        document.querySelector('.pyramid-container').style.animationDuration = `${3 / speed}s`;
    });
    pyramid.style.animationDuration = `${3 / 2}s`;
    changeTile1Button.addEventListener('click', () => { document.querySelector('.front').style.backgroundImage = "url('tile001.png')"; }); 
    changeTile2Button.addEventListener('click', () => { document.querySelector('.front').style.backgroundImage = "url('tile002.png')"; }); 
    changeTile3Button.addEventListener('click', () => { document.querySelector('.front').style.backgroundImage = "url('tile003.png')"; });
    

fullscreenButton.addEventListener('click', () => {
    if (document.requestFullscreen) {
        document.requestFullscreen();
    } else if (document.mozRequestFullScreen) { // Firefox
        document.mozRequestFullScreen();
    } else if (document.webkitRequestFullscreen) { // Chrome, Safari and Opera
        document.webkitRequestFullscreen();
    } else if (document.msRequestFullscreen) { // IE/Edge
        document.msRequestFullscreen();
    }
});






function onFullscreenChange() {
    if (document.fullscreenElement) {
        document.body.style.overflow = 'hidden';
        document.querySelectorAll('body > *:not(.pyramid-container)').forEach(el => {
            el.style.visibility = 'hidden';
        });
    } else {
        document.body.style.overflow = '';
        document.querySelectorAll('body > *').forEach(el => {
            el.style.visibility = 'visible';
        });
    }
}


document.addEventListener('fullscreenchange', onFullscreenChange);

document.addEventListener('webkitfullscreenchange', onFullscreenChange); // Safari

document.addEventListener('mozfullscreenchange', onFullscreenChange); // Firefox

document.addEventListener('MSFullscreenChange', onFullscreenChange); // IE/Edge

