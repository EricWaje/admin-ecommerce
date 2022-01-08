import React, { useState } from 'react';
import loginServices from '../services/login';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await loginServices.login({
                username,
                password,
            });

            console.log(user);
            setUser(user);
            setUsername('');
            setPassword('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="******"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
            </form>
        </>
    );
};

export default Login;
