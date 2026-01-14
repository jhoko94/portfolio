import React, { useState } from 'react';
import './index.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        budget: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:jhoko94@gmail.com?subject=Contact from Portfolio&body=Name: ${formData.name}%0AEmail: ${formData.email}%0ABudget: ${formData.budget}%0AMessage: ${formData.message}`;
        window.location.href = mailtoLink;
        setFormData({ name: '', email: '', budget: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <h2 className="section-title">LET'S WORK TOGETHER</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Budget</option>
                            <option value="<$3k">&lt;$3k</option>
                            <option value="$3k - $5k">$3k - $5k</option>
                            <option value="$5k - $10k">$5k - $10k</option>
                            <option value=">$10k">&gt;$10k</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <textarea
                            name="message"
                            placeholder="Message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;

