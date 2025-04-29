function toggleMenu() {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('show');
}

function startIntro() {
  const launch = document.getElementById("launch-screen");
  const overlay = document.getElementById("intro-overlay");
  launch.classList.add("fade-out");

  setTimeout(() => {
    launch.style.display = "none";
    overlay.style.display = "flex";
    runTypingIntro();
  }, 1200);
}

const lines = [
  "Initializing ATB4K.exe...",
  "Loading anime protocol layers...",
  "Activating vision UI shaders...",
  "Welcome to the ATB4K Verse."
];

let i = 0;
function runTypingIntro() {
  const textBox = document.getElementById("typing-text");
  if (i < lines.length) {
    textBox.innerHTML += lines[i] + "<br/>";
    i++;
    setTimeout(runTypingIntro, 1300);
  } else {
    setTimeout(() => {
      document.getElementById("intro-overlay").style.display = "none";
      const main = document.getElementById("main-content");
      main.style.display = "block";
      setTimeout(() => {
        main.style.opacity = "1";
      }, 50);
    }, 1500);
  }
}

function openTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
  document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabId).style.display = 'flex';
  const activeBtn = Array.from(document.querySelectorAll('.tab-button')).find(btn =>
    btn.textContent.toLowerCase().includes(tabId)
  );
  if (activeBtn) activeBtn.classList.add('active');
}
