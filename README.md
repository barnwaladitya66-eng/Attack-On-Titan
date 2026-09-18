# ⚔️ Attack on Titan (進撃の巨人) — Interactive 3D WebGL Compendium & Tactical Archive

[![Three.js](https://img.shields.io/badge/Three.js-r128-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![WebGL](https://img.shields.io/badge/WebGL-2.0-990000?style=for-the-badge&logo=webgl&logoColor=white)](https://www.khronos.org/webgl/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **"If you win, you live. If you lose, you die. If you don't fight, you can't win. Fight. Fight!"**  
> — *Eren Yeager*

An immersive, brutalist editorial archive and real-time **3D WebGL** interactive world dedicated to the universe of *Attack on Titan* (*Shingeki no Kyojin*). Built with pure vanilla JavaScript, Three.js, and modern CSS, combining authentic anime lore with high-performance 3D rendering.

---

## 🌟 Highlights & Key Features

### 🏰 1. Realistic 3D WebGL World (Three.js)
- **50-Meter Concentric Stone Walls**: Procedural 3D models of **Wall Maria** ($R=240\text{m}$), **Wall Rose** ($R=175\text{m}$), and **Wall Sina** ($R=115\text{m}$) built with canonical proportions, 10-meter walkway thickness, stone bump maps, top battlements (merlons/crenels), 16 cylindrical watchtowers, and Garrison artillery cannons.
- **Medieval Shiganshina Cityscape**: Detailed half-timbered stucco houses, pitched terracotta clay tile roofs, brick chimneys, church spires, and reflective river canals crossed by stone bridges.
- **Metaphysical Paths Tree (道)**: Towering crystalline cyan pillar with 16 Bezier luminous branches, glowing memory octahedrons, and over 1,000 orbiting astral sand particles.
- **Apex Titan Shifter Sculptures**: 3D pedestals with animated transformation lightning shaders (emerald and gold multi-segment electrical arcs).
- **Scout ODM Flight Simulation**: High-speed cinematic camera flight sweeps along the wall parapets with dynamic wind streak particles.
- **Interactive 3D Basement Vault**: Grisha Yeager's brass basement key puzzle with inspection controls.

### 📜 2. Lore & Interactive Archives
- **Regiment Aptitude Test (Onboarding Quiz)**: Interactive military evaluation system dynamically assigning recruits to the **Scout Regiment**, **Garrison**, **Military Police**, or **Cadet Corps** based on behavioral and tactical choices.
- **Nine Titan Shifters Dossier**: Comprehensive intelligence files on all 9 Titans (Founding, Attack, Colossal, Armored, Female, Beast, Jaw, Cart, War Hammer) with anatomical stats, combat abilities, and shifter inheritance lineage.
- **Classified Personnel Registry**: Filterable roster of Eldian military personnel, Marleyan Warriors, and Royal figures with clearance level indicators.
- **Historical Chronicle & Timeline**: Comprehensive chronological record from the Eldian Empire and Great Titan War to the Fall of Wall Maria and the Rumbling.
- **Wall Defense Radar**: Live interactive tactical radar showing Wall integrity, outer district status, and Titan breach alerts.

### 🎮 3. Tactical 3D HUD & Atmosphere Engine
- **`[Free Cam]`**: Unlocks full OrbitControls for 360° mouse rotation, panning, and zooming into any building or fortification.
- **`[ODM Flight]`**: Toggles high-speed cinematic Scout patrol camera sweeps.
- **`[Vault 3D]`**: Instant jump to the classified Basement Key examination room.
- **4 Dynamic Lighting Presets**:
  - 🌅 **Sunset over Paradis** (Warm golden amber directional sunlight with long shadows)
  - ☀️ **Clear Daylight** (High-visibility midday tactical illumination)
  - 🌌 **Cosmic Paths Nebula** (Midnight blue and luminous cyan ether)
  - 🌋 **Apocalyptic Rumbling Crimson** (Scorched blood-red cataclysm light)

---

## 📸 Screenshots & Architecture

| 3D Wall Defense & Shiganshina | Metaphysical Paths Tree |
| :---: | :---: |
| *50m Stone walls with battlements & Garrison cannons* | *1,000+ particle astral sand storm & light filaments* |

| Tactical Regiment Onboarding | 9 Titan Shifters Dossier |
| :---: | :---: |
| *Military assignment questionnaire & crests* | *Inheritance lineages, anatomical stats & abilities* |

---

## 📂 Project Structure

```bash
attack-on-titan-compendium/
├── index.html              # Main Archive portal & 3D Interactive Hub
├── timeline.html           # Historical Chronicle (Eldia, Great Titan War, Rumbling)
├── characters.html         # Classified Personnel & Military Registry
├── titans.html             # The Nine Titan Shifters intelligence dossier
├── world.html              # Wall geography, society, and tactical defense radar
├── css/
│   ├── style.css           # Core theme, brutalist typography, layout & 3D canvas
│   └── components.css      # Badges, HUD toolbar, radar, modal vaults, quiz cards
├── js/
│   ├── app.js              # State management, section observers, quiz & interactive logic
│   ├── three-scene.js      # Three.js 3D WebGL engine, procedural shaders, lighting & cameras
│   ├── data.js             # Canonical lore database (Characters, Titans, Timeline events)
│   └── particles.js        # Canvas particle background fallback
└── assets/                 # Favicons, military crests, and graphic assets
```

---

## 🚀 Quick Start & Local Setup

This project is built with **zero external npm build dependencies** and runs directly in any modern browser via static HTTP server.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/attack-on-titan-compendium.git
cd attack-on-titan-compendium
```

### 2. Switch to the 3D Feature Branch (if applicable)
```bash
git checkout feature/ai-edits
```

### 3. Launch Local Server

Using **Python** (Recommended):
```bash
python -m http.server 3000
```

Using **Node.js (`npx serve`)**:
```bash
npx serve -l 3000
```

Using **VS Code Live Server**:
Right-click `index.html` and select **"Open with Live Server"**.

### 4. Open in Browser
Navigate to:
```
http://localhost:3000
```

---

## ⌨️ Controls & Navigation

| Control | Action |
| :--- | :--- |
| **Scroll / Navigation Links** | Smoothly moves camera between 3D scenes (Walls, City, Paths Tree, Titans) |
| **`[Free Cam]` Button** | Toggle free camera orbit mode |
| **Left Click + Drag** *(Free Cam)* | Rotate 3D camera 360° |
| **Right Click + Drag** *(Free Cam)* | Pan camera position |
| **Mouse Wheel / Pinch** *(Free Cam)* | Zoom in / out |
| **`[ODM Flight]` Button** | Activate high-speed Scout patrol sweep along Wall Maria |
| **`[Atmosphere]` Buttons** | Switch lighting between Sunset, Daylight, Paths Nebula, and Rumbling Crimson |

---

## 🛠️ Technology Stack

- **Core**: Vanilla JavaScript (ES6+), HTML5 Semantic Markup, CSS3 Grid & Flexbox
- **3D Graphics**: [Three.js r128](https://threejs.org/), WebGL 2.0, OrbitControls
- **Procedural Texturing**: In-memory HTML5 2D Canvas normal & bump map generators (zero external image loading lag)
- **Typography**: `Playfair Display`, `Space Mono`, `Cinzel`, `UnifrakturMaguntia` (Google Fonts)
- **Animations**: CSS Hardware-Accelerated Keyframes & `requestAnimationFrame` render loop

---

## 🛡️ License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🎖️ Acknowledgements & Disclaimer

*Attack on Titan* (*Shingeki no Kyojin* / 進撃の巨人) is created by **Hajime Isayama** and published by **Kodansha**. All anime adaptation rights belong to **WIT Studio**, **MAPPA**, and the **"ATTACK ON TITAN" Production Committee**. This is a non-commercial, fan-made educational and creative coding project.

---

<p align="center">
  <b>Dedicate Your Heart! (心臓を捧げよ!)</b><br>
  <sub>Crafted with passion for Eldia and humanity within the walls.</sub>
</p>
