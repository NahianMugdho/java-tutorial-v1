// Language toggle & utilities
document.addEventListener('DOMContentLoaded', () => {
  // Language switcher
  const buttons = document.querySelectorAll('.lang-btn');
  const saved = localStorage.getItem('java-lang') || 'both';
  setLang(saved);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.dataset.lang;
      setLang(lang);
      localStorage.setItem('java-lang', lang);
    });
  });

  function setLang(lang) {
    document.body.classList.remove('lang-bn', 'lang-en', 'lang-both');
    document.body.classList.add('lang-' + lang);
    buttons.forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
  }

  // Copy code buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const pre = btn.closest('.code-block').querySelector('pre');
      const text = pre.innerText;
      navigator.clipboard.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#34d399';
        btn.style.color = '#0f172a';
        setTimeout(() => {
          btn.textContent = original;
          btn.style.background = '';
          btn.style.color = '';
        }, 1500);
      });
    });
  });

  // Highlight active nav
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-inner a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
});
