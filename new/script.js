function performSearch() {
    const searchQuery = document.getElementById('search-input').value;
    if (searchQuery.trim() !== '') {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    }
}

document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});


function urlUnblocker() {
    const proxyServers = [
        'https://proxy1.example.com',
        'https://proxy2.example.com',
        'https://proxy3.example.com'
    ];
    
    const currentUrl = window.location.href;
    const randomProxy = proxyServers[Math.floor(Math.random() * proxyServers.length)];
    
    if (currentUrl.includes('google.com/search')) {
        const searchParams = new URLSearchParams(window.location.search);
        const query = searchParams.get('q');
        
        // Encode and route through proxy
        const encodedUrl = btoa(currentUrl);
        const unblockUrl = `${randomProxy}/browse.php?u=${encodedUrl}`;
        
        // Create hidden iframe for proxy routing
        const frame = document.createElement('iframe');
        frame.style.display = 'none';
        frame.src = unblockUrl;
        document.body.appendChild(frame);
        
        // Redirect through proxy
        window.location.href = unblockUrl;
    }
}

// Usage example
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value;
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            urlUnblocker();
        }
    });
});
