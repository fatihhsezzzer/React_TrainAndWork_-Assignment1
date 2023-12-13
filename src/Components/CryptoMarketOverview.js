import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../UserContext';

function CryptoMarketOverview(registeredUsers) {
    const [cryptos, setCryptos] = useState([]);
    const { currentUser, setCurrentUser } = useUser();
    const [amount, setAmount] = useState({});


    useEffect(() => {
        axios.get('http://localhost:3001/api/crypto')
            .then(response => {
                setCryptos(response.data.data.slice(0, 20));
            })
            .catch(error => {
                console.error('Veri çekme hatası:', error);
            });
    }, []);

    const handleAmountChange = (cryptoId, enteredAmount) => {
        setAmount({ ...amount, [cryptoId]: Number(enteredAmount) });
    };
    const handleBuy = (crypto, amountObj) => {
        // ... (diğer kodlar)

        const amountToBuy = amountObj[crypto.id];
        if (isNaN(amountToBuy) || amountToBuy <= 0) {
            console.log('Geçersiz miktar');
            return;
        }

        const cost = crypto.quote.USD.price * amountToBuy;

        // Yeterli bakiye kontrolü
        if (currentUser.wallet < cost) {
            alert("Yetersiz Bakiye!")
            return;
        }

        // Mevcut coin miktarını al ve sayısal olduğundan emin ol
        const currentCoinAmount = Number(currentUser.coins[crypto.name] || 0);

        // Wallet ve coins güncellemesi
        const updatedUser = {
            ...currentUser,
            wallet: currentUser.wallet - cost,
            coins: {
                ...currentUser.coins,
                [crypto.name]: currentCoinAmount + amountToBuy

            }


        };

        setCurrentUser(updatedUser);
        alert("Alış İşlemi Başarılı...")
        handleAmountChange(crypto.id, '');
    };







    const handleSell = (crypto, amountObj) => {


        const amountToSell = amountObj[crypto.id];
        if (isNaN(amountToSell) || amountToSell <= 0) {
            console.log('Geçersiz miktar');
            return;
        }

        // Mevcut coin miktarını al ve sayısal olduğundan emin ol
        const currentCoinAmount = Number(currentUser.coins[crypto.name] || 0);

        // Yeterli coin olup olmadığını kontrol et
        if (currentCoinAmount < amountToSell) {
            alert("Elinizde Yeterli Miktarda Coin Bulunmuyor!")
            return;
        }

        const income = crypto.quote.USD.price * amountToSell;

        // Wallet ve coins güncellemesi
        const updatedUser = {
            ...currentUser,
            wallet: currentUser.wallet + income,
            coins: {
                ...currentUser.coins,
                [crypto.name]: currentCoinAmount - amountToSell
            }
        };
        setCurrentUser(updatedUser);
        alert("Satış İşlemİ Başarılı...")
        handleAmountChange(crypto.id, '');
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Kripto Para Piyasa Genel Bakış</h2>
            <div className="row">
                {cryptos.map((crypto) => (
                    <div key={crypto.id} className="col-sm-12 col-md-6 col-lg-4 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{crypto.name} ({crypto.symbol})</h5>
                                <p className="card-text">Fiyat: ${crypto.quote.USD.price.toFixed(2)}</p>
                                <input
                                    type="number"
                                    className="form-control mb-2"
                                    value={amount[crypto.id] || ''}
                                    onChange={(e) => handleAmountChange(crypto.id, e.target.value)}
                                    min="0"
                                />
                                <button
                                    onClick={() => handleBuy(crypto, amount)}
                                    className="btn btn-success mr-2"
                                    style={{ width: '100px', height: '40px' }}
                                >
                                    Satın Al
                                </button>
                                <button
                                    onClick={() => handleSell(crypto, amount)}
                                    className="btn btn-danger"
                                    style={{ width: '100px', height: '40px', float: 'right' }}
                                >
                                    Sat
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CryptoMarketOverview;
