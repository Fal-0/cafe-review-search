const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// Health check endpoint
app.get('/', (req, res) => {
    res.send('Cafe Review Search API is running! Visit /cafe-review-search.html to use the app.');
});

// Proxy endpoint for nearby search
app.get('/api/places/nearby', async (req, res) => {
    try {
        const { location, radius = 3000, type = 'cafe', key } = req.query;
        
        if (!key) {
            return res.status(400).json({ error: 'API key is required' });
        }

        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;
        const response = await axios.get(url, {
            params: { location, radius, type, key }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching nearby places:', error.message);
        res.status(500).json({ 
            error: error.message,
            details: 'Failed to fetch nearby cafes from Google Places API'
        });
    }
});

// Proxy endpoint for place details
app.get('/api/places/details', async (req, res) => {
    try {
        const { place_id, fields = 'name,rating,formatted_address,reviews', key } = req.query;
        
        if (!key) {
            return res.status(400).json({ error: 'API key is required' });
        }

        const url = `https://maps.googleapis.com/maps/api/place/details/json`;
        const response = await axios.get(url, {
            params: { place_id, fields, key }
        });

        res.json(response.data);
    } catch (error) {
        console.error('Error fetching place details:', error.message);
        res.status(500).json({ 
            error: error.message,
            details: 'Failed to fetch cafe details from Google Places API'
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📱 Open http://localhost:${PORT}/cafe-review-search.html in your browser`);
});

// Export for Vercel serverless
module.exports = app;
