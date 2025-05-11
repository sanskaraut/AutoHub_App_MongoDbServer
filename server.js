import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Telemetry from './telemetry.model.js';

const app = express();
app.use(cors());

// Replace with your MongoDB Atlas URI or use environment variables
const MONGO_URI = process.env.MONGO_URI || 'your_mongo_uri_here';

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

app.get('/', (req, res) => res.send("OBD Server is running!"));

app.get('/get-latest-data', async (req, res) => {
  try {
    const latest = await Telemetry.findOne().sort({ timestamp: -1 });
    res.json(latest);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch latest data' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
