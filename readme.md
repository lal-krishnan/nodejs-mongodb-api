# 🚀 Node.js + TypeScript + MongoDB API

A RESTful API built with Node.js, Express, TypeScript, and MongoDB (Mongoose). Includes user authentication and modular folder structure.

---

## 📁 Project Structure

```
src/
├── config/            # DB connection, environment config
├── controllers/       # Route logic handlers
├── middlewares/       # Error handlers, validation, auth guards
├── models/            # Mongoose models/schemas
├── routes/            # API route definitions
├── utils/             # Helper utilities (e.g., logger, token)
├── app.ts             # Express app setup
├── server.ts          # Entry point
├── types/             # Custom TypeScript types (optional)
└── ...
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root with:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017
MONGO_DB_NAME=myAppDB
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

---

## 💻 Install & Run

### 1. Install dependencies

```bash
npm install
```

### 2. Run in development mode

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Run production build

```bash
npm start
```

---

## 🧪 Available Scripts

```bash
npm run dev      # Start with nodemon & ts-node
npm run build    # Compile TypeScript to JavaScript
npm start        # Run compiled server.js
```

---

## 📦 Dependencies

- express
- mongoose
- jsonwebtoken
- dotenv
- cors
- morgan
- typescript
- ts-node
- nodemon

---

## 📜 License

MIT License © 2025 Lal krishnan
