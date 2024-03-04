const audioArray = ["meow1.mp3", "meow2.mp3", "meowq3.mp3", "meow4.mp3", "meow5.mp3", "meow6.mp3"];

function meow() {
  const audioIndex = Math.floor(Math.random() * audioArray.length);
  const audio = new Audio(audioArray[audioIndex]);
  audio.play();
  setTimeout(move, 900);
}
function meow2() {
    const audioIndex = Math.floor(Math.random() * audioArray.length);
    const audio = new Audio(audioArray[audioIndex]);
    audio.play();
  }
function move() {
    location.href = 'strayinfo.html';
}
