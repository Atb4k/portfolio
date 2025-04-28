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
        document.getElementById("menuToggle").classList.add("show");
        setTimeout(() => {
          main.style.transition = "opacity 1s ease, transform 1s ease";
          main.style.opacity = "1";
          main.style.transform = "scale(1) translateY(0)";
          showTab('home'); // Show Home tab by default
        }, 50);
      }, 1500);
    }
  }
  
  function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
  
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => btn.classList.remove('active'));
  
    document.getElementById(tabId).style.display = 'block';
  
    const activeBtn = Array.from(buttons).find(btn => btn.innerText.toLowerCase() === tabId);
    if (activeBtn) activeBtn.classList.add('active');
  }
  