import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../UserContext';


function Header() {
    const { currentUser } = useUser();
    const { logout } = useUser();
    const [drop, setDrop] = useState(true)
    const style = drop ? { display: "none" } : { display: "block" }
    const handleDrop = () => {
        setDrop(!drop)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src="/logo.png" alt="Logo" style={{ maxWidth: '100px' }} />
                </Link>
                <Link className="navbar-brand" to="/"></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Ana Sayfa</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/market">Piyasa Verileri</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/news">Haberler</Link>
                        </li>

                    </ul>
                </div>
                {currentUser ? (
                    <>
                        <li className="card-text" style={{ listStyleType: 'none', marginRight: '20px' }}>
                            Nakit Bakiyeniz: ${currentUser.wallet.toFixed(2)}
                        </li>
                        <li className="nav-item dropdown ms-auto" style={{ listStyleType: 'none' }}>

                            <span onClick={handleDrop} className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hoş Geldiniz, {currentUser.name}
                            </span>
                            <ul style={style} className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/wallet">Cüzdan</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><button onClick={logout} className="dropdown-item">Çıkış Yap</button></li>
                            </ul>
                        </li>

                    </>
                ) : (
                    <li className="nav">
                        <Link
                            className="nav-link"
                            to="/login"
                            style={{ color: 'black' }}>Giriş Yap/Kayıt Ol
                        </Link>
                    </li>

                )}
            </div>
        </nav>
    );
}

export default Header;