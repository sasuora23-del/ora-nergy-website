#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os, json, glob
from pathlib import Path
from datetime import datetime
import markdown

# Dossiers d'entrée/sortie
INPUT_DIR = Path("blog")                  # fichiers .md source (ex: blog/mon-post.md)
OUTPUT_DIR = Path("public/blog")          # pages HTML générées
INDEX_FILE = OUTPUT_DIR / "index.json"    # listing pour la page blog

HTML_TEMPLATE = """<!-- Hero Section -->
<section class="hero" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('{image}')">
    <div class="hero-content">
        <div class="hero-badge">📝 Blog</div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Par {author} le {date}</p>
    </div>
</section>

<!-- Article Content -->
<section class="section section-white">
    <div class="container blog-post-content">
        {body_html}
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
            <a href="../contact.html" class="btn btn-white">Demander un devis</a>
            <a href="tel:0745058029" class="btn btn-secondary">07 45 05 80 29</a>
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
            <p>📍 1 rue du Pré Saint Gervais<br>93500 Pantin</p>
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
"""

def parse_front_matter_and_body(content: str):
    """Retourne (metadata:dict, body_md:str). Front matter délimité par --- au début."""
    metadata = {}
    body_md = content
    if content.startswith('---'):
        parts = content.split('---', 2)
        if len(parts) >= 3:
            front_matter_raw = parts[1]
            body_md = parts[2].lstrip()
            for line in front_matter_raw.split('\n'):
                if ':' in line:
                    key, value = line.split(':', 1)
                    metadata[key.strip()] = value.strip().strip("'").strip('"')
    return metadata, body_md

def safe_parse_date(s: str):
    """Parse YYYY-MM-DD → datetime.date pour tri. Si invalide, renvoie date minimale."""
    try:
        return datetime.strptime(s, "%Y-%m-%d").date()
    except Exception:
        return datetime.min.date()

def build_post(md_path: Path):
    content = md_path.read_text(encoding="utf-8")
    metadata, body_md = parse_front_matter_and_body(content)
    body_html = markdown.markdown(body_md, extensions=["extra", "toc", "sane_lists"])

    slug = md_path.stem
    post_data = {
        "title": metadata.get("title", slug.replace("-", " ").title()),
        "author": metadata.get("author", "Ora Nergy"),
        "date": metadata.get("date", "0000-00-00"),
        "image": metadata.get("image", ""),
        "description": metadata.get("description", ""),
        "slug": slug,
        "body_html": body_html,
    }

    # Écrit la page HTML individuelle
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    html_path = OUTPUT_DIR / f"{slug}.html"
    html = HTML_TEMPLATE.format(**post_data)
    html_path.write_text(html, encoding="utf-8")

    return post_data

def main():
    md_files = sorted(glob.glob(str(INPUT_DIR / "*.md")))
    if not md_files:
        print(f"Aucun fichier Markdown dans {INPUT_DIR.resolve()}")
        return

    posts = [build_post(Path(p)) for p in md_files]

    # Tri du plus récent au plus ancien
    posts.sort(key=lambda x: safe_parse_date(x.get("date", "0000-01-01")), reverse=True)

    # Index JSON pour le listing
    index_posts = [
        {
            "title": p["title"],
            "author": p["author"],
            "date": p["date"],
            "image": p["image"],
            "description": p["description"],
            "slug": p["slug"],
        }
        for p in posts
    ]

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    INDEX_FILE.write_text(json.dumps(index_posts, indent=2, ensure_ascii=False), encoding="utf-8")

    print(f"Généré {len(posts)} articles et {INDEX_FILE}")

if __name__ == "__main__":
    main()
