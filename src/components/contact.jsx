import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setError('All fields are required!');
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Email address is invalid!');
        } else {
            setError('');
            alert('Message sent!');
        }
    };

    return (
        <section class="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
                <button type="submit">Send</button>
                {error && <p>{error}</p>}
            </form>
        </section>
    );
};

export default Contact;