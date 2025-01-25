document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`Searching for "${query}"...`);
    } else {
        alert('Please enter a search term!');
    }
});
