fetch("../Data/mario-games.json")
    // Quand le fichier est bien trouvé, on convertit la réponse en JSON
    .then(response => response.json())

    .then(gameImages => {
        // On sélectionne l'endroit où insérer les images
        const gameList = document.querySelector(".card-games");

        // Pour chaque URL d’image récupérée...
        gameImages.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Image du jeu Mario";

            // On ajoute l’image à la liste des jeux
            gameList.appendChild(img);
        });
    })
    .catch(error => console.error("Erreur lors du chargement des jeux :", error));