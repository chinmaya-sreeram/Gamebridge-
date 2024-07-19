import React, { useState } from 'react';


export const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Showing sign-in
        console.log('Email:', email); //To send to backend but logging in console for now
        console.log('Password:', password);
        setError('');
        alert('Sign-in successful');
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input 
                        placeholder='email@domain.com'
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;