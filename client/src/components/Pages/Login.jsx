import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5050/api/login', { username, password });
            const { token } = response.data;
            localStorage.setItem('token', token);
            await console.log(response);
            setIsLoggedIn(true);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            {isLoggedIn &&
                <div id="page-container" className="bg-image h-screen flex justify-center items-center">
                    <div id="main" className=''>
                        <div id="card-container" className='py-16 rounded-md shadow-md'>
                            <div id="form-container">
                                <div id="form">
                                    <div id="form-greeting" className='mb-4'>
                                        <h1 className=''>Merhaba!</h1>
                                        <h2 className='text-sky-200'>{"StationWatch'a hoşgeldin!"}</h2>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <fieldset>
                                            <div>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    minLength="3"
                                                    maxLength="20"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label htmlFor="username">Kullanıcı Adı</label>
                                            </div>
                                            <div>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    minLength="6"
                                                    maxLength="20"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label htmlFor="password">Şifre</label>
                                            </div>
                                            <div className="button">
                                                <button type="submit" className='rounded-lg mb-4'>Giriş Yap</button>
                                            </div>
                                            <div>
                                                Şifreni mi unuttun? <a href="#" className='text-blue-300'>Şifreni Yenile</a>
                                            </div>

                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default Login;
