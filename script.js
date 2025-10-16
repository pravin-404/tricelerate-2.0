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