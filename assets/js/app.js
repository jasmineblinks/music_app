// // const burger = () => {
// //     var q = document.getElementsByid("#head");
// //     if (q.style.display === "block") {
// //       q.style.display = "none";
// //     } else {
// //       q.style.display = "block";
// //     }
// //   }

// //   let link = document.querySelector('.icon')
// //   link.addEventListener('click', function(event) {
// //     event.preventDefault(); burger()
// //   });


// window.onload = function Init() {
//     /**@type {HTMLAudioElement} */
//     let music = document.querySelector('#music')
//     /**@type {NodeListOf<HTMLButtonElement>} */
//     let controls = document.querySelectorAll('.play-btn')
//     controls.forEach(btn => btn.addEventListener('click', () => MusicControllers(btn)))

// }
// /**
//  * 
//  * @param {HTMLButtonElement} btn 
//  */
// async function MusicControllers(btn) {
//     /**@type {HTMLAudioElement} */
//     let music = document.querySelector('#music')

//     switch (btn.dataset.type) {
//         case 'play':
//             await music.play()
//             break;
//         case 'pause':
//             music.pause()
//             break;
//         case 'stop':
//             music.pause()
//             music.src = music.src
//             break;

//         default:
//             break;
//     }
// }
let button = document.getElementById('btn-play-pause');
let audio = document.getElementById('music');
button.addEventListener("click", function () {
    if (audio.paused) {
        audio.play();
        // button.classList.add("playing");
        button.innerHTML="pause";
    }
    else {
        audio.pause();
        // button.classList.remove('playing');
        button.innerHTML="play";
    }
});
var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#912c62',
    progressColor: '#eb7e68',
    scrollParent: true
    
});
wavesurfer.load('./music/Glimmer In the Dust.mp3');
