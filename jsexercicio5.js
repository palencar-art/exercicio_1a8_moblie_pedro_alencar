const btn = document.getElementById('theme-toggle');

btn.addEventListener('click', () => {
    // Alterna a classe dark-theme no elemento body
    document.body.classList.toggle('dark-theme');
});
