// Play win sound after 3 seconds
const winSound = document.querySelector('#win-sound');
setTimeout(() => {
  winSound.play();
}, spinTime);

// Update UI after 3.5 seconds
setTimeout(() => {
  spinning = false;
  spinBtn.disabled = false;
  alert(`You got ${labels[stopIndex].textContent}!`);
}, spinTime + 500);

