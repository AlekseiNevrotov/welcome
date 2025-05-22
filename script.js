const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);
const letters = '0123456789ABCDEF'.split('');
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);
function draw() {
  ctx.fillStyle = 'rgba(18, 18, 18, 0.24)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#2300bd';
  ctx.font = fontSize + 'px monospace';
  for(let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);
    if(drops[i] * fontSize > canvas.height && Math.random() > 0.976) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 36);