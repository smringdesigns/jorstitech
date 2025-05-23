<script>
    // Alternar el menú móvil
    document.addEventListener('DOMContentLoaded', () => {
        const mobileMenuButton = document.querySelector('.mobile-menu');
        const navMenu = document.querySelector('nav ul');

        if (mobileMenuButton && navMenu) {
            mobileMenuButton.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Enlaces de anclaje con desplazamiento suave
        const anchorLinks = document.querySelectorAll('a[href^="#"]');

        anchorLinks.forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));

                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    });
</script>
