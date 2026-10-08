Here’s a clean GitHub-ready README for your **Arrow Escape** game. You can save it directly as `README.md`.

Arrow Escape README

# 🏹 Arrow Escape

**Arrow Escape** is a simple browser-based puzzle game built with **HTML, CSS, and JavaScript**.

The goal is to clear the board by clicking arrows and making them escape in the direction they are pointing. Plan your moves carefully and remove all the arrows to complete each level!

## 🎮 How to Play

1. Open the game in your web browser.
2. Click on an arrow to make it move in the direction it is pointing.
3. An arrow can escape the board only if there are no other arrows blocking its path.
4. Continue removing arrows until the board is completely empty.
5. Complete the level to progress through the game.

## ✨ Features

- 🏹 Arrow-based puzzle gameplay
- 🎯 Multiple levels
- 🔄 Restart the current level
- ⏭️ Move to the next level
- 💾 Level progress saved using browser `localStorage`
- 📱 Responsive design for smaller screens
- 🎨 Simple dark-themed interface
- ⚡ No frameworks or external dependencies

## 🛠️ Technologies Used

- **HTML5** — Game structure
- **CSS3** — Styling and responsive layout
- **JavaScript** — Game logic and interactions
- **LocalStorage** — Saving player progress

## 📁 Project Structure

```
Arrow-Escape/
│
├── index.html      # Main game page
├── style.css       # Game styling
├── script.js       # Game logic
├── levels.js       # Level definitions
├── README.md       # Project documentation
└── LICENSE         # MIT License
```

## 🚀 Getting Started

No installation or build tools are required.

### 1\. Clone the repository

```
git clone https://github.com/Pruthviraj-Guddu/ArrowGameWeb.git
```

### 2\. Open the project

Navigate to the project folder:

```
cd arrow-escape
```

### 3\. Run the game

Open `index.html` in your web browser.

That's it! 🎉

## 🎯 Objective

Clear every arrow from the board.

Each arrow can only move in the direction it is pointing. If another arrow is blocking its path, you must find another move first.

Can you solve every level?

## 💾 Progress

Your current level is stored in the browser using **localStorage**.

This means your progress can remain available when you return to the game in the same browser.

## 📱 Responsive Design

Arrow Escape includes a responsive layout that adjusts the size of the game cells on smaller screens, making the game playable on both desktop and mobile-sized displays.

## 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for details.

## 👨‍💻 Author

Created as a simple JavaScript puzzle game project.

If you enjoy the game, feel free to ⭐ the repository!

**One important thing:** your HTML references `levels.js` and `script.js`, so make sure your GitHub repository contains those two files too. Your final structure should be:

```
Arrow-Escape/
├── index.html
├── style.css
├── script.js
├── levels.js
├── README.md
└── LICENSE
```
