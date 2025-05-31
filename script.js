document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('nav a');
  const techItems = document.querySelectorAll('.tech-item');

  // NAV: Hover & click animations + transition rapide
  navLinks.forEach(link => {
    link.style.transition = 'color 0.3s ease, transform 0.2s ease';

    link.addEventListener('mouseenter', () => {
      link.style.color = '#ff00ff';
      link.style.transform = 'scale(1.05) translateY(-2px)';
      link.style.textShadow = '0 0 6px #ff00ff';
    });

    link.addEventListener('mouseleave', () => {
      link.style.color = '';
      link.style.transform = 'scale(1) translateY(0)';
      link.style.textShadow = '';
    });

    // Transition page rapide
    const href = link.getAttribute("href");
    if (!href.startsWith("http") && !href.startsWith("#")) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        link.style.transform = 'scale(1.1)';
        setTimeout(() => {
          document.body.classList.add("fade-out");
          setTimeout(() => {
            window.location.href = href;
          }, 200); // transition plus rapide
        }, 100);
      });
    }
  });

  // TECH ICONS
  techItems.forEach(icon => {
    icon.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

    icon.addEventListener('mouseenter', () => {
      icon.style.transform += ' scale(1.15) rotate(8deg)';
      icon.style.boxShadow = '0 0 18px #ff00ff, 0 0 30px #ff00ff';
    });

    icon.addEventListener('mouseleave', () => {
      icon.style.transform = icon.style.transform.replace(/scale\(1\.15\) rotate\(8deg\)/g, '');
      icon.style.boxShadow = '0 4px 15px rgba(0,191,255,0.5)';
    });
  });

  // BUTTONS
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mousedown', () => {
      btn.style.transform = 'scale(0.96)';
    });
    btn.addEventListener('mouseup', () => {
      btn.style.transform = 'scale(1)';
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = 'scale(1)';
    });
  });

  // FORMULAIRE
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      alert("Merci pour votre message !");
      e.target.reset();
    });
  }
});