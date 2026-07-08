# The Upside Down Diner

A Stranger Things-themed restaurant website with a full-stack implementation featuring the mysterious dimension of Hawkins, Indiana.

## Theme

**The Upside Down Diner** - Where reality bends and flavors transcend dimensions. This restaurant exists between worlds, serving cuisine from both sides of the portal.

### Special Features
- **Upside Down Toggle**: Click the moon icon in the navbar to switch between normal view and the "Upside Down" dimension filter
- **Dimensional Menu**: Explore dishes with names inspired by Stranger Things characters and creatures
- **Portal Reservations**: Book your table through our mysterious reservation system
- ** Hawkins Backstory**: Learn about the diner's connection to the events of 1983

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 18 + Vite |
| **Styling** | Tailwind CSS |
| **Backend** | Node.js + Express |
| **Database** | MongoDB |
| **Icons** | Lucide React |

## Getting Started

### Prerequisites
- Node.js 18+
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
cd "RESTAURANT PAGE AIWS"
```

2. **Setup Backend**
```bash
cd backend
npm install
```

3. **Setup Frontend**
```bash
cd frontend
npm install
```

4. **Configure Environment**

Create a `.env` file in the backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/upside-down-diner
PORT=5000
```

For MongoDB Atlas:
```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/upside-down-diner
PORT=5000
```

### Running the Application

1. **Start MongoDB** (if using local)
```bash
mongod
```

2. **Start Backend** (in `/backend` directory)
```bash
npm start
# or for development with auto-reload
npm run dev
```

3. **Start Frontend** (in `/frontend` directory)
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

## API Endpoints

### Menu
- `GET /api/menu` - Get all menu items
- `GET /api/menu/:id` - Get single menu item
- `POST /api/menu` - Create menu item
- `PUT /api/menu/:id` - Update menu item
- `DELETE /api/menu/:id` - Delete menu item
- `POST /api/menu/seed` - Seed database with sample items

### Reservations
- `GET /api/reservations` - Get all reservations
- `GET /api/reservations/:id` - Get single reservation
- `POST /api/reservations` - Create reservation
- `PUT /api/reservations/:id` - Update reservation
- `PATCH /api/reservations/:id/status` - Update status
- `DELETE /api/reservations/:id` - Cancel reservation

### Orders
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get single order
- `POST /api/orders` - Create order
- `PUT /api/orders/:id` - Update order
- `PATCH /api/orders/:id/status` - Update status
- `DELETE /api/orders/:id` - Delete order

## Project Structure

```
RESTAURANT PAGE AIWS/
├── backend/
│   ├── models/
│   │   ├── MenuItem.js
│   │   ├── Reservation.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── menuRoutes.js
│   │   ├── reservationRoutes.js
│   │   └── orderRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Reservation.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

## Signature Menu Items

- **The Demogorgon Burger** - Double beef patty with ghost pepper aioli
- **Eleven's Eggo Stack** - Waffles with maple syrup and strawberries
- **The Upside Down Pizza** - Spinach and mushroom with inverted pepperoni
- **Mind Flayer's Chili** - Slow-cooked beef with dark chocolate
- **The Vecna Platter** - Chef's daily mystery special

## Future Enhancements

- [ ] User authentication for admin dashboard
- [ ] Online ordering system with cart
- [ ] Payment integration (Stripe)
- [ ] Real-time order tracking
- [ ] Enhanced animations and particle effects
- [ ] Multi-language support
- [ ] Mobile app version

## License

This is a fictional project created for educational purposes. Not affiliated with Netflix or Stranger Things.

---

*"Some doors, once opened, can never be closed."* - Unknown Upside Down Diner patron
