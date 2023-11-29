function removeTransition(e) {
  console.log('Transition ended:', e.propertyName);
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const items = Array.from(document.querySelectorAll('.item'));
items.forEach((item) => item.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
