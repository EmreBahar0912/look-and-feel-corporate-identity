const hamButton = document.querySelector(".hamburger-icon");
const hamSluitButton = document.querySelector(".hamburger-menu button");

const hamMenu = document.querySelector(".hamburger-menu");

hamButton.addEventListener("click", () => {
  hamButton.classList.toggle("active");
  hamMenu.classList.add("is-open");
});

hamSluitButton.addEventListener("click", () => {
  hamButton.classList.toggle("is-open");
  hamMenu.classList.remove("is-open");
});

if (hamMenu.classList.contains("is-open")) {
  document.body.style.opacity = "0.5";
} else {
  document.body.style.opacity = "1";
}

const menu = document.getElementById('menu');
const links = hamMenu.querySelectorAll('a');

hamButton.addEventListener('click', () => {
  const open = hamButton.getAttribute('aria-expanded') === 'true';
  hamButton.setAttribute('aria-expanded', !open);
  hamMenu.hidden = open;

  links.forEach(link => {
    link.tabIndex = open ? -1 : 0; // disable tab when closed
  });
});
