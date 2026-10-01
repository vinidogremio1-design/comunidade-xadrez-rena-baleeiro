:root {
  --bg: #0b1020;
  --bg-soft: #121b2f;
  --panel: #17223c;
  --panel-2: #1f2d4d;
  --text: #ecf1ff;
  --muted: #b7c4e6;
  --primary: #f4b942;
  --primary-dark: #d9981c;
  --accent: #79d9c5;
  --border: rgba(255,255,255,0.08);
  --shadow: 0 24px 60px rgba(0,0,0,0.22);
  --light-square: #f0d9a5;
  --dark-square: #b58863;
  --selected: rgba(255, 255, 0, 0.45);
  --legal: rgba(88, 218, 122, 0.45);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #0a1020 0%, #0e1730 100%);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

button,
a {
  font: inherit;
}

.container {
  width: min(1120px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
  background: rgba(11, 16, 32, 0.75);
  border-bottom: 1px solid var(--border);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 74px;
}

.brand {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: var(--muted);
  text-decoration: none;
  font-weight: 500;
}

.hero {
  padding: 5.5rem 0 4rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3rem;
}

.eyebrow {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--primary);
  margin-bottom: 1rem;
}

.eyebrow.dark {
  color: var(--primary-dark);
}

.hero-text h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
}

.hero-text p {
  max-width: 620px;
  color: var(--muted);
  font-size: 1.08rem;
  margin: 1.2rem 0 0;
}

.cta-group {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 999px;
  padding: 0.9rem 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.2s ease, opacity 0.2s ease;
  cursor: pointer;
}

.button:hover {
  transform: translateY(-2px);
}

.button.primary {
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
  color: #161616;
}

.button.secondary {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
}

.button.full {
  width: 100%;
}

.hero-card {
  background: linear-gradient(180deg, rgba(31,45,77,0.95) 0%, rgba(19,26,40,0.95) 100%);
  border: 1px solid var(--border);
  border-radius: 24px;
  padding: 2rem;
  box-shadow: var(--shadow);
}

.chess-board {
  position: relative;
  min-height: 240px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #d8ad5b 0%, #b57f2c 100%);
  border-radius: 20px;
  overflow: hidden;
  border: 8px solid rgba(255,255,255,0.08);
}

.chess-board::before {
  content: "";
  position: absolute;
  inset: 18px;
  background-image:
    linear-gradient(90deg, rgba(0,0,0,0.12) 0 50%, rgba(255,255,255,0.12) 50% 100%),
    linear-gradient(0deg, rgba(0,0,0,0.12) 0 50%, rgba(255,255,255,0.12) 50% 100%);
  background-size: 52px 52px;
  opacity: 0.7;
}

.piece {
  position: absolute;
  z-index: 1;
  font-size: clamp(2.4rem, 4vw, 4rem);
  filter: drop-shadow(0 14px 18px rgba(0,0,0,0.22));
}

.piece.black {
  color: #111827;
  left: 18%;
  top: 18%;
}

.piece.white {
  color: #f8f8f8;
  right: 20%;
  bottom: 18%;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1.25rem;
}

.stats div {
  background: rgba(255,255,255,0.03);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 1rem 0.6rem;
  text-align: center;
}

.stats strong {
  display: block;
  font-size: 1.15rem;
  color: var(--text);
}

.stats span {
  color: var(--muted);
  font-size: 0.82rem;
}

.section {
  padding: 5rem 0;
}

.section.alt {
  background: rgba(255,255,255,0.02);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.section-heading {
  margin-bottom: 2rem;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 2.7rem);
  line-height: 1.1;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

.card {
  background: rgba(23,34,60,0.8);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 1.5rem;
}

.card h3 {
  margin-top: 0;
  margin-bottom: 0.7rem;
  font-size: 1.35rem;
}

.card p {
  margin: 0;
  color: var(--muted);
}

.activities {
  display: grid;
  gap: 1rem;
}

.activity-item {
  display: grid;
  grid-template-columns: 72px 1fr;
  gap: 1rem;
  align-items: center;
  padding: 1.25rem 1.4rem;
  border-radius: 18px;
  background: rgba(23,34,60,0.8);
  border: 1px solid var(--border);
}

.activity-item span {
  width: 52px;
  height: 52px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: rgba(121, 217, 197, 0.12);
  color: var(--accent);
  font-weight: 800;
}

.activity-item h3 {
  margin: 0 0 0.25rem;
}

.activity-item p {
  margin: 0;
  color: var(--muted);
}

.cta-section {
  padding-top: 4.5rem;
}

.cta-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 2rem 2.25rem;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(244,185,66,0.12), rgba(121,217,197,0.08));
  border: 1px solid var(--border);
}

.cta-box h2 {
  margin: 0.35rem 0 0;
  font-size: clamp(1.8rem, 3vw, 2.6rem);
}

.site-footer {
  padding: 1.5rem 0 2.5rem;
  border-top: 1px solid var(--border);
}

.footer-content {
  color: var(--muted);
  font-size: 0.96rem;
}

.game-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.game-header {
  padding: 1.5rem 0 0.5rem;
}

.game-header-inner {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.back-link {
  color: var(--text);
  text-decoration: none;
  font-weight: 600;
}

.game-main {
  flex: 1;
  display: grid;
  place-items: center;
  padding: 2rem 0 3rem;
}

.game-layout {
  display: grid;
  grid-template-columns: minmax(320px, 580px) minmax(220px, 260px);
  gap: 2rem;
  align-items: start;
}

.board-panel,
.side-panel {
  width: 100%;
}

.board {
  width: min(100%, 640px);
  aspect-ratio: 1 / 1;
  display: grid;
  grid-template-columns: repeat(8, minmax(0, 1fr));
  background: #fff;
  border: 10px solid #1f2d4d;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.square {
  border: none;
  display: grid;
  place-items: center;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  padding: 0;
  cursor: pointer;
  position: relative;
}

.square.light {
  background: var(--light-square);
}

.square.dark {
  background: var(--dark-square);
}

.square.selected {
  box-shadow: inset 0 0 0 4px var(--selected);
}

.square.legal::after {
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--legal);
  opacity: 0.75;
}

.piece.white {
  color: #f5f7ff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.4);
}

.piece.black {
  color: #0d1220;
}

.side-panel {
  display: grid;
  gap: 1rem;
}

.panel-box {
  background: rgba(23,34,60,0.8);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 1rem 1.1rem;
}

.panel-label {
  margin: 0 0 0.6rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.72rem;
  font-weight: 700;
}

.panel-box h2 {
  margin: 0;
  font-size: clamp(1.2rem, 2vw, 1.7rem);
}

@media (max-width: 820px) {
  .hero-content,
  .feature-grid,
  .game-layout,
  .cta-box {
    grid-template-columns: 1fr;
    display: grid;
  }

  .nav {
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    padding: 0.8rem 0;
  }

  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero {
    padding-top: 4rem;
  }

  .cta-box {
    padding: 1.5rem;
  }
}

@media (max-width: 560px) {
  .stats {
    grid-template-columns: 1fr;
  }

  .activity-item {
    grid-template-columns: 1fr;
  }

  .cta-group {
    flex-direction: column;
  }

  .button {
    width: 100%;
  }

  .game-header-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (prefers-reduced-motion: reduce) {
  * {
    scroll-behavior: auto;
  }
}
