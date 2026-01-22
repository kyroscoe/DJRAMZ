// server.js
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors({ origin: ['http://localhost:3000'] }));
app.use(express.json());

// Booking endpoint
app.post('/api/booking', async (req, res) => {
  try {
    const data = req.body;

    // Basic sanity check
    if (!data.name || !data.email || !data.eventDate) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    console.log('New booking request:', data);

    // TODO: plug in your email / DB logic here
    // e.g. send email with Resend, Nodemailer, etc.

    return res.status(200).json({ message: 'Booking received' });
  } catch (err) {
    console.error('Booking API error:', err);
    return res.status(500).json({ message: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT}`);
});
