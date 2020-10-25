

const hamburger = document.querySelector('.navigation-bar__hamburger');
const menu = document.querySelector('.navigation-bar__links');
const closeIcon = document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('close-icon');
	menu.classList.add('menu-top');
	hamburger.classList.add('rotate');
	menu.classList.toggle('show-menu');
	setTimeout(() => {
		hamburger.classList.remove('rotate');
		menu.classList.remove('menu-top');
	}, 200);
});