// Images data
const imagesData = [
    // Pompe à chaleur Air/Eau
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888333/pac_aireau_01_l0nesb.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888336/pac_aireau_02_ej4asw.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888360/photovoltaique-1_llbrhx.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888368/realisation-06_jy9g51.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888346/pac_aireau_05_nwpngq.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888372/realisation-10_zhmilf.png', category: 'pac-air-eau', title: 'Pompe à chaleur Air/Eau' },

    // Pompe à chaleur Air/Air



    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888332/pac_airair_04_iy9wz6.png', category: 'pac-air-air', title: 'Pompe à chaleur Air/Air' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888371/solaire-thermique-1_k9nj5n.png', category: 'pac-air-air', title: 'Pompe à chaleur Air/Air' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888337/pac_airair_06_c8ozzt.png', category: 'pac-air-air', title: 'Pompe à chaleur Air/Air' },

    // Système solaire combiné (SSC)
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888353/captured_ecran2025-09-22a23.38.43_z2ckvj.png', category: 'ssc', title: 'Système Solaire Combiné' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888351/captured_ecran2025-09-22a23.38.56_svvcgn.png', category: 'ssc', title: 'Système Solaire Combiné' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888353/captured_ecran2025-09-22a23.39.51_mogejo.png', category: 'ssc', title: 'Système Solaire Combiné' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888354/captured_ecran2025-09-22a23.39.39_tnabwn.png', category: 'ssc', title: 'Système Solaire Combiné' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888353/captured_ecran2025-09-22a23.39.51_mogejo.png', category: 'ssc', title: 'Système Solaire Combiné' },

    // Poêle à granulés
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888344/poele_05_zxjbvm.png', category: 'poele-granules', title: 'Poêle à granulés' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888356/pac-air-eau-1_kq1kzn.jpg', category: 'poele-granules', title: 'Poêle à granulés' },

    // Isolation extérieure
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888323/ite_01_gfmq7h.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888323/ite_02_fjcp6d.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888328/ite_03_ig7srn.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888370/realisation-09_sr9nsu.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888370/realisation-11_pcwoi9.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888325/ite_06_ouedxa.jpg', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888326/ite_07_uft9aw.webp', category: 'isolation-exterieure', title: 'Isolation extérieure' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888368/realisation-08_i8rahp.png', category: 'isolation-exterieure', title: 'Isolation extérieure' },

    // Isolation des combles
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888312/combles_03_mplgst.png', category: 'isolation-combles', title: 'Isolation des combles' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888326/combles_04_re95hx.png', category: 'isolation-combles', title: 'Isolation des combles' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888318/combles_05_dlpimb.webp', category: 'isolation-combles', title: 'Isolation des combles' },

    // Fenêtres PVC
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888310/fenetres_pvc_01_sjxnul.png', category: 'fenetres-pvc', title: 'Fenêtres PVC' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888312/fenetres_pvc_02_zi7zm2.png', category: 'fenetres-pvc', title: 'Fenêtres PVC' },
    { src: 'https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888309/fenetres_pvc_03_dbn263.png', category: 'fenetres-pvc', title: 'Fenêtres PVC' },
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
