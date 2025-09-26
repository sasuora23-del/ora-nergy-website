document.addEventListener('DOMContentLoaded', function() {
    // Créer l'overlay de la lightbox
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    lightboxOverlay.innerHTML = `
        <div class="lightbox-content">
            <span class="lightbox-close">&times;</span>
            <img src="" alt="" class="lightbox-image">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(lightboxOverlay);

    // Sélectionner tous les liens d'images dans les réalisations
    const imageLinks = document.querySelectorAll('.realisations-grid a[data-lightbox]');
    const lightboxImage = lightboxOverlay.querySelector('.lightbox-image');
    const lightboxCaption = lightboxOverlay.querySelector('.lightbox-caption');
    const lightboxClose = lightboxOverlay.querySelector('.lightbox-close');

    // Ajouter les événements de clic pour ouvrir la lightbox
    imageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Récupérer l'image et le titre
            const imageSrc = this.href;
            const imageTitle = this.getAttribute('data-title') || '';
            
            // Mettre à jour le contenu de la lightbox
            lightboxImage.src = imageSrc;
            lightboxImage.alt = imageTitle;
            lightboxCaption.textContent = imageTitle;
            
            // Afficher la lightbox
            lightboxOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Empêcher le scroll
        });
    });

    // Fermer la lightbox en cliquant sur la croix
    lightboxClose.addEventListener('click', function() {
        closeLightbox();
    });

    // Fermer la lightbox en cliquant sur l'overlay
    lightboxOverlay.addEventListener('click', function(e) {
        if (e.target === lightboxOverlay) {
            closeLightbox();
        }
    });

    // Fermer la lightbox avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightboxOverlay.classList.contains('active')) {
            closeLightbox();
        }
    });

    // Fonction pour fermer la lightbox
    function closeLightbox() {
        lightboxOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Rétablir le scroll
    }
});

