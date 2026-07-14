const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

// Mobiles Menü: Burger öffnet/schließt das Dropdown und hält den a11y-Status synchron
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

function setMenu(open){
  navLinks.classList.toggle('open', open);
  burger.classList.toggle('active', open);
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
}

burger.addEventListener('click', () => setMenu(!navLinks.classList.contains('open')));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', (e) => { if(e.key === 'Escape') setMenu(false); });

const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); } });
}, {threshold:0.15});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
