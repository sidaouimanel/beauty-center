import React, { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const contactData = {
            name,
            email,
            message,
        };

        try {
            const response = await fetch('http://localhost:5002/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            if (response.ok) {
                console.log('Message sent successfully');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                console.log('Failed to send message', response.statusText);
            }
        } catch (err) {
            console.error('Error:', err);
        }
    };

    return (
        <div className="contact-page">
            <div className="contact-container">
                <div className="contact-left">
                    <div className="contact-details">
                        <i className="fas fa-map-marker-alt"></i>
                        <div className="topic">Address</div>
                        <div className="text-one">tunisia, NP12</div>
                        <div className="text-two">Ariana 06</div>
                    </div>
                    <div className="contact-details">
                        <i className="fas fa-phone-alt"></i>
                        <div className="topic">Phone</div>
                        <div className="text-one">+0098 9893 5647</div>
                        <div className="text-two">+0096 3434 5678</div>
                    </div>
                    <div className="contact-details">
                        <i className="fas fa-envelope"></i>
                        <div className="topic">Email</div>
                        <div className="text-one">sidaouimanel@gmail.com</div>
                        <div className="text-two">info.codinglab@gmail.com</div>
                    </div>
                </div>
                <div className="contact-right">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or need assistance, feel free to reach out to us.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-box">
                            <input 
                                type="text" 
                                placeholder="Enter your name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="input-box">
                            <input 
                                type="text" 
                                placeholder="Enter your email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="input-box message-box">
                            <textarea 
                                placeholder="Enter your message"
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>
                        
                            <button type="submit" className="btn">
                           
                              <a>
                               <div class="buuton">send now</div>
                               <div class="back"></div>
                              </a>

                            </button>
                      
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
