# Extract metadata (assuming YAML front matter or similar structure)
# For simplicity, let's assume the first line is the title and the second is the description
lines = content.split('\n')
title = lines[0].replace('# ', '').strip() if lines else 'No Title'
description = lines[1].strip() if len(lines) > 1 else 'No Description'
image = "/images/default-blog-image.jpg" # Placeholder for image

html_content = markdown.markdown(content)

slug = os.path.basename(markdown_file_path).replace('.md', '')
output_html_file = os.path.join('blog', f'{slug}.html')

# Basic HTML template
html_template = f"""
os.makedirs(os.path.dirname(output_html_file), exist_ok=True)
with open(output_html_file, 'w', encoding='utf-8') as f:
    f.write(html_template)

return {
    'title': title,
    'description': description,
    'image': image,
    'slug': slug
}
# Create dummy markdown files if they don't exist
dummy_posts = [
    ('avantages-pompe-a-chaleur.md', '# Les Avantages de la Pompe à Chaleur\nDécouvrez comment les pompes à chaleur peuvent transformer votre consommation énergétique.'),
    ('isolation-thermique-essentielle.md', '# L\'Isolation Thermique est Essentielle\nComprendre l\'importance d\'une bonne isolation pour votre maison.'),
    ('panneaux-photovoltaiques-energie-solaire.md', '# Panneaux Photovoltaïques : L\'Énergie Solaire à Portée de Main\nExplorez les bénéfices des panneaux solaires pour une énergie durable.')
]

for filename, content in dummy_posts:
    filepath = os.path.join(blog_dir, filename)
    if not os.path.exists(filepath):
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

for filename in os.listdir(blog_dir):
    if filename.endswith('.md'):
        filepath = os.path.join(blog_dir, filename)
        post_data = generate_blog_post(filepath)
        blog_posts_data.append(post_data)

with open(os.path.join(blog_dir, 'index.json'), 'w', encoding='utf-8') as f:
    json.dump(blog_posts_data, f, indent=4)

print(f"Generated {len(blog_posts_data)} blog posts and {os.path.join(blog_dir, 'index.json')}")
