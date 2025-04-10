# 🚗 Car Dealership Web App

A modern and responsive React-based car dealership application where users can browse car listings, view detailed specifications, and manage a personalized wishlist — all stored in local storage.

🌐 **Live Demo:** [https://cardealer24.netlify.app/](https://cardealer24.netlify.app/)

## 🛠 Tech Stack

- **Frontend:** React, Tailwind CSS
- **Routing:** React Router
- **State Management:** React Hooks
- **Storage:** LocalStorage

---

## 📸 Features

### ✅ Browse Car Listings

- Displayed in a clean, responsive card layout
- Graceful fallback image if car image fails to load

### 📋 Car Details Page

- Full specifications including:
  - Brand, Model, Price, Fuel Type
  - Engine, Transmission, Color, Mileage, Horsepower, etc.
- Add to Wishlist functionality (with localStorage)

### ❤️ Wishlist

- View all cars you've added to your wishlist
- Persisted even after browser reload

### 🌐 Navigation

- Toggle between `Home` and `WishList` using the Header
- Intuitive routing using React Router

### 🌀 Loader

- Global loading overlay component (`Loader`) for async UI feedback (can be plugged in later with actual data fetching)

---

## 📁 Project Structure

```
├── components
│   ├── Cards.jsx
│   ├── Loader.jsx
│   ├── SelectFilters.jsx
├── pages
│   ├── Home.jsx
│   ├── WishList.jsx
│   ├── ShowDetails.jsx
├── constants
│   └── constant.js
├── App.jsx
├── index.css
```

---

## 🧩 How It Works

- On visiting the **Home page**, all cars are fetched and displayed in a paginated grid.
- Users can search and filter cars by brand, price, fuel type, and seating capacity.
- Clicking a car opens the **ShowDetails** page with all specifications and an option to add the car to the **Wishlist**.
- The **Wishlist** page fetches cars from `localStorage` and displays them.

---

## 🚀 Getting Started

```bash
# Install dependencies
yarn install
# or
npm install

# Run the development server
yarn dev
# or
npm run dev
```

---

## 📦 Future Enhancements

- Backend integration for storing car data
- User authentication for personalized wishlists
- Sorting and pagination logic improvements
- Add/Edit/Delete from wishlist

---


Made with ❤️ by Krushna Diwate

