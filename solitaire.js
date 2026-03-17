// Solitaire Game Logic
(function() {
    'use strict';

    const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suitSymbols = {
        hearts: '♥',
        diamonds: '♦',
        clubs: '♣',
        spades: '♠'
    };

    let tableau = [[], [], [], [], [], [], []];
    let foundation = [[], [], [], []];
    let stock = [];
    let waste = [];
    let moves = 0;
    let selectedCard = null;

    // Create a deck of cards
    function createDeck() {
        const deck = [];
        suits.forEach(suit => {
            ranks.forEach(rank => {
                deck.push({
                    id: `${suit}-${rank}`,
                    suit: suit,
                    rank: rank,
                    color: (suit === 'hearts' || suit === 'diamonds') ? 'red' : 'black',
                    faceUp: false
                });
            });
        });
        return shuffleDeck(deck);
    }

    // Shuffle deck
    function shuffleDeck(deck) {
        const newDeck = [...deck];
        for (let i = newDeck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newDeck[i], newDeck[j]] = [newDeck[j], newDeck[i]];
        }
        return newDeck;
    }

    // Initialize game
    function initializeGame() {
        const deck = createDeck();
        tableau = [[], [], [], [], [], [], []];
        foundation = [[], [], [], []];
        waste = [];
        moves = 0;
        selectedCard = null;

        let deckIndex = 0;
        for (let col = 0; col < 7; col++) {
            for (let row = 0; row <= col; row++) {
                const card = deck[deckIndex++];
                if (row === col) {
                    card.faceUp = true;
                }
                tableau[col].push(card);
            }
        }

        stock = deck.slice(deckIndex);
        updateDisplay();
    }

    // Draw from stock
    function drawFromStock() {
        if (stock.length === 0) {
            stock = waste.reverse().map(card => ({ ...card, faceUp: false }));
            waste = [];
        } else {
            const card = stock.pop();
            card.faceUp = true;
            waste.push(card);
        }
        moves++;
        updateDisplay();
    }

    // Check if card can be placed on foundation
    function canPlaceOnFoundation(card, foundationPile) {
        if (foundationPile.length === 0) {
            return card.rank === 'A';
        }
        const topCard = foundationPile[foundationPile.length - 1];
        const rankIndex = ranks.indexOf(card.rank);
        const topRankIndex = ranks.indexOf(topCard.rank);
        return card.suit === topCard.suit && rankIndex === topRankIndex + 1;
    }

    // Check if card can be placed on tableau
    function canPlaceOnTableau(card, tableauPile) {
        if (tableauPile.length === 0) {
            return card.rank === 'K';
        }
        const topCard = tableauPile[tableauPile.length - 1];
        if (!topCard.faceUp) return false;
        const rankIndex = ranks.indexOf(card.rank);
        const topRankIndex = ranks.indexOf(topCard.rank);
        return card.color !== topCard.color && rankIndex === topRankIndex - 1;
    }

    // Move to foundation
    function moveToFoundation(card, sourceType, sourceIndex) {
        const foundationIndex = foundation.findIndex(pile => 
            pile.length === 0 || pile[0].suit === card.suit
        );

        if (foundationIndex !== -1 && canPlaceOnFoundation(card, foundation[foundationIndex])) {
            foundation[foundationIndex].push(card);

            if (sourceType === 'waste') {
                waste.pop();
            } else if (sourceType === 'tableau') {
                tableau[sourceIndex].pop();
                if (tableau[sourceIndex].length > 0) {
                    tableau[sourceIndex][tableau[sourceIndex].length - 1].faceUp = true;
                }
            }
            moves++;
            return true;
        }
        return false;
    }

    // Create card element
    function createCardElement(card) {
        const cardEl = document.createElement('div');
        cardEl.className = `card ${card.faceUp ? card.color : 'face-down'}`;
        cardEl.dataset.cardId = card.id;

        if (card.faceUp) {
            const suitEl = document.createElement('span');
            suitEl.className = 'card-suit';
            suitEl.textContent = suitSymbols[card.suit];

            const rankEl = document.createElement('span');
            rankEl.className = 'card-rank';
            rankEl.textContent = card.rank;

            cardEl.appendChild(suitEl);
            cardEl.appendChild(rankEl);
        } else {
            cardEl.textContent = '🂠';
        }

        return cardEl;
    }

    // Update display
    function updateDisplay() {
        // Update moves counter
        document.getElementById('movesCount').textContent = moves;

        // Update stock pile
        const stockPile = document.getElementById('stockPile');
        stockPile.innerHTML = '';
        if (stock.length > 0) {
            const topCard = stock[stock.length - 1];
            const cardEl = createCardElement(topCard);
            cardEl.addEventListener('click', drawFromStock);
            stockPile.appendChild(cardEl);
        }

        // Update waste pile
        const wastePile = document.getElementById('wastePile');
        wastePile.innerHTML = '';
        if (waste.length > 0) {
            const topCard = waste[waste.length - 1];
            const cardEl = createCardElement(topCard);
            cardEl.addEventListener('click', () => {
                if (moveToFoundation(topCard, 'waste')) {
                    updateDisplay();
                }
            });
            wastePile.appendChild(cardEl);
        }

        // Update foundation piles
        document.querySelectorAll('.foundation-pile').forEach((pile, index) => {
            pile.innerHTML = '';
            if (foundation[index].length > 0) {
                const topCard = foundation[index][foundation[index].length - 1];
                const cardEl = createCardElement(topCard);
                pile.appendChild(cardEl);
            }
        });

        // Update tableau piles
        document.querySelectorAll('.tableau-pile').forEach((pile, colIndex) => {
            pile.innerHTML = '';
            tableau[colIndex].forEach((card, cardIndex) => {
                const cardEl = createCardElement(card);
                cardEl.style.position = 'relative';
                cardEl.style.top = `${cardIndex * 20}px`;
                
                if (card.faceUp) {
                    cardEl.addEventListener('click', () => {
                        if (moveToFoundation(card, 'tableau', colIndex)) {
                            updateDisplay();
                        }
                    });
                }
                
                pile.appendChild(cardEl);
            });
        });

        // Check for win
        const totalFoundationCards = foundation.reduce((sum, pile) => sum + pile.length, 0);
        if (totalFoundationCards === 52) {
            setTimeout(() => {
                alert(`🎉 Congratulations! You won in ${moves} moves!`);
            }, 300);
        }
    }

    // Initialize when DOM is loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            const newGameBtn = document.getElementById('newGameBtn');
            if (newGameBtn) {
                newGameBtn.addEventListener('click', initializeGame);
                initializeGame();
            }
        });
    } else {
        const newGameBtn = document.getElementById('newGameBtn');
        if (newGameBtn) {
            newGameBtn.addEventListener('click', initializeGame);
            initializeGame();
        }
    }
})();
