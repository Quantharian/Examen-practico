const ratingButtons = document.querySelectorAll('.boxContainer button');
const submitButton = document.querySelector('.sendButton');
const feedbackCard = document.querySelector('.globalContainer');
const thankYouCard = document.querySelector('.secondaryContainer');
const selectedRatingText = document.querySelector('.clickedContainer');
let selectedRating = null;

ratingButtons.forEach((button) => {
    button.addEventListener('click', () => {
        ratingButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');
        selectedRating = button.textContent;
    });
});

submitButton.addEventListener('click', () => {
    if (selectedRating) {
        feedbackCard.style.display = 'none';

        thankYouCard.style.display = 'block';
        selectedRatingText.textContent = `Seleccionaste ${selectedRating} de 5`;
    }
});
