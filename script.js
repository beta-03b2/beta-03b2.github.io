const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  menu.classList.toggle('open');
});

// ナビゲーション開閉
const toggle = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  menu.classList.toggle('open');
});

// タイピング効果（JS版）
document.addEventListener("DOMContentLoaded", () => {
  const target = document.querySelector(".typing");
  if (target) {
    const text = target.textContent;
    target.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      target.textContent += text[i];
      i++;
      if (i === text.length) clearInterval(interval);
    }, 100); // 100msごとに1文字
  }
});
