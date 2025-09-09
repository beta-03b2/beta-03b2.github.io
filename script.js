document.addEventListener("DOMContentLoaded", () => {
  // 汎用タイピング関数
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

  // ホームタイトル
  const t1 = document.getElementById("title-typing");
  if (t1) typeText(t1, ["ホーム"]);

  // プロフィールタイトル
  const t2 = document.getElementById("profile-typing");
  if (t2) typeText(t2, ["プロフィール"]);

  // プロフィールの各行を順番にタイプ
  const profileLines = [
    {id: "profile-line1", text: "Name: beta03b2"},
    {id: "profile-line2", text: "Age: 14"},
    {id: "profile-line3", text: "Skills: MINECRAFT Bedrock edition commands"},
    {id: "profile-line4", text: "About: プロセカ、マイクラを主にやってます"}
  ];

  let idx = 0;
  function typeProfile() {
    if (idx >= profileLines.length) return;
    const el = document.getElementById(profileLines[idx].id);
    if (el) {
      let ci = 0;
      const str = profileLines[idx].text;
      function step() {
        if (ci <= str.length) {
          el.textContent = str.slice(0, ci);
          ci++;
          setTimeout(step, 50);
        } else {
          idx++;
          setTimeout(typeProfile, 500);
        }
      }
      step();
    }
  }
  if (document.getElementById("profile-line1")) {
    typeProfile();
  }

  // ハンバーガーメニュー
  const btn = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
