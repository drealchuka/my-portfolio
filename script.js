const toggle = document.getElementById('theme-toggle');
const body = document.body;


// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  toggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});





function speakName() {
  const utterance = new SpeechSynthesisUtterance("Chukwuka Animmaku");
  utterance.lang = "en-GB"; // or "en-US" if you prefer the accent
  speechSynthesis.speak(utterance);
}



particlesJS("particles-js", {
  particles: {
    number: {
      value: 60,
      density: { enable: true, value_area: 800 }
    },
    color: { value: "#6366f1" },
    shape: { type: "circle" },
    opacity: {
      value: 0.4,
      random: true
    },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#6366f1",
      opacity: 0.3,
      width: 1
    },
    move: {
      enable: true,
      speed: 3,
      attract: { enable: false }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      }
    }
  },
  retina_detect: true
});

