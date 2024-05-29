const card = document.querySelector('.card');

card.addEventListener('click', function (e) {
    if (e.target.classList.contains('title')) {
        console.log('you clicked on the title');
    }
    if (e.target.classList.contains('card-content')) {
        console.log('you clicked on the card content');
    }
    if (e.target.classList.contains('card')) {
        console.log('you clicked on the card');
    }
});
