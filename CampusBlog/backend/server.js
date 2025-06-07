require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
//Routes
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();

app.use(cors());
app.use(express.json());
connectDB();

// Routes for api
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
