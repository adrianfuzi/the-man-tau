// IFrame

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

if ( $(window).width() >= 1158) {
  function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
      height: '360',
      width: '640',
      playerVars: { 'autoplay': 1, 'controls': 0,'disablekb':1,'enablejsapi':1, 'modestbranding':1, 'rel': 0, 'mute': 1},
      videoId: 'D-1Sp3z3Kqw'
    });
  }
}

// Mute-Unmute Button

const soundOff = document.querySelector('.nav__list--sound-off');
const soundOn = document.querySelector('.nav__list--sound-on');

function musicOn() {
    soundOff.style.display = 'none';
    soundOn.style.display = 'block';
    player.unMute();
}

function musicOff() {
    soundOff.style.display = 'block';
    soundOn.style.display = 'none';
    player.mute();
}

soundOff.addEventListener('click', musicOn);
soundOn.addEventListener('click', musicOff);