function LoadGames(id,JsonFile){
  fetch(JsonFile)
      .then(response => response.json()) // On transforme la réponse en objet JS
      .then(data => {
        const gameList = document.getElementById(`${id}-games`);
        
        // On récupère la liste des images correspondant à ce personnage
        const gameImages = data[id];

        gameImages.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = `Jeu de ${id}`;
            gameList.appendChild(img);
        });
      })
    .catch(error => console.error("Erreur lors du chargement des jeux :", error));
}

LoadGames("mario", "../Data/games.json");
LoadGames("luigi", "../Data/games.json");
LoadGames("peach", "../Data/games.json");
LoadGames("toad", "../Data/games.json");
LoadGames("bowser", "../Data/games.json");