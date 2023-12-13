import React, { useState } from 'react';
import { useUser } from '../UserContext';

function Portfolio({ cryptos }) {
    const { currentUser, setCurrentUser } = useUser();
    const [loadAmount, setLoadAmount] = useState(0);

    // Toplam portföy değerini hesaplayan fonksiyon
    const calculateTotalValue = (coins, cryptos) => {
        if (!coins || !cryptos) return 0;
        let totalValue = 0;

        for (const [coinName, amount] of Object.entries(coins)) {
            const crypto = cryptos.find(c => c.name === coinName);
            if (crypto) {
                totalValue += amount * crypto.quote.USD.price;
            }
        }

        return totalValue;
    };

    // Bakiye yükleme işlemi
    const handleLoadAmount = (event) => {
        event.preventDefault();
        if (loadAmount > 0) {
            setCurrentUser({
                ...currentUser,
                wallet: currentUser.wallet + loadAmount
            });
            setLoadAmount("");
        }
    };

    return (
        <div className="container mt-4">
            <h2 className="text-center">Portföy Detayları</h2>
            {currentUser ? (
                <>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h3 className="card-title">Hoş Geldiniz, {currentUser.name}</h3>
                            <p className="card-text">Nakit Bakiyeniz: ${currentUser.wallet.toFixed(2)}</p>
                            <p className="card-text">Toplam Bakiyeniz (Nakit + Coinlerinizin Değeri): ${(currentUser.wallet + calculateTotalValue(currentUser.coins, cryptos)).toFixed(2)}</p>
                            <p className="card-text">
                                Coinleriniz:
                                <ul>
                                    {currentUser.coins && Object.entries(currentUser.coins).map(([coinName, amount]) => (
                                        <li key={coinName}>{coinName}: {amount}</li>
                                    ))}
                                </ul>
                            </p>
                            <p className="card-text">
                                Coinlerinizin Toplam Değeri: ${calculateTotalValue(currentUser.coins, cryptos).toFixed(2)}
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Bakiye Yükle</h3>
                            <form onSubmit={handleLoadAmount}>
                                <div className="form-group">
                                    <label htmlFor="loadAmount">Yüklenecek Miktar:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="loadAmount"
                                        value={loadAmount}
                                        onChange={(e) => setLoadAmount(Number(e.target.value))}
                                        min="1"
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary mt-2">Yükle</button>
                            </form>
                        </div>
                    </div>
                </>
            ) : (
                <p>Lütfen portföy detaylarını görmek için giriş yapın.</p>
            )}
        </div>
    );
}

export default Portfolio;
