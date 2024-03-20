const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/validators', async (req, res) => {
    try {
        const urlvalidator = 'https://indexer.validatorvn.com/block/last';
        const response = await axios.get(urlvalidator);
        const validatorData = response.data;
        
        res.json(validatorData);
    } catch (error) {
        console.error('Error fetching data from Validator API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/api/proposals', async (req, res) => {
    try {
        const externalApiUrl = 'https://it.api.namada.red/api/v1/chain/governance/proposals';
        const response = await axios.get(externalApiUrl);
        const proposalsData = response.data;
        
        res.json(proposalsData);
    } catch (error) {
        console.error('Error fetching data from external API:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
