const express = require('express');
const axios = require('axios');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/api/block', async (req, res) => {
  try {
    const externalApiUrl = `https://indexer.validatorvn.com/block${req.url.slice(6)}`;
    const response = await axios.get(externalApiUrl, {
      params: req.query // Truyền các tham số truy vấn từ yêu cầu gốc
    });
    const blockData = response.data;
    
    res.json(blockData);
  } catch (error) {
    console.error('Error fetching data from external API:', error);
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
