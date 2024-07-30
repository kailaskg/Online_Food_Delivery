

document.addEventListener("DOMContentLoaded", function() {
    // Create header elements
    const header = document.getElementById('header-container');

    // Create logo
    const logo = document.createElement('a');
    logo.href = '#';
    logo.className = 'logo';
    logo.innerHTML = '<i class="fas fa-utensils"></i>food';


    // Create navbar
    const nav = document.createElement('nav');
    nav.className = 'navbar';

    // Array of navbar items
    const navItems = [
        { text: 'home', href: '#' },
        { text: 'our\'s special', href: 'ourSpcl.html' },
        { text: 'popular foods', href: 'popularFood.html' },
        { text: 'gallery', href: 'gallery.html' },
        { text: 'customer reviews', href: 'review.htm' },
        { text: 'Order Now', href: 'orderNow.html', isButton: true },
        { text: 'Login', href: 'Login.html', isButton: true }
    ];

    // Loop through the navItems array
    navItems.forEach(item => {
        if (item.isButton) {
            const link = document.createElement('a');
            link.href = item.href;

            const button = document.createElement('button');
            button.className = 'btn0';
            button.textContent = item.text;

            link.appendChild(button);
            nav.appendChild(link);
        } else {
            const link = document.createElement('a');
            link.href = item.href;
            link.textContent = item.text;
            nav.appendChild(link);
        }
    });

    // Append elements to header
    header.appendChild(logo);

    header.appendChild(nav);
});

