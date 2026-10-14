// EDIT THESE SETTINGS BEFORE PUBLISHING.
const SETTINGS = {
  contactEmail: 'hello@example.com', // Replace with your business contact email.
};

// Put your illustrations in the "images" folder using the names shown in each placeholder.
// Images appear automatically when present; otherwise the decorative placeholder remains.
document.querySelectorAll('[data-image]').forEach((element) => {
  const filename = element.dataset.image;
  const probe = new Image();
  probe.onload = () => {
    element.style.backgroundImage = `url("images/${filename}")`;
    element.classList.add('has-image');
    element.setAttribute('aria-label', filename.replace(/[-.]/g, ' '));
  };
  probe.src = `images/${filename}`;
});

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(item => {
    item.classList.toggle('active', item === button);
    item.setAttribute('aria-pressed', String(item === button));
  });
  document.querySelectorAll('.art-card').forEach(card => {
    card.hidden = category !== 'all' && card.dataset.category !== category;
  });
}));

const emailLink = document.querySelector('#email-link');
emailLink.href = `mailto:${SETTINGS.contactEmail}?subject=${encodeURIComponent('Hello Mariangela!')}`;
document.querySelector('#year').textContent = new Date().getFullYear();
