document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.getElementById('no-btn');
    const yesBtn = document.getElementById('yes-btn');
    const popup = document.getElementById('image-popup');
    const popupImage = document.getElementById('popup-image');

    noBtn.addEventListener('click', function() {
        // Move the No button to a random position
        const container = document.querySelector('.container');
        const containerRect = container.getBoundingClientRect();
        const btnRect = noBtn.getBoundingClientRect();

        const maxX = containerRect.width - btnRect.width;
        const maxY = containerRect.height - btnRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.position = 'absolute';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });

    yesBtn.addEventListener('click', function() {
        // Show the image popup
        // Replace 'your-image-path.jpg' with the actual path to your image
        popupImage.src = 'MY IMAGE.png'; // User will integrate their image here
        popup.style.display = 'flex';
        popup.classList.add('show');
    });

    // Close popup when clicking outside the image
    popup.addEventListener('click', function() {
        popup.style.display = 'none';
        popup.classList.remove('show');
    });
});
