import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    const newsList = [
        {
            title: "Bitcoin Yeni Bir Rekor Kırdı",
            summary: "Bitcoin'in değeri bugün yeni bir zirveye ulaştı...",
            imageUrl: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Yml0Y29pbnxlbnwwfHwwfHx8MA%3D%3D",
            url: "https://tr.investing.com/crypto/bitcoin/news"
        },
        {
            title: "Ethereum 2.0 Güncellemesi Yakında",
            summary: "Ethereum'un merakla beklenen 2.0 güncellemesi hakkında her şey...",
            imageUrl: "data:image/jpeg;base64,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",
            url: "https://tr.investing.com/crypto/ethereum/news"
        },



    ];
    return (
        <div className="container">
            <div className="row my-5">
                <div className="col">
                    <h1 className="text-center">KRİPTO PARA DÜNYASINA HOŞ GELDİNİZ!</h1>
                    <p className="text-center">Kripto paralar, piyasa analizleri ve portföy yönetimi hakkında her şey burada.</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 mb-6">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Canlı Piyasa Verileri</h5>
                            <p className="card-text">
                                Kripto para piyasalarındaki son dakika gelişmelerini ve fiyatları buradan takip edin.
                            </p>
                            <Link to="/market" className="mt-auto btn btn-primary">Piyasaya Git</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-6">
                    <div className="card h-100">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">Kripto Para Dünyasında Olup Bitenler</h5>
                            <p className="card-text">
                                Piyasa trendleri ve coin haberleri ile bilinçli yatırımlar yapın.
                            </p>
                            <Link to="/news" className="mt-auto btn btn-primary">Analizlere Git</Link>
                        </div>
                    </div>
                </div>


            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    {newsList.map((newsItem, index) => (
                        <div key={index} className="col-md-6 col-lg-6 mb-6">
                            <div className="card h-100">
                                {newsItem.imageUrl && (
                                    <img className="card-img-top img-fluid" src={newsItem.imageUrl} alt={newsItem.title} style={{ maxHeight: '200px', objectFit: 'cover' }} />
                                )}
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">{newsItem.title}</h5>
                                    <p className="card-text flex-grow-1">{newsItem.summary}</p>
                                    <a href={newsItem.url} className="btn btn-primary mt-auto" target="_blank" rel="noopener noreferrer">Devamını Oku</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default HomePage;
