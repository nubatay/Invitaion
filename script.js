
const btnYes = document.querySelector('#buttonYes');
const btnNo = document.querySelector('.btn-danger:last-child');
const msg = document.querySelector('.msg');


btnNo.addEventListener('mouseover', () => {
    
    btnNo.style.position = 'fixed'; 
    
    const x = Math.random() * (window.innerWidth - btnNo.offsetWidth);
    const y = Math.random() * (window.innerHeight - btnNo.offsetHeight);

    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});


btnYes.addEventListener('click', () => {
    msg.textContent = "Yay! I'm so happy! Thank you for saying yes! ❤️";
    
    
    btnNo.style.display = 'none';
});

