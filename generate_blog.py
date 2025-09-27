import os
import json
import markdown

BLOG_DIR = 'blog'
OUTPUT_DIR = 'blog'
INDEX_FILE = os.path.join(OUTPUT_DIR, 'index.json')

def generate_blog():
    posts = []
    for filename in os.listdir(BLOG_DIR):
        if filename.endswith('.md'):
            filepath = os.path.join(BLOG_DIR, filename)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()

            # Extract front matter (metadata) and body
            # Assuming front matter is at the beginning, delimited by '---'
            parts = content.split('---', 2)
            if len(parts) < 3:
                print(f"Warning: Skipping {filename} due to missing front matter.")
                continue

            front_matter_raw = parts[1]
            body_markdown = parts[2]

            metadata = {}
            for line in front_matter_raw.split('\n'):
                if ':' in line:
                    key, value = line.split(':', 1)
                    metadata[key.strip()] = value.strip().strip("'")
            
            # Convert markdown body to HTML
            body_html = markdown.markdown(body_markdown)

            slug = filename.replace('.md', '')
            post_data = {
                'title': metadata.get('title', slug.replace('-', ' ').title()),
                'author': metadata.get('author', 'Ora Nergy'),
                'date': metadata.get('date', 'YYYY-MM-DD'),
                'image': metadata.get('image', ''),
                'description': metadata.get('description', ''),
                'slug': slug,
                'body_html': body_html
            }
            posts.append(post_data)

            # Generate individual HTML page for the post
            post_html_path = os.path.join(OUTPUT_DIR, f'{slug}.html')
            with open(post_html_path, 'w', encoding='utf-8') as f_html:
                html_content = f"""
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{post_data['title']} - Blog Ora Nergy</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="icon" type="image/png" href="https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888354/ora-nergy-favicon_aok5oa.png">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <div class="navbar-content">
            <a href="../index.html">
                <img src="https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888354/ora-nergy-logo_aok5oa.png" alt="Ora Nergy Logo" class="logo">
            </a>
            <ul class="nav-links">
                <li><a href="../index.html" class="accueil">Accueil</a></li>
                <li><a href="../solutions.html" class="solutions">Nos Solutions</a></li>
                <li><a href="../realisations.html" class="realisations">Réalisations</a></li>
                <li><a href="../aides-subventions.html" class="aides">Aides & Subventions</a></li>
                <li><a href="../blog.html" class="blog">Blog</a></li>
                <li><a href="../devenir-partenaire.html" class="services">Devenir Partenaire</a></li>
                <li><a href="../contact.html" class="contact">Contact</a></li>
            </ul>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero" style="background: linear-gradient(rgba(0,0,0,0.4  ), rgba(0,0,0,0.4)), url('{post_data['image']}')">
        <div class="hero-content">
            <div class="hero-badge">📝 Blog</div>
            <h1>{post_data['title']}</h1>
            <p>{post_data['description']}</p>
            <p>Par {post_data['author']} le {post_data['date']}</p>
        </div>
    </section>

    <!-- Article Content -->
    <section class="section section-white">
        <div class="container blog-post-content">
            {post_data['body_html']}
        </div>
    </section>

    <!-- Section Contact -->
    <section class="section section-primary">
        <div class="container text-center">
            <div class="section-header">
                <h2 class="section-title text-white">Prêt à démarrer votre projet ?</h2>
                <p class="section-subtitle text-white">Contactez-nous pour un devis gratuit et personnalisé</p>
            </div>
            <div class="hero-buttons">
                <a href="../contact.html" class="btn btn-white">
                    Demander un devis
                </a>
                <a href="tel:0745058029" class="btn btn-secondary">
                    07 45 05 80 29
                </a>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <img src="https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888354/ora-nergy-logo_aok5oa.png" alt="Ora Nergy Logo" style="height: 40px; margin-bottom: 1rem;">
                <p>Votre partenaire expert en énergie. Nous vous accompagnons dans tous vos projets énergétiques : du courtage en électricité et gaz aux travaux de rénovation énergétique.</p>
                <div style="margin-top: 1rem;">
                    <a href="#" style="color: #10b981; margin-right: 1rem;">Facebook</a>
                    <a href="#" style="color: #10b981; margin-right: 1rem;">Instagram</a>
                    <a href="#" style="color: #10b981;">Twitter</a>
                </div>
            </div>
            <div class="footer-section">
                <h3>Navigation</h3>
                <ul class="footer-links">
                    <li><a href="../index.html">Accueil</a></li>
                    <li><a href="../solutions.html">Nos Solutions</a></li>
                    <li><a href="../realisations.html">Réalisations</a></li>
                    <li><a href="../aides-subventions.html">Aides Financières</a></li>
                    <li><a href="../blog.html" class="blog">Blog</a></li>
                    <li><a href="../devenir-partenaire.html" class="services">Devenir Partenaire</a></li>
                    <li><a href="../contact.html" class="contact">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3>Contact</h3>
                <p>📞 <a href="tel:0745058029" style="color: #10b981;">07 45 05 80 29</a></p>
                <p>📧 <a href="mailto:direction@oranergy.com" style="color: #10b981;">direction@oranergy.com</a></p>
                <p>📍 1 rue du Pré Saint Gervais  \n93500 Pantin</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2024 Ora Nergy. Tous droits réservés.</p>
            <div style="margin-top: 0.5rem;">
                <a href="#" style="color: #9ca3af; margin-right: 1rem;">Mentions légales</a>
                <a href="#" style="color: #9ca3af; margin-right: 1rem;">Politique de confidentialité</a>
                <a href="#" style="color: #9ca3af;">Cookies</a>
            </div>
        </div>
    </footer>

    <script src="../js/main.js"></script>
</body>
</html>
"""
                f_html.write(html_content )

    # Sort posts by date (newest first)
    posts.sort(key=lambda x: x.get('date', '0000-00-00'), reverse=True)

    # Create index.json with simplified post data for the blog listing page
    index_posts = []
    for post in posts:
        index_posts.append({
            'title': post['title'],
            'author': post['author'],
            'date': post['date'],
            'image': post['image'],
            'description': post['description'],
            'slug': post['slug']
        })

    with open(INDEX_FILE, 'w', encoding='utf-8') as f:
        json.dump(index_posts, f, indent=2, ensure_ascii=False)

    print(f"Generated {len(posts)} blog posts and {INDEX_FILE}")

if __name__ == '__main__':
    generate_blog()

