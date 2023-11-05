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
const dotElements = document.querySelectorAll('.dot'); // "points" (indicateurs de position) dans le carrousel
const taglineElement = document.querySelector('.tagline'); // affiche un texte ou une description liée à l'image actuellement affichée
const amountOfSlides = slides.length; // prend la valeur de la longueur (nombre d'éléments) du slide (ici, =la bannière)

// Initialisation de la tagline
taglineElement.innerHTML = slides[currentIndex].tagLine; // pour mettre à jour le texte sur chaque nouvelle image affichée

// Event listener pour le bouton "arrow_left"
arrowLeftButton.addEventListener('click', () => { //EventListener = il surveille l'élément
	if (currentIndex > 0) { // Si currentIndex supérieur à 0 (=il y a au moins 1 image précédente), alors mon if s'applique et on revient
		// à l'image précédente
		currentIndex--;
		updateImg();
	} else { // Sinon, c'est que mon currentIndex = 0 (je suis sur la 1ère image) et dans ce cas, mon else s'applique et me dirige sur la
		// dernière image de mon caroussel
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
	dotElements.forEach((dot, index) => { // je vais chercher dans le HTML tous les éléments correspondants aux Bullet points
		if (index === currentIndex) { // je vérifie que index = currentIndex. Si c'est le cas j'ajoute :
			dot.classList.add('dot_selected'); // la clase ci-présente, qui permet de mettre le bullet point actuel en surbrillance.
		} else { // sinon, si index différent de (/) currentIndex, alors :
			dot.classList.remove('dot_selected'); // je supprime la classe ci-présente afin que le bullet point ne soit pas en surbrillance.
		}
	});

	// Tagline
	taglineElement.innerHTML = slides[currentIndex].tagLine;
}
