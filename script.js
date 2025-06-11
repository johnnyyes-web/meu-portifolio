// Código Matrix - efeito de "código caindo" no canvas do hero
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');
// Ajusta o tamanho do canvas para cobrir a seção hero
canvas.width = document.getElementById('hero').clientWidth;
canvas.height = document.getElementById('hero').clientHeight;

// Caracteres para o efeito Matrix (katakana japonês e alguns símbolos)
const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
const letters = matrixChars.split('');

// Define tamanho da fonte e colunas
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
// Array de drops, representando a posição vertical de cada coluna de caracteres
const drops = Array(columns).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.font = fontSize + 'px monospace';

// Função de animação do efeito Matrix
function drawMatrix() {
  // Fundo transparente preto para dar efeito de trilha (fade)
  ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#0F0'; // texto verde neon estilo Matrix
  for (let i = 0; i < columns; i++) {
    const index = Math.floor(Math.random() * letters.length);
    const text = letters[index];
    const x = i * fontSize;
    const y = drops[i] * fontSize;
    ctx.fillText(text, x, y);
    // Reinicia a posição da coluna ao chegar ao fim da tela de forma aleatória
    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}

// Atualiza o efeito a cada 33ms (~30fps)
setInterval(drawMatrix, 33);

// Event Listener para redimensionamento da tela (opcional: reajusta canvas)
window.addEventListener('resize', () => {
  canvas.width = document.getElementById('hero').clientWidth;
  canvas.height = document.getElementById('hero').clientHeight;
  ctx.font = fontSize + 'px monospace';
});

// Função Lightbox para ampliar imagens dos projetos
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.projects-grid img').forEach(img => {
  img.addEventListener('click', () => {
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});
// Fecha o lightbox ao clicar em qualquer lugar fora da imagem
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
