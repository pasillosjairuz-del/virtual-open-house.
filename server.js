const express = require('express');
const dotenv = require('dotenv');
const { GoogleGenAI } = require('@google/genai');

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static('public'));

// Initialize Gemini API client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// In-memory analytics & hotspot data
const visits = {
  main: 0,
  library: 0,
  lab: 0,
  chapel: 0
};

const hotspots = [
  { id: 'main', name: 'Main Admin Building', description: 'Central hub for admissions, registrar, and financial aid services.' },
  { id: 'library', name: 'Campus Library', description: 'Quiet study spaces, vast digital archives, and 24/7 research assistance.' },
  { id: 'lab', name: 'Computer Lab', description: 'State-of-the-art workstations equipped with VR, AI, and software engineering tools.' },
  { id: 'chapel', name: 'Chapel & Gym', description: 'Spaces for spiritual reflection, wellness programs, varsity sports, and recreation.' }
];

app.get('/api/hotspots', (req, res) => {
  res.json(hotspots);
});

app.post('/api/visits', (req, res) => {
  const { hotspotId } = req.body;
  if (visits[hotspotId] !== undefined) {
    visits[hotspotId]++;
    res.json({ success: true, visits });
  } else {
    res.status(400).json({ error: 'Invalid hotspot ID' });
  }
});

app.get('/api/summary', (req, res) => {
  const totalVisits = Object.values(visits).reduce((a, b) => a + b, 0);
  let mostVisited = null;
  let leastVisited = null;
  
  if (totalVisits > 0) {
    mostVisited = Object.keys(visits).reduce((a, b) => visits[a] > visits[b] ? a : b);
    leastVisited = Object.keys(visits).reduce((a, b) => visits[a] < visits[b] ? a : b);
  }

  res.json({
    totalVisits,
    mostVisited,
    leastVisited,
    visitsPerHotspot: visits
  });
});

app.post('/api/guide', async (req, res) => {
  const { question } = req.body;
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `You are a helpful AI tour guide for a Virtual Campus Open House. Answer the following prospective student question concisely and warmly: ${question}`
    });
    res.json({ answer: response.text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to generate AI response.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});