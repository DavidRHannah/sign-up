document.getElementById('theme-toggle').addEventListener('click', () => {
    document.documentElement.setAttribute(
        'data-theme',
        document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
    );
});