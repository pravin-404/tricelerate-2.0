// Wait until the entire page is fully loaded
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    const eventCard = document.querySelector('.event-card');

    // Wait for the letter animation to finish
    setTimeout(function() {
        // Add the 'hidden' class to fade out the preloader
        preloader.classList.add('hidden');
        // Add the 'loaded' class to fade in the main content
        eventCard.classList.add('loaded');
    }, 2500); // 2500 milliseconds = 2.5 seconds
});


// This is the original code for the modal pop-up
document.addEventListener('DOMContentLoaded', function() {
    const viewDetailsBtn = document.getElementById('viewDetailsBtn');
    const modal = document.getElementById('detailsModal');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const closeButtons = modal.querySelectorAll('.modal-close-btn');

    function openModal() {
        modal.classList.add('is-open');
    }

    function closeModal() {
        modal.classList.remove('is-open');
    }

    viewDetailsBtn.addEventListener('click', openModal);
    modalBackdrop.addEventListener('click', closeModal);
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });
});
