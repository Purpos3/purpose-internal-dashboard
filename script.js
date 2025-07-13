// Set last updated date
document.addEventListener('DOMContentLoaded', function() {
    const lastUpdated = document.getElementById('last-updated');
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    lastUpdated.textContent = now.toLocaleDateString('en-US', options);
});

// Optional: Add click tracking for analytics later
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('click', function() {
        console.log(`Clicked: ${this.querySelector('h3').textContent}`);
        // You can expand this for analytics tracking later
    });
});
