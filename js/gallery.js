// Images data
const imagesData = [
    // Pompe à chaleur Air/Eau
    { src: 'images/nouvelles_photos_v2/PAC_AirEau/pac_aireau_01.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },
    { src: 'images/nouvelles_photos_v2/PAC_AirEau/pac_aireau_02.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },
    { src: 'images/nouvelles_photos_v2/PAC_AirEau/pac_aireau_03.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },
    { src: 'images/nouvelles_photos_v2/PAC_AirEau/pac_aireau_04.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },
    { src: 'images/nouvelles_photos_v2/PAC_AirEau/pac_aireau_05.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },
    { src: 'images/nouvelles_photos_v2/PAC_AirEau/pac_aireau_06.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },

    // Pompe à chaleur Air/Air



    { src: 'images/nouvelles_photos_v2/PAC_AirAir/pac_airair_04.png', category: 'pac-air-air', title: 'Pompe à chaleur Air/Air' },
    { src: 'images/nouvelles_photos_v2/PAC_AirAir/pac_airair_05.png', category: 'pac-air-air', title: 'Pompe à chaleur Air/Air' },
    { src: 'images/nouvelles_photos_v2/PAC_AirAir/pac_airair_06.png', category: 'pac-air-air', title: 'Pompe à chaleur Air/Air' },

    // Système solaire combiné (SSC)
    { src: 'images/nouvelles_photos_v2/SSC/Captured_ecran2025-09-22a23.38.43.png', category: 'ssc', title: 'Système Solaire Combiné' },
    { src: 'images/nouvelles_photos_v2/SSC/Captured_ecran2025-09-22a23.38.56.png', category: 'ssc', title: 'Système Solaire Combiné' },
    { src: 'images/nouvelles_photos_v2/SSC/Captured_ecran2025-09-22a23.39.30.png', category: 'ssc', title: 'Système Solaire Combiné' },
    { src: 'images/nouvelles_photos_v2/SSC/Captured_ecran2025-09-22a23.39.39.png', category: 'ssc', title: 'Système Solaire Combiné' },
    { src: 'images/nouvelles_photos_v2/SSC/Captured_ecran2025-09-22a23.39.51.png', category: 'ssc', title: 'Système Solaire Combiné' },

    // Poêle à granulés
    { src: 'images/nouvelles_photos_v2/Poele_Granules/poele_05.png', category: 'poele-granules', title: 'Poêle à granulés' },
    { src: 'images/nouvelles_photos_v2/Poele_Granules/poele_06.png', category: 'poele-granules', title: 'Poêle à granulés' },

    // Isolation extérieure
    { src: 'images/nouvelles_photos_v2/ITE/ite_01.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'images/nouvelles_photos_v2/ITE/ite_02.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'images/nouvelles_photos_v2/ITE/ite_03.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'images/nouvelles_photos_v2/ITE/ite_04.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'images/nouvelles_photos_v2/ITE/ite_05.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'images/nouvelles_photos_v2/ITE/ite_06.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'images/nouvelles_photos_v2/ITE/ite_07.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'images/nouvelles_photos_v2/ITE/ite_08.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },

    // Isolation des combles
    { src: 'images/nouvelles_photos_v2/Isolation_Combles/combles_03.png', category: 'isolation-combles', title: 'Isolation des combles' },
    { src: 'images/nouvelles_photos_v2/Isolation_Combles/combles_04.png', category: 'isolation-combles', title: 'Isolation des combles' },
    { src: 'images/nouvelles_photos_v2/Isolation_Combles/combles_05.png', category: 'isolation-combles', title: 'Isolation des combles' },

    // Fenêtres PVC
    { src: 'images/nouvelles_photos_v2/Fenetres_PVC/fenetres_pvc_01.png', category: 'fenetres-pvc', title: 'Fenêtres PVC' },
    { src: 'images/nouvelles_photos_v2/Fenetres_PVC/fenetres_pvc_02.png', category: 'fenetres-pvc', title: 'Fenêtres PVC' },
    { src: 'images/nouvelles_photos_v2/Fenetres_PVC/fenetres_pvc_03.png', category: 'fenetres-pvc', title: 'Fenêtres PVC' },
];

// Variables globales
let currentImageIndex = 0;
let filteredImages = [];

// Fonction pour afficher les images
function displayImages(filter = 'all') {
    const gallery = document.getElementById('gallery');
    if (!gallery) {
        console.error('Gallery element not found!');
        return;
    }

    gallery.innerHTML = '';
    filteredImages = imagesData.filter(image => filter === 'all' || image.category === filter);

    filteredImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');
        galleryItem.dataset.index = index;
        galleryItem.dataset.category = image.category;

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.loading = 'lazy';

        galleryItem.appendChild(img);
        gallery.appendChild(galleryItem);

        galleryItem.addEventListener('click', () => openLightbox(index));
    });
}

// Fonction pour ouvrir la lightbox
function openLightbox(index) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.querySelector(".lightbox-image");
    const lightboxCaption = document.querySelector(".lightbox-caption");
    
    if (!lightbox || !lightboxImage || !lightboxCaption) return;

    currentImageIndex = index;
    lightboxImage.src = filteredImages[index].src;
    lightboxImage.alt = filteredImages[index].title;

    lightbox.classList.add("visible");
    document.body.style.overflow = "hidden";
}

// Fonction pour fermer la lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.classList.remove("visible");
        document.body.style.overflow = "auto";
    }
}

// Fonction pour naviguer dans la lightbox
function navigateLightbox(direction) {
    currentImageIndex += direction;
    if (currentImageIndex < 0) currentImageIndex = filteredImages.length - 1;
    if (currentImageIndex >= filteredImages.length) currentImageIndex = 0;
    
    const lightboxImage = document.querySelector('.lightbox-image');
    if (lightboxImage) {
        lightboxImage.src = filteredImages[currentImageIndex].src;
        lightboxImage.alt = filteredImages[currentImageIndex].title;
    }
}

// Initialisation quand le DOM est chargé
document.addEventListener('DOMContentLoaded', function() {
    console.log('Gallery script loaded');
    
    // Afficher toutes les images au démarrage
    displayImages('all');

    // Gestion des filtres
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Retirer la classe active de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            button.classList.add('active');
            // Afficher les images filtrées
            displayImages(button.dataset.filter);
        });
    });

    // Gestion de la lightbox
    const lightboxClose = document.querySelector(".lightbox-close");
    const lightbox = document.getElementById("lightbox");
    const prevButton = document.querySelector(".lightbox-nav.prev");
    const nextButton = document.querySelector(".lightbox-nav.next");
    
    if (lightboxClose) {
        lightboxClose.addEventListener("click", closeLightbox);
    }
    
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    if (prevButton) {
        prevButton.addEventListener("click", () => navigateLightbox(-1));
    }

    if (nextButton) {
        nextButton.addEventListener("click", () => navigateLightbox(1));
    }

    // Gestion des touches clavier
    document.addEventListener("keydown", (e) => {
        if (lightbox && lightbox.classList.contains("visible")) {
            if (e.key === "Escape") {
                closeLightbox();
            } else if (e.key === "ArrowLeft") {
                navigateLightbox(-1);
            } else if (e.key === "ArrowRight") {
                navigateLightbox(1);
            }
        }
    });
});
