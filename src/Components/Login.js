import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../UserContext';



function Login({ registeredUsers }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useUser();

    const handleSubmit = (event) => {
        event.preventDefault();

        const isLoginSuccessful = login(email, password, registeredUsers);

        if (isLoginSuccessful) {

            navigate('/');
        } else {

            setEmail('');
            setPassword('');
            alert('Giriş bilgileri hatalı. Lütfen tekrar deneyin.');
        }
    };



    return (
        <div className="card mt-5">
            <div className="card-body">
                <h2 className="text-center mb-4">Giriş Yap</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group" id="email">
                        <label>Email</label>
                        <input type="email" className="form-control" required onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group" id="password">
                        <label>Şifre</label>
                        <input type="password" className="form-control" required onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button className="btn btn-primary w-100 mt-3" type="submit">Giriş Yap</button>


                    <div className="btn btn-warning w-100 mt-3">
                        <Link className="nav-link" to="/register">Kayıt Ol</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
