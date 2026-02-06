// Select the elements
const btnYes = document.querySelector('#buttonYes');
const btnNo = document.querySelector('.btn-danger:last-child');
const msg = document.querySelector('.msg');

// 1. The "No" button escape logic
btnNo.addEventListener('mouseover', () => {
    // We use 'fixed' so it can move anywhere on the entire screen
    btnNo.style.position = 'fixed'; 
    
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);

    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});

// 2. The "Yes" button click logic
btnYes.addEventListener('click', () => {
    msg.textContent = "Yay! I'm so happy! Thank you for saying yes! ❤️";
    
    // Optional: Hide the No button once she says Yes
    btnNo.style.display = 'none';
});

