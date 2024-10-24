import React, { useState, useEffect } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    const [greeting, setGreeting] = useState('');
    const [selectedCard, setSelectedCard] = useState('');
    const [cardBalance, setCardBalance] = useState('');
    const [activeTab, setActiveTab] = useState('Tab 1'); // New state for active tab

    

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();

        if (hours < 12) {
            setGreeting("Good Morning");
        } else if (hours < 18) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Evening");
        }
    }, []);

    const handleCardChange = (event) => {
        const selectedCard = event.target.value;
        setSelectedCard(selectedCard);
        setCardBalance(cardBalances[selectedCard]);
    };

    // Simulated credit card balances
const cardBalances = {
    card1: 1200.50,
    card2: 3450.75
};

function showCardBalance() {
    const dropdown = document.getElementById('credit-card-dropdown');
    const balanceElement = document.getElementById('card-balance');
    const selectedCard = dropdown.value;

    if (selectedCard) {
        const balance = cardBalances[selectedCard];
        balanceElement.textContent = `Card Balance: $${balance.toFixed(2)}`;
        
        // Redirect to Credit Card Application page
        window.location.href = `CreditCardApplication.html?card=${selectedCard}&balance=${balance}`;
    } else {
        balanceElement.textContent = '';
    }
}

// Set greeting based on time of day
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    greetingElement.textContent = `${greeting}, Welcome to Your Profile`;
}

// Call setGreeting when the page loads
window.onload = setGreeting;
    
    

    return (
        <div className="container">
            <h1>{greeting}</h1>

            <div className="balance-section">
                <h2>Your Available Balance:</h2>
                <p>$5,000.00</p>
            </div>

            <div className="credit-card-section">
                <h2>Select Credit Card:</h2>
                <select value={selectedCard} onChange={handleCardChange}>
                    <option value="" disabled>Select a card</option>
                    <option value="card1">Visa - ****1234</option>
                    <option value="card2">MasterCard - ****5678</option>
                </select>
            </div>

            <div className="tabs-section">
                <ul>
                    {['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6'].map((tab) => (
                        <li key={tab}>
                            <a 
                                href="#"
                                className={activeTab === tab ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleTabClick(tab);
                                }}
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

