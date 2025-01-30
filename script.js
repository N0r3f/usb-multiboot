// Fonction pour charger et afficher le contenu du README.md
function loadReadme() {
    fetch('README.md')
        .then(response => response.text())
        .then(text => {
            // Convertir le Markdown en HTML
            const converter = new showdown.Converter();
            const html = converter.makeHtml(text);
            
            // Insérer le HTML dans la page
            document.getElementById('readme-content').innerHTML = html;
        })
        .catch(error => {
            console.error('Erreur lors du chargement du README:', error);
            document.getElementById('readme-content').innerHTML = '<p>Erreur lors du chargement du README.</p>';
        });
}

// Charger le README lorsque la page est complètement chargée
document.addEventListener('DOMContentLoaded', loadReadme);
