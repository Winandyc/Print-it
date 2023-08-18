const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let currentIndex = 0;
const bannerImg = document.querySelector('.banner-img');
const arrowLeftButton = document.querySelector('.arrow_left');
const arrowRightButton = document.querySelector('.arrow_right');
const dotElements = document.querySelectorAll('.dot');
const taglineElement = document.querySelector('.tagline');
const amountOfSlides = slides.length;

// Initialisation de la tagline
taglineElement.innerHTML = slides[currentIndex].tagLine;

// Event listener pour le bouton "arrow_left"
arrowLeftButton.addEventListener('click', () => {
	if (currentIndex > 0) {
		currentIndex--;
		updateImg();
	} else {
		currentIndex = amountOfSlides - 1;
		updateImg();
	}
});

// Event listener pour le bouton "arrow_right"
arrowRightButton.addEventListener('click', () => {
	if (currentIndex < amountOfSlides - 1) {
		currentIndex++;
		updateImg();
	} else {
		currentIndex = 0;
		updateImg();
	}
});

function updateImg() {
	bannerImg.src = '/assets/images/slideshow/' + slides[currentIndex].image;

	// Bullet points
	dotElements.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add('dot_selected');
		} else {
			dot.classList.remove('dot_selected');
		}
	});

	// Tagline
	taglineElement.innerHTML = slides[currentIndex].tagLine;
}
