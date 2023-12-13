import React, { useState } from 'react';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';





function Register({ setRegisteredUsers }) {
    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [wallet, setWallet] = useState('');

    const [walletValue, setWalletValue] = useState('');

    const navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const newUser = {
            name,
            email,
            password,
            wallet: 10000,
            coins: {},
            toplamDeger: 0
        };
        setRegisteredUsers(users => [...users, newUser]);

        alert("Kayıt Başarılı\nGiriş Sayfasaına yönlendiriliyorsunuz...")
        navigate('/login');
    };

    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="text-center mb-4">Kayıt Ol</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label>İsim</label>
                        <input
                            type="text"
                            className="form-control"
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group" id="email">
                        <label>Email</label>
                        <input type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group" id="password">
                        <label>Şifre</label>
                        <input type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-primary w-100 mt-3" type="submit">Kayıt Ol</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
