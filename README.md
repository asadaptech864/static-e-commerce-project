# 🛍️ E-Commerce Frontend Project

A modern, responsive e-commerce website built with React and Vite, featuring a complete shopping experience with cart management, wishlist functionality.

## ✨ Features

### 🏠 **Homepage**
- **Hero Banner**: Eye-catching promotional content
- **Product Categories**: Browse products by category
- **Best Selling Products**: Featured products section
- **Product Grid**: Complete product catalog display

### 🛒 **Shopping Features**
- **Shopping Cart**: Add, remove, and update product quantities
- **Wishlist**: Save products for later
- **Product Details**: Comprehensive product information pages
- **Responsive Design**: Mobile-first approach for all devices

### 🎨 **UI/UX Features**
- **Modern Design**: Clean and intuitive interface
- **Bootstrap Integration**: Professional styling framework
- **React Icons**: Beautiful iconography throughout
- **Responsive Layout**: Optimized for all screen sizes

## 🚀 Technologies Used

### **Frontend Framework**
- **React 18.2.0**: Modern React with latest features
- **Vite 4.5.0**: Fast build tool and development server

### **UI Libraries**
- **Bootstrap 5.3.5**: CSS framework for responsive design
- **React Bootstrap 2.10.9**: Bootstrap components for React
- **React Icons 5.5.0**: Icon library for React applications

### **Routing & State Management**
- **React Router DOM 6.30.0**: Client-side routing
- **React Context API**: State management for cart and wishlist
- **Local Storage**: Persistent data storage

### **Development Tools**
- **@vitejs/plugin-react**: Vite plugin for React support

## 📁 Project Structure

```
static-e-commerce-project/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   │   └── 1.jpg
│   ├── components/        # Reusable UI components
│   │   ├── Banner.jsx     # Hero banner component
│   │   ├── BestSelling.jsx # Featured products section
│   │   ├── Cart.jsx       # Shopping cart component
│   │   ├── cartContext.jsx # Cart state management
│   │   ├── Categories.jsx # Product categories
│   │   ├── Footer.jsx     # Site footer
│   │   ├── Navbar.jsx     # Navigation header
│   │   ├── ProductCard.jsx # Individual product display
│   │   ├── ProductDetails.jsx # Detailed product view
│   │   ├── Products.jsx   # Product grid
│   │   ├── Wishlist.jsx   # Wishlist component
│   │   └── wishlistContext.jsx # Wishlist state management
│   ├── pages/             # Page components
│   │   ├── About.jsx      # About page
│   │   ├── Contact.jsx    # Contact page
│   │   ├── Contact.module.css # Contact page styles
│   │   ├── Home.jsx       # Homepage
│   │   ├── Login.jsx      # Login page
│   │   └── Signup.jsx     # Registration page
│   ├── App.jsx            # Main application component
│   └── main.jsx           # Application entry point
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── package-lock.json      # Locked dependency versions
└── vite.config.js         # Vite configuration
```

## 🛠️ Installation

### Prerequisites
- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd static-e-commerce-project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

## 📜 Available Scripts

- **`npm run dev`**: Start development server with hot reload
- **`npm run build`**: Build production version
- **`npm run preview`**: Preview production build locally

## 🔧 Key Components

### **State Management**
- **CartContext**: Manages shopping cart state with localStorage persistence
- **WishlistContext**: Handles wishlist functionality and state

### **Core Features**
- **Product Management**: Display, categorize, and detail products
- **Shopping Cart**: Add/remove items, update quantities
- **User Authentication**: Login and registration system
- **Responsive Design**: Mobile-first responsive layout

## 🎯 Features in Detail

### **Shopping Cart System**
- Add products to cart with quantity selection
- Update product quantities
- Remove products from cart
- Persistent storage using localStorage
- Real-time cart updates

### **Wishlist Functionality**
- Save products to wishlist
- Remove products from wishlist
- Check if product is in wishlist
- Persistent storage across sessions

### **Product Management**
- Product grid display
- Product detail pages
- Category-based browsing
- Best-selling products section

### **User Interface**
- Modern, clean design
- Bootstrap-based responsive layout
- Intuitive navigation
- Professional styling

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- Responsive grid layouts
- Mobile-optimized navigation
- Touch-friendly interactions
- Adaptive typography

## 🔒 Security Features

- Client-side form validation
- Secure routing
- Protected routes for authenticated users
- Input sanitization

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

## 👨‍💻 Author

**Muhammad Asad**



**Happy Shopping! 🛍️✨**
