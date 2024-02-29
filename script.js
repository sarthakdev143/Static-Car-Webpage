// Locomotive JS ft. Smooth Scroll

const scroll = new LocomotiveScroll({
    el: document.querySelector('.content'),
    smooth: true
});

// Start Engine

function playAudio() {
    var audio = document.getElementById("myAudio");
    audio.play();
}


