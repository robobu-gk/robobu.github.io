document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Add subtle animation to table rows
    const tableRows = document.querySelectorAll('.company-info tr');
    tableRows.forEach((row, index) => {
        row.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s forwards`;
        row.style.opacity = '0';
    });
});

// Add smooth scrolling for any anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});