import os
import json
import markdown
import sys

BLOG_DIR = 'blog'
OUTPUT_DIR = 'blog'
INDEX_FILE = os.path.join(OUTPUT_DIR, 'index.json')
LOG_FILE = 'build_log.txt'

def log_message(message):
    with open(LOG_FILE, 'a', encoding='utf-8') as f:
        f.write(message + '\n')
    print(message)

def generate_blog():
    log_message("Starting blog generation...")
    posts = []
    try:
        if not os.path.exists(OUTPUT_DIR):
            os.makedirs(OUTPUT_DIR)
            log_message(f"Created output directory: {OUTPUT_DIR}")

        if not os.path.exists(BLOG_DIR):
            os.makedirs(BLOG_DIR)
            log_message(f"Created blog directory: {BLOG_DIR}")

        # Create dummy markdown files if they don't exist
        dummy_posts = [
            ('avantages-pompe-a-chaleur.md', '---\ntitle: Les Avantages d\'une Pompe à Chaleur\nauthor: Ora Nergy\ndate: 2025-09-29\nimage: https://res.cloudinary.com/dz3jyphfi/image/upload/v1759161985/pompe-a-chaleur.png\ndescription: Découvrez comment les pompes à chaleur peuvent transformer votre consommation énergétique.\n---\n# Les Avantages d\'une Pompe à Chaleur\n\nLes pompes à chaleur (PAC ) sont des systèmes de chauffage et de climatisation de plus en plus populaires en raison de leur efficacité énergétique et de leur impact environnemental réduit. Elles puisent les calories présentes dans l\'environnement (air, eau, sol) pour les restituer sous forme de chaleur dans votre habitation.\n\n## Économies d\'énergie substantielles\n\nL\'un des principaux avantages des PAC est leur capacité à réduire considérablement vos factures d\'énergie. Grâce à un coefficient de performance (COP) élevé, une PAC produit plus d\'énergie qu\'elle n\'en consomme. Par exemple, pour 1 kWh d\'électricité consommée, une PAC peut restituer 3 à 5 kWh de chaleur.\n\n## Confort thermique optimal\n\nLes PAC offrent un confort thermique constant et homogène. Elles peuvent être utilisées pour le chauffage en hiver et, pour les modèles réversibles, pour la climatisation en été, assurant une température agréable toute l\'année.\n\n## Respect de l\'environnement\n\nEn utilisant des énergies renouvelables (air, eau, sol), les pompes à chaleur contribuent à réduire les émissions de gaz à effet de serre. Elles sont une solution écologique pour un habitat plus durable.\n\n## Aides et subventions\n\nL\'installation d\'une pompe à chaleur est éligible à diverses aides financières de l\'État et des collectivités locales, ce qui rend l\'investissement initial plus abordable. N\'hésitez pas à nous contacter pour en savoir plus sur les dispositifs existants.\n'),
            ('isolation-thermique-essentielle.md', '---\ntitle: L\'Isolation Thermique : Un Pilier de la Rénovation Énergétique\nauthor: Ora Nergy\ndate: 2025-09-28\nimage: https://res.cloudinary.com/dz3jyphfi/image/upload/v1759161985/isolation-thermique.png\ndescription: L\'isolation est la clé pour réduire vos pertes de chaleur et améliorer votre confort.\n---\n# L\'Isolation Thermique : Un Pilier de la Rénovation Énergétique\n\nL\'isolation thermique est la première étape indispensable de toute rénovation énergétique. Une bonne isolation permet de limiter les déperditions de chaleur en hiver et de conserver la fraîcheur en été, réduisant ainsi vos besoins en chauffage et en climatisation.\n\n## Réduction des factures d\'énergie\n\nJusqu\'à 30% des pertes de chaleur d\'une maison se font par le toit. Une isolation efficace des combles, des murs et des sols peut entraîner des économies significatives sur vos factures d\'énergie, parfois jusqu\'à 30% à 50%.\n\n## Amélioration du confort\n\nUne maison bien isolée est une maison plus confortable. Fini les courants d\'air et les zones froides ! L\'isolation assure une température homogène dans toutes les pièces et améliore l\'acoustique de votre logement.\n\n## Valorisation de votre bien immobilier\n\nUn logement avec une bonne performance énergétique est plus attractif sur le marché immobilier. L\'isolation est un investissement qui valorise votre patrimoine et améliore son diagnostic de performance énergétique (DPE ).\n\n## Impact environnemental positif\n\nEn réduisant votre consommation d\'énergie, vous diminuez votre empreinte carbone et contribuez à la lutte contre le réchauffement climatique. L\'isolation est un geste simple et efficace pour la planète.\n'),
            ('panneaux-photovoltaiques-energie-solaire.md', '---\ntitle: Panneaux Photovoltaïques : L\'Énergie Solaire à Portée de Main\nauthor: Ora Nergy\ndate: 2025-09-27\nimage: https://res.cloudinary.com/dz3jyphfi/image/upload/v1759161985/panneaux-solaires.png\ndescription: Explorez les bénéfices des panneaux solaires pour une énergie durable.\n---\n# Panneaux Photovoltaïques : L\'Énergie Solaire à Portée de Main\n\nLes panneaux photovoltaïques transforment la lumière du soleil en électricité, offrant une solution durable et économique pour alimenter votre foyer ou votre entreprise. C\'est un investissement qui s\'inscrit dans une démarche de transition énergétique.\n\n## Indépendance énergétique\n\nProduire votre propre électricité vous permet de réduire votre dépendance vis-à-vis des fournisseurs d\'énergie traditionnels et des fluctuations des prix du marché. Vous devenez acteur de votre consommation.\n\n## Réduction des factures d\'électricité\n\nEn consommant l\'électricité que vous produisez, vous diminuez considérablement le montant de vos factures. L\'excédent de production peut même être revendu, générant ainsi un revenu complémentaire.\n\n## Impact environnemental minimal\n\nL\'énergie solaire est une énergie propre et renouvelable. L\'installation de panneaux photovoltaïques contribue à la réduction des émissions de CO2 et à la protection de l\'environnement.\n\n## Valorisation immobilière\n\nUn bien équipé de panneaux solaires est plus attractif et prend de la valeur sur le marché immobilier. C\'est un atout majeur pour la revente de votre propriété.\n' )
        ]

        for filename, content in dummy_posts:
            filepath = os.path.join(BLOG_DIR, filename)
            if not os.path.exists(filepath):
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(content)
                log_message(f"Created dummy post: {filepath}")

        for filename in os.listdir(BLOG_DIR):
            if filename.endswith('.md'):
                filepath = os.path.join(BLOG_DIR, filename)
                log_message(f"Processing markdown file: {filepath}")
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                parts = content.split('---', 2)
                if len(parts) < 3:
                    log_message(f"Warning: Skipping {filename} due to missing front matter.")
                    continue

                front_matter_raw = parts[1]
                body_markdown = parts[2]

                metadata = {}
                for line in front_matter_raw.split('\n'):
                    if ':' in line:
                        key, value = line.split(':', 1)
                        metadata[key.strip()] = value.strip().strip("'")
                
                body_html = markdown.markdown(body_markdown)

                slug = filename.replace('.md', '')
                post_data = {
                    'title': metadata.get('title', 'Untitled'),
                    'author': metadata.get('author', 'Unknown'),
                    'date': metadata.get('date', 'YYYY-MM-DD'),
                    'image': metadata.get('image', ''),
                    'description': metadata.get('description', ''),
                    'slug': slug
                }
                posts.append(post_data)

                # Generate individual HTML pages for each blog post
                output_html_path = os.path.join(OUTPUT_DIR, f'{slug}.html')
                html_content = f"""
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{post_data['title']} - Ora Nergy Blog</title>
    <meta name="description" content="{post_data['description']}">
    <link rel="icon" type="image/png" href="https://res.cloudinary.com/dz3jyphfi/image/upload/v1758888354/ora-nergy-favicon_aok5oa.png">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
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

    <header class="blog-header" style="background-image: url('{post_data['image']}' )">
        <div class="blog-header-content">
            <h1>{post_data['title']}</h1>
            <p class="blog-meta">Par {post_data['author']} le {post_data['date']}</p>
        </div>
    </header>

    <main class="blog-post-content">
        <div class="container">
            {body_html}
        </div>
    </main>

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
                with open(output_html_path, 'w', encoding='utf-8' ) as f_html:
                    f_html.write(html_content)
                log_message(f"Generated HTML for {slug}.html")
            except Exception as e:
                log_message(f"Error processing {filename}: {e}")

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
        log_message(f"Generated {len(posts)} blog posts and {INDEX_FILE}")

    except Exception as e:
        log_message(f"An unexpected error occurred during blog generation: {e}")
        sys.exit(1)

    log_message("Blog generation completed.")

if __name__ == '__main__':
    generate_blog()
