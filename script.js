const header = document.querySelector('header');
window.addEventListener('scroll', function () {
  header.classList.toggle('sticky', window.scrollY > 0);
});

const progress = document.querySelector('.progress-bars-wrapper');
const progressBarPercents = [97, 89, 85, 87, 80];
const bars = document.querySelectorAll('.progress-percent');

const updateProgressBars = () => {
  bars.forEach((bar, i) => {
    bar.style.width = `${progressBarPercents[i]}%`;
  });
};

const onScroll = () => {
  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    updateProgressBars();
  }
};

window.addEventListener('scroll', onScroll);

const sphereContainer = document.querySelector('.sphere-container');
const sphere = sphereContainer.querySelector('.sphere');
const words = sphere.querySelectorAll('.word');

sphereContainer.addEventListener('mousemove', (event) => {
  const wrapperRect = sphereContainer.getBoundingClientRect();
  const sphereWrapper = sphereContainer.querySelector('.sphere-wrapper');
  const sphereRect = sphereWrapper.getBoundingClientRect();
  const centerX = sphereRect.left - wrapperRect.left + sphereRect.width / 2;
  const centerY = sphereRect.top - wrapperRect.top + sphereRect.height / 2;
  const deltaX = event.pageX - centerX;
  const deltaY = event.pageY - centerY;
  const angleX = -deltaY / 50;
  const angleY = deltaX / 20;
  sphere.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
});

const map = L.map('map', {
  center: [49.064192, 24.945167],
  zoom: 3,
  zoomControl: false,
  attributionControl: false,
});

L.tileLayer(
  'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}',
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 3,
    maxZoom: 3,
    ext: 'png',
  }
).addTo(map);

document
  .getElementById('contact-form-fields')
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage:%0D%0A${message}`;
    const emailLink = `mailto:robert.saban1989@gmail.com?subject=Message from ${name}&body=${body}`;
    window.location.href = emailLink;
  });

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let scrollUp = document.querySelector('.top');
let aboutSection = document.querySelector('#about');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');

  if (window.scrollY >= aboutSection.offsetTop - window.innerHeight / 2) {
    scrollUp.style.display = 'block';
  } else {
    scrollUp.style.display = 'none';
  }
};

const sr = ScrollReveal({
  distance: '25px',
  duration: 2500,
  reset: false,
});

sr.reveal('.home-text,.sphere-container', { delay: 195, origin: 'bottom' });
sr.reveal('.about,.portfolio,.contact', { delay: 200, origin: 'bottom' });
