# ⚽ Wembly Warriors

A simple yet dynamic **team roster app** that allows users to view players by their positions — forwards, defenders, midfielders, and goalkeepers — or by those who have nicknames.  
Built with **HTML, CSS, and JavaScript**, this project showcases object manipulation, filtering, and DOM rendering in action.

---

## 🚀 Features
- 🧠 Display team details such as name, sport, year, and head coach  
- 🎯 Filter players by position (Forward, Midfielder, Defender, Goalkeeper)  
- 💬 View players with cool nicknames  
- 🦾 Simple and responsive player card layout  

---

## 🧩 Tech Stack
- **HTML5** – for structure  
- **CSS3** – for styling and layout  
- **Vanilla JavaScript (ES6+)** – for interactivity and logic  

---

## 🏗️ How It Works
1. The app uses a structured object to store team and player data.  
2. When a user selects a position from the dropdown, the list updates dynamically.  
3. Each player is displayed as a card showing their position, number, and nickname (if any).  

---

## 🌟 Example Features
```js
players.filter((player) => player.position === "forward");
