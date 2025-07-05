class CharacterCard {
    constructor(id, backgroundPattern) {
        this.card = document.getElementById(id);
        this.backgroundPattern = backgroundPattern;
    }

    applyBackground() {
        if (this.card) {
          this.card.style.backgroundImage = `url(${this.backgroundPattern})`;
        }
    }
}

// Liste des personnages avec leurs motifs de fond
const characters = [
      new CharacterCard("card-mario", "../Assets/Images/MarioHub_Characters_CharBtn_bg_Mario.png"),
      new CharacterCard("card-luigi", "../Assets/Images/MarioHub_Characters_CharBtn_bg_Luigi.png"),
      new CharacterCard("card-peach", "../Assets/Images/MarioHub_Characters_CharBtn_bg_Peach.png"),
      new CharacterCard("card-toad", "../Assets/Images/MarioHub_Characters_CharBtn_bg_Toad.png"),
      new CharacterCard("card-bowser", "../Assets/Images/MarioHub_Characters_CharBtn_bg_Bowser.png")
];

// Application des backgrounds
characters.forEach(character => character.applyBackground());