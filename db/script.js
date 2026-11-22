/* =====================================================
   EDIT THIS PART: names, music, messages and photos
   ===================================================== */

const CONFIG = {
  crushName: "Deepanshu",
  myName: "Gunna..",
  musicUrl: "",
  dmLink: "https://www.instagram.com/justt.garima__/"
};

// CHANGE: the love letter
const LOVE_LETTER = [
  "Dear {name},",
  "Okay, so there's something I've been wanting to tell you… and I hope you read this with a smile. 🤭❤️",
  "Pata nahi kab tum itne special ban gaye, but ab tumhari notification dekh ke jo smile aati hai na, uska koi explanation nahi hai. ❤️",
  "I love teasing you, flirting with you and finding silly reasons to talk to you. And honestly, tumhari smile aur voice… uff, dangerously attractive. 😏",
  "But you know what I want? Thodi si care, thoda attention, kabhi khud se mujhe miss karna, aur mujhpe thoda haq jatana. I want to feel special without having to ask for it. 🥺",
  "I want your random texts, tight hugs, little jealousy and those moments when you just pull me closer. 🤭💋",
  "So tell me, Deepanshu… will you be my favourite person and let me be yours? ❤️"
];


// CHANGE: the 8 "Open When" cards (icon, title, message)
const OPEN_WHEN = [
  {
    icon: "🌙",
    title: "Open when you miss me",
    text: "So… you miss me? 👀\n\nAww, that's cute. But kya karu, I'm not always available to disturb you na. 😂\n\nI wish I could just appear in front of you for a minute, smile at you, annoy you a little and then disappear again. 🤭\n\nBut till then, apna khayal rakhna, okay?\n\nAnd haan, don't just sit there missing me… come and text me. I'm just one message away. ❤️\n\nMaybe I'm not with you right now, but you do have a little place in my thoughts. ♡"
  },
  {
    icon: "🌧️",
    title: "Open when you feel low",
    text: "Hey handsome! 😏❤️\n\nWhy so low, huh? Itna serious face lekar kya milega? I think you need a little distraction… and maybe a little attention from me. 🤭\n\nAgar main abhi tumhare saamne hoti na, toh pehle tumhe smile karwati, phir thoda tease karti and definitely tumhe itna easily sad nahi rehne deti. 😉\n\nSo stop overthinking, baby. You're way too handsome to be walking around with that sad face.\n\nAnd remember, whenever life gets boring or you're feeling low, you know exactly whose attention you can steal. 😌❤️\n\nNow smile for me… that's an order! 😘"
  },
  {
    icon: "🧸",
    title: "Open when you need a hug",
    text: "Aww baby, come closer. 🤭❤️\n\nI wish I could pull you into my arms, hug you tight and give you a few kisses… maybe steal one on your lips too. 😘\n\nNo talking, just you, me and a little extra closeness.\n\nAb batao, would you let me go that easily? 😉💋"
  },
  {
    icon: "✨",
    title: "Open when you can't sleep",
    text: "Still awake, handsome? 😏\n\nKaash abhi tumhare paas hoti… thodi cuddling, some forehead kisses and maybe a little late-night flirting. 🤭💋\n\nStop scrolling and close your eyes… imagine me whispering goodnight right next to you.\n\nSweet dreams, baby. Wish I was your pillow tonight. 😉❤️"
  },
  {
    icon: "🌷",
    title: "Open after we fight",
    text: "Okay, maybe we're both a little stubborn. 😂\n\nBut honestly, I don't like being distant from you. I might argue with you, tease you and act all angry… but deep down, I just want you close.\n\nSo come here, hold my hand, pull me closer and give me one kiss. Let's fix this, baby. 🤭💋\n\nEgo later, kisses first. Deal? 😏❤️"
  },
  {
    icon: "😊",
    title: "Open when you need a smile",
    text: "Hey sexy! 😏❤️\n\nWhy so serious? Itna handsome face hai, thoda smile toh banta hai. 🤭\n\nI wish I could be there to annoy you, steal your hoodie and give you random kisses just to see you smile.\n\nNow smile, baby… or I'll have to come there and do it myself. 😘💋"
  },
  {
    icon: "💎",
    title: "Open when you doubt how special you are",
    text: "Excuse me, who gave you permission to underestimate yourself? 😏❤️\n\nYou're my favourite kind of handsome, my favourite distraction and someone I never get bored of.\n\nSo stop doubting yourself, baby. You're pretty special to me… more than you know. 🤭💋\n\nAnd honestly, I'd choose your attention over anyone else's. 😉"
  },
  {
    icon: "💗",
    title: "Open whenever you want to feel loved",
    text: "Hey handsome! 😏❤️\n\nI hope you know how much I adore you. Kabhi kabhi bas tumhe dekhne, tumhare paas baithne aur randomly kiss karne ka mann karta hai. 🤭\n\nI may not say it every time, but you have a special effect on me. One text from you and suddenly I'm smiling like an idiot. 😂\n\nYou're not just someone I like… you're someone I want a little extra time, attention and affection from. Come collect your kisses. 😘💋"
  }
];

// CHANGE: the final line
const FINAL_MESSAGE = "No matter what your answer is, I'm really glad you exist in my little world.";

/* =====================================================
   CODE BELOW: you don't need to change anything
   ===================================================== */
const $ = (id) => document.getElementById(id);
const fill = (s) => s.replaceAll("{name}", CONFIG.crushName);

/* ---------- Teddy bears (cloned from the template) ---------- */
document.querySelectorAll("[data-teddy]").forEach((slot) => {
  const teddy = $("teddyTpl").content.firstElementChild.cloneNode(true);
  if (slot.dataset.teddy === "hold") teddy.classList.add("hold");
  slot.appendChild(teddy);
});

/* ---------- Floating hearts and sparkles ---------- */
const SYMBOLS = ["♡", "♥", "✦", "✧", "💗", "⭐"];
function floatOne() {
  const el = document.createElement("span");
  el.className = "floater";
  el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
  el.style.left = Math.random() * 100 + "%";
  el.style.fontSize = 12 + Math.random() * 24 + "px";
  const dur = 7 + Math.random() * 8;
  el.style.animationDuration = dur + "s";
  $("floaters").appendChild(el);
  setTimeout(() => el.remove(), dur * 1000);
}
setInterval(floatOne, 700);
for (let i = 0; i < 8; i++) setTimeout(floatOne, i * 150);

/* ---------- Heart confetti ---------- */
function confetti(count = 60) {
  const colors = ["#ff5d8f", "#ff8fb0", "#ffc2d4", "#e0457b", "#ffd6e3"];
  for (let i = 0; i < count; i++) {
    const el = document.createElement("span");
    el.className = "confetti";
    el.textContent = Math.random() > 0.3 ? "♥" : "✦";
    el.style.left = Math.random() * 100 + "vw";
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    el.style.fontSize = 14 + Math.random() * 22 + "px";
    const dur = 2.5 + Math.random() * 3;
    el.style.animationDuration = dur + "s";
    el.style.animationDelay = Math.random() * 0.8 + "s";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), (dur + 1) * 1000);
  }
}

/* ---------- Music (mute / unmute) ---------- */
let audioEl = null, audioCtx = null, melodyTimer = null, musicOn = false, step = 0;
const CHORDS = [[261.6, 329.6, 392], [220, 261.6, 329.6], [174.6, 220, 261.6], [196, 246.9, 293.7]];
const PATTERN = [0, 1, 2, 1, 2, 1];

function playNote(freq) {
  const t = audioCtx.currentTime, osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.07, t + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 1.6);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + 1.7);
}
function melodyTick() {
  const chord = CHORDS[Math.floor(step / 6) % CHORDS.length];
  playNote(chord[PATTERN[step % 6]] * (step % 6 > 2 ? 2 : 1));
  if (step % 6 === 0) playNote(chord[0] / 2);
  step++;
}
function startMusic() {
  try {
    if (CONFIG.musicUrl) {
      if (!audioEl) { audioEl = new Audio(CONFIG.musicUrl); audioEl.loop = true; audioEl.volume = 0.5; }
      audioEl.play().catch(() => {});
    } else {
      audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
      audioCtx.resume();
      clearInterval(melodyTimer);
      melodyTimer = setInterval(melodyTick, 550);
    }
    musicOn = true;
    $("musicBtn").textContent = "🎵";
  } catch (e) { /* audio not supported: ignore */ }
}
function stopMusic() {
  if (audioEl) audioEl.pause();
  clearInterval(melodyTimer);
  musicOn = false;
  $("musicBtn").textContent = "🔇";
}
$("musicBtn").addEventListener("click", () => (musicOn ? stopMusic() : startMusic()));

/* ---------- 1. Welcome -> main site ---------- */
$("enterBtn").addEventListener("click", () => {
  startMusic();                                  // browsers only allow sound after a click
  $("welcome").classList.add("leave");
  $("main").classList.remove("hidden");
  document.body.classList.remove("locked");
  window.scrollTo(0, 0);
  setTimeout(() => $("welcome").classList.add("hidden"), 1000);
  confetti(25);
});

/* ---------- 2. Teddy hug ---------- */
$("hugBtn").addEventListener("click", () => {
  const teddy = $("mainTeddy").firstElementChild;
  teddy.classList.remove("hug");
  void teddy.offsetWidth;                        // restart the animation
  teddy.classList.add("hug");
  $("hugMsg").textContent = "Sending you the biggest virtual hug! 🧸💗";
  confetti(18);
  setTimeout(() => teddy.classList.remove("hug"), 2200);
});

/* ---------- 3. Envelope + letter ---------- */
$("letterBody").innerHTML = LOVE_LETTER.map((line, i) => {
  const cls = i === LOVE_LETTER.length - 1 ? ' class="last"' : "";
  return `<p${cls}>${fill(line)}</p>`;
}).join("") + `<p class="sign">Yours, ${CONFIG.myName} ♡</p>`;

function openEnvelope() {
  const env = $("envelope");
  if (env.classList.contains("open")) return;
  env.classList.add("open");
  $("envHint").textContent = "";
  setTimeout(() => {
    $("loveLetter").classList.remove("hidden");
    $("loveLetter").scrollIntoView({ behavior: "smooth", block: "center" });
  }, 1400);
  setTimeout(() => $("response").classList.remove("hidden"), 2200);
}
$("envelope").addEventListener("click", openEnvelope);
$("envelope").addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openEnvelope(); } });

/* ---------- 4. Response ---------- */
function showAnswer(text) {
  const box = $("answerMsg");
  box.textContent = text;
  box.classList.remove("pop");
  void box.offsetWidth;
  box.classList.add("pop");
}
$("yesBtn").addEventListener("click", () => {
  showAnswer("You just made my heart the happiest lovieeeeeee! 💗");
  $("noWrap").classList.add("hidden");
  $("dmNote").classList.remove("hidden");
  if (CONFIG.dmLink) $("dmBtn").href = CONFIG.dmLink; else $("dmBtn").classList.add("hidden");
  confetti(120);
  for (let i = 0; i < 15; i++) setTimeout(floatOne, i * 100);
});

/* The "No" button runs away whenever he tries to touch it (mouse, finger or keyboard) */
const noBtn = $("noBtn");
const NO_LINES = ["No 😢", "Nope 🙈", "Too slow 😏", "Nice try 💗", "Can't catch me 😜", "Just say yes 😘"];
let dodges = 0, noFloating = false;
function dodge(e) {
  if (e) e.preventDefault();
  if (!noFloating) {                              // first time: keep its spot in the layout, then float
    const r = noBtn.getBoundingClientRect();
    $("noWrap").style.width = r.width + "px";
    $("noWrap").style.height = r.height + "px";
    noBtn.style.position = "fixed";
    noBtn.style.left = r.left + "px";
    noBtn.style.top = r.top + "px";
    noBtn.style.zIndex = 40;
    noFloating = true;
    void noBtn.offsetWidth;
  }
  const pad = 12, w = noBtn.offsetWidth, h = noBtn.offsetHeight;
  const yes = $("yesBtn").getBoundingClientRect();
  let x, y, tries = 0, bad;
  do {                                            // pick a new spot that isn't on top of YES
    x = pad + Math.random() * Math.max(1, innerWidth - w - pad * 2);
    y = pad + Math.random() * Math.max(1, innerHeight - h - pad * 2);
    bad = x < yes.right + 10 && x + w > yes.left - 10 && y < yes.bottom + 10 && y + h > yes.top - 10;
  } while (bad && ++tries < 25);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
  noBtn.textContent = NO_LINES[++dodges % NO_LINES.length];
}
["pointerenter", "pointerdown", "touchstart", "mousedown", "click"].forEach((ev) =>
  noBtn.addEventListener(ev, dodge, { passive: false }));
window.addEventListener("resize", () => { if (noFloating) dodge(); });

/* ---------- 5. Open When cards + modal ---------- */
$("cardGrid").innerHTML = OPEN_WHEN.map((c, i) =>
  `<button class="open-card reveal" data-i="${i}"><span class="ico">${c.icon}</span><span class="txt">${c.title}</span></button>`
).join("");

let lastFocus = null;
function openModal(i) {
  const c = OPEN_WHEN[i];
  lastFocus = document.activeElement;
  $("modalIcon").textContent = c.icon;
  $("modalTitle").textContent = c.title;
  $("modalText").textContent = fill(c.text);
  $("modal").classList.add("show");
  $("modal").setAttribute("aria-hidden", "false");
  $("modalClose").focus();
}
function closeModal() {
  $("modal").classList.remove("show");
  $("modal").setAttribute("aria-hidden", "true");
  if (lastFocus) lastFocus.focus();
}
$("cardGrid").addEventListener("click", (e) => {
  const card = e.target.closest(".open-card");
  if (card) openModal(Number(card.dataset.i));
});
$("modalClose").addEventListener("click", closeModal);
$("modal").addEventListener("click", (e) => { if (e.target === $("modal")) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* ---------- 7. Final surprise ---------- */
$("finalText").textContent = FINAL_MESSAGE + " 💗";
$("moreHearts").addEventListener("click", () => {
  confetti(80);
  for (let i = 0; i < 20; i++) setTimeout(floatOne, i * 90);
});

/* ---------- Gentle reveal when scrolling ---------- */
document.querySelectorAll(".section > *:not(.hidden)").forEach((el) => el.classList.add("reveal"));
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    if (entry.target.id === "finalTeddy") {      // final animation, once
      confetti(50);
      for (let i = 0; i < 12; i++) setTimeout(floatOne, i * 120);
    }
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ---------- Golden sparkle trail behind the cursor (desktop) ---------- */
let lastTrail = 0;
document.addEventListener("pointermove", (e) => {
  if (e.pointerType === "touch" || Date.now() - lastTrail < 60) return;
  lastTrail = Date.now();
  const s = document.createElement("span");
  s.className = "trail";
  s.textContent = "✦";
  s.style.left = e.clientX + "px";
  s.style.top = e.clientY + "px";
  document.body.appendChild(s);
  setTimeout(() => s.remove(), 900);
});