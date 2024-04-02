

document.addEventListener('DOMContentLoaded', () => {
    // Modal trigger button
    const btn = document.getElementById('showModal');
    
    // Modal element
    const modal = document.getElementById('myModal');
    
    // Close button inside the modal
    const closeBtn = document.querySelector('.modal-close');
    
    // Show modal when the button is clicked
    btn.addEventListener('click', () => {
      modal.classList.add('is-active');
    });
    
    // Close modal when the close button is clicked
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('is-active');
    });
    
    // Also close modal when clicking on the background
    modal.querySelector('.modal-background').addEventListener('click', () => {
      modal.classList.remove('is-active');
    });
  });


