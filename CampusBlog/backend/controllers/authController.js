const bcrypt = require('bcrypt'); //bcrypt for password hashing
const User = require('../models/User'); // Mongoose User model
const jwt = require('jsonwebtoken');

const SALTS = 10;

exports.signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).json({ message: 'Username and password are required.' });

    const existing = await User.findOne({ username });
    if (existing) return res.status(400).json({ message: 'User already exists.' });

    const hashedPassword = await bcrypt.hash(password, SALTS);
    const user = new User({ username, password: hashedPassword });
    await user.save();

    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
    );

    res.status(201).json({ message: 'User created successfully.', token });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) return res.status(401).json({ success: false });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ success: false });
  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1h' }
  );
  res.json({ success: true, token });
};
