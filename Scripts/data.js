function LoadGames(id,JsonFile){
  fetch(JsonFile)
      .then(response => response.json())
      .then(gameImages => {
        const gameList = document.getElementById(id);

        gameImages.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "Image du jeu Mario";
            gameList.appendChild(img);
        });
      })
    .catch(error => console.error("Erreur lors du chargement des jeux :", error));
}

LoadGames("mario-games", "../Data/mario-games.json");
LoadGames("luigi-games", "../Data/luigi-games.json");
LoadGames("peach-games", "../Data/peach-games.json");
LoadGames("toad-games", "../Data/toad-games.json");
LoadGames("bowser-games", "../Data/bowser-games.json");