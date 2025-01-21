document.addEventListener('DOMContentLoaded', function() {
    // standard navbar

    const currentPath = window.location.pathname;
    const basePath = (currentPath.includes("/img/")) ? "../" : "";

    const navHTML = `
    <nav>
    <img src="budge-it-logo.jpg" alt="logo">
    <!-- <h1>Budge-It Tracker</h1> -->

    <ul id="loginLinks">
    <li><a href="#"><i class="fa-solid fa-user"></i> Login</a></li>
    </ul>

    <ul id="navLinks">
        <li><a href="#"><i class="fa-solid fa-house"></i> Home</a></li>
        <li><a href="#"><i class="fa-solid fa-bars-staggered"></i> Tracking</a></li>
        <!-- <li><a href="#"><i class="fa-solid fa-coins"></i> Budget</a></li>
        <li><a href="#"><i class="fa-solid fa-money-bill-trend-up"></i> Dashboard</a></li>
        <li><a href="#"><i class="fa-solid fa-chart-line"></i> Reports</a></li> -->
    </ul>
    </nav>
    `

    document.body.insertAdjacentHTML('afterbegin', navHTML);

});

