document.addEventListener("DOMContentLoaded", () => {
  function typeText(el, texts, delay=80, pause=600) {
    let ti = 0, ci = 0;
    function step() {
      if (ti >= texts.length) return;
      let str = texts[ti];
      if (ci <= str.length) {
        el.textContent = str.slice(0, ci);
        ci++;
        setTimeout(step, delay);
      } else {
        ti++;
        ci = 0;
        setTimeout(step, pause);
      }
    }
    step();
  }

  const t1 = document.getElementById("title-typing");
  if (t1) typeText(t1, ["ホーム | プロフィール"]);

  const t2 = document.getElementById("profile-typing");
  if (t2) typeText(t2, ["プロフィール"]);

  const btn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
  }
});
