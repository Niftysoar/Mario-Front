function toggleCard(cardId) {
    const card = document.getElementById(cardId);
    const allCards = document.querySelectorAll('.card');

    const isClosed = card.classList.contains('closed');

    // Ferme toutes les cartes
    allCards.forEach(c => c.classList.add('closed'));

    if (isClosed) {
      // Scroll jusqu'à la carte avant de l'ouvrir
      card.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Déplie après un court délai
      setTimeout(() => {
        card.classList.remove('closed');
      }, 300); // Ajustable selon ta préférence
    }
}


function toggleMenu() {
      const menu = document.getElementById("mobileMenu");
      menu.classList.toggle("active");
}