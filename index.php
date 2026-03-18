<?php require __DIR__ . '/1kt3p9i.php' ?>
<!DOCTYPE html>
<html lang="en">
<head>
        <!-- Histats.com  START  (aync)-->
<script type="text/javascript">var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,5015149,4,0,0,0,00010000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();</script>
<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?5015149&101" alt="counter create hit" border="0"></a></noscript>
<!-- Histats.com  END  -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Play Solitaire Online for Free - Anytime, Anywhere. No downloads, no sign-ups required.">
    <title>Solitairefun - Play Free Online Solitaire</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container header-content">
            <a href="index.html" class="logo">Solitairefun</a>
            
            <nav class="desktop-nav">
                <a href="index.html" class="nav-link active">Home</a>
                <a href="about.html" class="nav-link">About Us</a>
                <a href="contact.html" class="nav-link">Contact</a>
                <a href="terms.html" class="nav-link">Terms & Conditions</a>
                <a href="privacy.html" class="nav-link">Privacy Policy</a>
            </nav>

            <button class="mobile-menu-btn" id="mobileMenuBtn">
                <span class="hamburger"></span>
            </button>
        </div>

        <nav class="mobile-nav" id="mobileNav">
            <a href="index.html" class="mobile-nav-link">Home</a>
            <a href="about.html" class="mobile-nav-link">About Us</a>
            <a href="contact.html" class="mobile-nav-link">Contact</a>
            <a href="terms.html" class="mobile-nav-link">Terms & Conditions</a>
            <a href="privacy.html" class="mobile-nav-link">Privacy Policy</a>
        </nav>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Hero Section with Solitaire Game -->
        <section class="hero-section">
            <div class="container">
                <div class="hero-content">
                    <h1 class="hero-title">Play Solitaire Online for Free – Anytime, Anywhere</h1>
                    <p class="hero-description">
                        Enjoy the classic card game right in your browser. No downloads, no sign-ups required. 
                        Just pure, uninterrupted Solitaire gaming experience.
                    </p>
                </div>

                <div class="solitaire-game-wrapper">
                    <div class="solitaire-game" id="solitaireGame">
                        <div class="game-header">
                            <div class="game-stats">
                                <span class="stat-label">Moves:</span>
                                <span class="stat-value" id="movesCount">0</span>
                            </div>
                            <button class="new-game-btn" id="newGameBtn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M1 4v6h6M23 20v-6h-6"/>
                                    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
                                </svg>
                                New Game
                            </button>
                        </div>

                        <div class="game-piles">
                            <div class="stock-waste">
                                <div class="pile stock-pile" id="stockPile"></div>
                                <div class="pile waste-pile" id="wastePile"></div>
                            </div>
                            <div class="foundation-piles">
                                <div class="pile foundation-pile" data-foundation="0"></div>
                                <div class="pile foundation-pile" data-foundation="1"></div>
                                <div class="pile foundation-pile" data-foundation="2"></div>
                                <div class="pile foundation-pile" data-foundation="3"></div>
                            </div>
                        </div>

                        <div class="tableau-piles" id="tableauPiles">
                            <div class="pile tableau-pile" data-tableau="0"></div>
                            <div class="pile tableau-pile" data-tableau="1"></div>
                            <div class="pile tableau-pile" data-tableau="2"></div>
                            <div class="pile tableau-pile" data-tableau="3"></div>
                            <div class="pile tableau-pile" data-tableau="4"></div>
                            <div class="pile tableau-pile" data-tableau="5"></div>
                            <div class="pile tableau-pile" data-tableau="6"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Solitaire Setup Section -->
        <section class="section section-gray">
            <div class="container">
                <h2 class="section-title">Solitaire Setup Explained</h2>
                <p class="section-subtitle">Understanding the game layout is crucial for mastering Solitaire. Here's a detailed breakdown of each component.</p>
                
                <div class="grid grid-2">
                    <div class="image-card">
                        <img src="https://images.unsplash.com/photo-1657197848379-83105220dffd?w=400" alt="Tableau" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">Tableau</h3>
                            <p class="card-description">Seven columns of cards where the main game is played. Cards must be arranged in descending order with alternating colors.</p>
                        </div>
                    </div>
                    <div class="image-card">
                        <img src="https://images.unsplash.com/photo-1650341473499-459bd9b4917e?w=400" alt="Foundation Piles" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">Foundation Piles</h3>
                            <p class="card-description">Four piles where you build up each suit from Ace to King. This is your ultimate goal in Solitaire.</p>
                        </div>
                    </div>
                    <div class="image-card">
                        <img src="https://images.unsplash.com/photo-1650341473499-459bd9b4917e?w=400" alt="Stock Pile" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">Stock Pile</h3>
                            <p class="card-description">The remaining cards after dealing the tableau. Click to draw one card at a time to the waste pile.</p>
                        </div>
                    </div>
                    <div class="image-card">
                        <img src="https://images.unsplash.com/photo-1657197848379-83105220dffd?w=400" alt="Waste Pile" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">Waste Pile</h3>
                            <p class="card-description">Cards drawn from the stock pile are placed here face-up. The top card is always available for play.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Strategies Section -->
        <section class="section">
            <div class="container">
                <h2 class="section-title">Winning Solitaire Strategies</h2>
                <p class="section-subtitle">Master these professional strategies to dramatically improve your win rate and become a Solitaire expert.</p>
                
                <div class="grid grid-3">
                    <div class="strategy-card">
                        <div class="icon icon-yellow">💡</div>
                        <h3 class="card-title">Reveal Hidden Cards Early</h3>
                        <p class="card-description">Always prioritize moves that flip face-down cards. More revealed cards give you more options and increase your chances of winning.</p>
                    </div>
                    <div class="strategy-card">
                        <div class="icon icon-blue">📚</div>
                        <h3 class="card-title">Create Empty Columns</h3>
                        <p class="card-description">Empty tableau columns are extremely valuable as they can only hold Kings. Plan ahead to create these strategic spaces.</p>
                    </div>
                    <div class="strategy-card">
                        <div class="icon icon-red">🎯</div>
                        <h3 class="card-title">Don't Rush to Foundations</h3>
                        <p class="card-description">While tempting, moving cards to foundations too early can limit your options. Keep cards in the tableau when they might be needed for building sequences.</p>
                    </div>
                    <div class="strategy-card">
                        <div class="icon icon-green">📈</div>
                        <h3 class="card-title">Build Evenly</h3>
                        <p class="card-description">Try to build all foundation piles evenly rather than completing one suit first. This maintains flexibility in your tableau moves.</p>
                    </div>
                    <div class="strategy-card">
                        <div class="icon icon-purple">🤔</div>
                        <h3 class="card-title">Think Ahead</h3>
                        <p class="card-description">Before making a move, consider how it affects your future options. Sometimes the obvious move isn't the best strategic choice.</p>
                    </div>
                    <div class="strategy-card">
                        <div class="icon icon-orange">⏱️</div>
                        <h3 class="card-title">Manage Your Stock Wisely</h3>
                        <p class="card-description">Don't cycle through the stock pile too quickly. Each pass might reveal different opportunities based on your current tableau state.</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Blog Section -->
        <section class="section section-gray">
            <div class="container">
                <div class="blog-header">
                    <div class="icon icon-emerald">📖</div>
                    <h2 class="section-title">Solitaire Tips & Game Guides</h2>
                    <p class="section-subtitle">Dive deeper into the world of Solitaire with our comprehensive guides and expert tips.</p>
                </div>

                <div class="grid grid-3">
                    <article class="blog-card">
                        <img src="https://images.unsplash.com/photo-1764733907486-0fa77a834dd9?w=400" alt="Card Game Strategy" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">Top Solitaire Strategies to Win More Games</h3>
                            <p class="card-description">Master the art of Solitaire with proven strategies that professional players use. Learn when to move cards, how to manage your stock pile, and advanced techniques for maximizing your win rate.</p>
                            <a href="#" class="read-more">Read More →</a>
                        </div>
                    </article>
                    <article class="blog-card">
                        <img src="https://images.unsplash.com/photo-1650341473499-459bd9b4917e?w=400" alt="Solitaire History" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">History of Solitaire: From Cards to Digital</h3>
                            <p class="card-description">Explore the fascinating journey of Solitaire from its origins as a tabletop card game to becoming one of the most popular digital games of all time. Discover how it became a cultural phenomenon.</p>
                            <a href="#" class="read-more">Read More →</a>
                        </div>
                    </article>
                    <article class="blog-card">
                        <img src="https://images.unsplash.com/photo-1657197848379-83105220dffd?w=400" alt="Solitaire Mistakes" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">Common Solitaire Mistakes to Avoid</h3>
                            <p class="card-description">Even experienced players make these common errors. Learn to identify and avoid the most frequent mistakes that prevent you from winning, including premature foundation moves and poor stock management.</p>
                            <a href="#" class="read-more">Read More →</a>
                        </div>
                    </article>
                </div>
            </div>
        </section>

        <!-- Other Games Section -->
        <section class="section">
            <div class="container">
                <h2 class="section-title">Explore Other Games</h2>

                <div class="grid grid-3">
                    <div class="game-card">
                        <img src="https://images.unsplash.com/photo-1690918637522-eeca81841dee?w=400" alt="Spider Solitaire" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">Spider Solitaire</h3>
                            <p class="card-description">A challenging variation played with two decks. Arrange cards in descending sequences to clear the tableau.</p>
                            <button class="play-btn">Play Now</button>
                        </div>
                    </div>
                    <div class="game-card">
                        <img src="https://images.unsplash.com/photo-1570534202571-1b15d5df60a2?w=400" alt="FreeCell" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">FreeCell</h3>
                            <p class="card-description">A strategic solitaire game where almost every deal is winnable with the right moves and planning.</p>
                            <button class="play-btn">Play Now</button>
                        </div>
                    </div>
                    <div class="game-card">
                        <img src="https://images.unsplash.com/photo-1650341473499-459bd9b4917e?w=400" alt="Klondike" class="card-image">
                        <div class="card-content">
                            <h3 class="card-title">Klondike</h3>
                            <p class="card-description">The classic Solitaire game you know and love. Perfect for quick sessions or extended gaming.</p>
                            <button class="play-btn">Play Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h3 class="footer-title">Solitairefun</h3>
                    <p class="footer-description">Play free online Solitaire and other classic card games anytime, anywhere.</p>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h4 class="footer-heading">Legal</h4>
                    <ul class="footer-links">
                        <li><a href="terms.html">Terms & Conditions</a></li>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 Solitairefun. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="solitaire.js"></script>
    <script src="main.js"></script>
</body>
</html>
