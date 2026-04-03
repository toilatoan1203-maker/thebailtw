/**
 * Memory Matching Game Logic
 * Author: Antigravity AI
 */

document.addEventListener('DOMContentLoaded', () => {
    const gameGrid = document.getElementById('game-grid');
    const movesDisplay = document.getElementById('moves');
    const resetBtn = document.getElementById('reset-btn');
    const winModal = document.getElementById('win-modal');
    const playAgainBtn = document.getElementById('play-again-btn');
    const finalMovesDisplay = document.getElementById('final-moves');
    const cardSelector = document.getElementById('card-selector');

    // Expanded icon library (8 unique pairs total)
    const allIcons = ['🍎', '🍌', '🍒', '🍇', '🍓', '🥑', '🍍', '🍑'];
    
    let flippedCards = [];
    let matchedCount = 0;
    let moves = 0;
    let isProcessing = false;
    let totalPairs = 4;

    /**
     * Shuffle array using Fisher-Yates algorithm
     */
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    /**
     * Initialize game
     */
    function initGame() {
        // Get number of cards from selector
        const cardCount = parseInt(cardSelector.value);
        totalPairs = cardCount / 2;

        // Reset state
        gameGrid.innerHTML = '';
        flippedCards = [];
        matchedCount = 0;
        moves = 0;
        isProcessing = false;
        movesDisplay.textContent = '0';
        winModal.classList.add('hidden');

        // Select and double the icons
        const selectedIcons = allIcons.slice(0, totalPairs);
        const gameIcons = [...selectedIcons, ...selectedIcons];
        
        // Shuffle icons
        const shuffledIcons = shuffle(gameIcons);

        // Create card elements
        shuffledIcons.forEach((icon, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.icon = icon;
            card.dataset.index = index;

            card.innerHTML = `
                <div class="card-inner">
                    <div class="card-front"></div>
                    <div class="card-back">${icon}</div>
                </div>
            `;

            card.addEventListener('click', () => handleCardClick(card));
            gameGrid.appendChild(card);
        });
    }

    /**
     * Handle card click
     */
    function handleCardClick(card) {
        // Prevent clicking if processing, already flipped, or matched
        if (isProcessing || card.classList.contains('is-flipped') || card.classList.contains('is-matched')) {
            return;
        }

        // Flip card
        card.classList.add('is-flipped');
        flippedCards.push(card);

        // If two cards are flipped
        if (flippedCards.length === 2) {
            moves++;
            movesDisplay.textContent = moves;
            checkMatch();
        }
    }

    /**
     * Check if flipped cards match
     */
    function checkMatch() {
        isProcessing = true;
        const [card1, card2] = flippedCards;

        if (card1.dataset.icon === card2.dataset.icon) {
            // Match found
            card1.classList.add('is-matched');
            card2.classList.add('is-matched');
            matchedCount++;
            
            // Flip back to design side to show the checkmark after a short delay
            setTimeout(() => {
                card1.classList.remove('is-flipped');
                card2.classList.remove('is-flipped');
                flippedCards = [];
                isProcessing = false;
            }, 800);

            // Check win condition
            if (matchedCount === totalPairs) {
                setTimeout(showWinModal, 1500);
            }
        } else {
            // No match - flip back after delay
            setTimeout(() => {
                card1.classList.remove('is-flipped');
                card2.classList.remove('is-flipped');
                flippedCards = [];
                isProcessing = false;
            }, 1000);
        }
    }

    /**
     * Show win modal
     */
    function showWinModal() {
        finalMovesDisplay.textContent = moves;
        winModal.classList.remove('hidden');
    }

    // Event Listeners
    resetBtn.addEventListener('click', initGame);
    playAgainBtn.addEventListener('click', initGame);
    cardSelector.addEventListener('change', initGame);

    // Initial Start
    initGame();
});
