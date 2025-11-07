# 🎬 Movie Search App

A full-featured movie search application built with **React.js** and the **OMDB API**, allowing users to search for movies, view detailed information, apply type filters, manage favorites, and navigate seamlessly between pages — all with simple and clean code (no `.env`, no Tailwind config, no PostCSS).

---

## 🚀 Features

### 🔍 Movie Search

* Search for movies, series, or episodes by title or keyword.
* Fetches live data from the **OMDB API**.
* Displays posters, titles, and release years.

### 🎚️ Filter by Type

* Filter movies by **type** (movie, series, episode) using a dropdown.
* Uses API parameters — no `array.filter()` used.

### 📄 Pagination

* Handles large search results using Next/Previous buttons.

### 🧾 Movie Details

* Clicking on a movie opens a detailed view with:

  * Poster
  * Title
  * Release year
  * Genre
  * Plot summary
  * Cast
  * IMDB rating

### ⭐ Favorites

* Add or remove movies from your favorites list.
* Favorites are saved in **localStorage**, so they persist across sessions.

### ⚠️ Error Handling

* Handles invalid searches, no results, and API errors gracefully.

### 🧭 Navigation

* Built using **React Router DOM** for seamless navigation:

  * `/` → Search Page
  * `/movie/:id` → Details Page
  * `/favorites` → Favorites Page

---

## 🧱 Tech Stack

| Technology           | Purpose                |
| -------------------- | ---------------------- |
| **React.js**         | Frontend framework     |
| **React Router DOM** | Routing and navigation |
| **OMDB API**         | Movie data source      |
| **HTML / CSS**       | Layout and styling     |
| **JavaScript (ES6)** | Application logic      |

---

## 🗂️ Folder Structure

```
src/
 ├── components/
 │    ├── MovieCard.jsx
 │    └── Navbar.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── Details.jsx
 │    └── Favorites.jsx
 ├── App.jsx
 ├── main.jsx
 ├── index.css
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/movie-search-app.git
cd movie-search-app
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Get your OMDB API Key

1. Visit [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx)
2. Sign up for a **free API key**
3. Copy your key

### 4️⃣ Add your API key

In `Home.jsx` and `Details.jsx`, replace:

```js
const API_KEY = "f34ac4cf";
```

with your actual OMDB key.

### 5️⃣ Run the app

```bash
npm run dev
```

Then open your browser at [http://localhost:5173](http://localhost:5173)

---

## 🧭 Usage Guide

### 🔍 Search Movies

* Type a keyword (e.g. *Batman*) in the search bar.
* Choose the **type** (movie / series / episode).
* Click **Search** to view results.

### 📄 Movie Details

* Click **Details** on any movie card to view full information.

### ⭐ Favorites

* Click the ☆ icon to **add to favorites**.
* Go to the **Favorites** page to view or remove them.

### ⏩ Pagination

* Use **Next** / **Prev** buttons to browse more results.

---

## 📸 Screenshots (Example)

**Home Page**

```
🎬 MovieFinder
[ Search Bar ] [ Filter Dropdown ]
[ Movie Cards Grid with Posters ]
```

**Details Page**

```
[ Poster ]  [ Title, Genre, Cast, Plot, Rating ]
```

**Favorites Page**

```
[ List of favorited movies with Remove buttons ]
```

---

## 🧰 Key Files Overview

| File            | Description                                        |
| --------------- | -------------------------------------------------- |
| `App.jsx`       | Defines routes for Home, Details, and Favorites    |
| `Home.jsx`      | Handles search, filters, pagination, and favorites |
| `Details.jsx`   | Displays complete movie details                    |
| `Favorites.jsx` | Lists user’s favorite movies                       |
| `MovieCard.jsx` | Reusable movie card component                      |
| `Navbar.jsx`    | Top navigation bar                                 |
| `index.css`     | Base styling for layout and components             |

---

## 🛠️ Future Enhancements

* 🎞️ Add sorting (by year or rating)
* 💾 Integrate backend for permanent favorites
* 🌙 Dark/Light mode toggle
* 💬 Include user reviews

---

## 🧑‍💻 Author

**Developed by:** Bhuvi
**Stack:** React.js + OMDB API + CSS
**Purpose:** Learning / Project Submission

---

## 📜 License

**MIT License**

Copyright (c) 2025 Bhuvi

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

**THE SOFTWARE IS PROVIDED "AS IS"**, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

---

🎉 **Enjoy discovering movies with MovieFinder!**
