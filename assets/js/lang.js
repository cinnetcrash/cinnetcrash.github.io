(function () {
  function setLang(lang) {
    document.documentElement.lang = lang;
    localStorage.setItem('bioinf-lang', lang);

    document.querySelectorAll('.lang-tr').forEach(function (el) {
      el.style.display = lang === 'tr' ? '' : 'none';
    });
    document.querySelectorAll('.lang-en').forEach(function (el) {
      el.style.display = lang === 'en' ? '' : 'none';
    });

    var btnTr = document.getElementById('btn-tr');
    var btnEn = document.getElementById('btn-en');
    if (btnTr) btnTr.classList.toggle('active', lang === 'tr');
    if (btnEn) btnEn.classList.toggle('active', lang === 'en');
  }

  window.setLang = setLang;

  document.addEventListener('DOMContentLoaded', function () {
    var saved = localStorage.getItem('bioinf-lang') || 'tr';
    setLang(saved);
  });
})();
