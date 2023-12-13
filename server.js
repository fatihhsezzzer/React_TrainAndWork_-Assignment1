const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

// CORS Middleware'ini etkinleştir
app.use(cors());

// CoinMarketCap API'ına istek yapacak rota
app.use('/api/crypto', (req, res) => {
    const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
    axios.get(url, {
        headers: {
            'X-CMC_PRO_API_KEY': 'e64f5ad7-92b4-429e-9fae-684529eaf308', // API anahtarınız
        }
    })
        .then(response => res.json(response.data))
        .catch(error => res.status(500).send(error));
});

// Sunucuyu belirtilen portta çalıştır
const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
