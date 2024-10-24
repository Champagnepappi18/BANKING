// CreditCardApplication.js
import React from 'react';

function CreditCardApplication() {
    return (
        <div className="tab-section">
            <h2>Credit Card Application</h2>
            <form>
                <label>Card Type: <select><option>Visa</option><option>MasterCard</option></select></label><br />
                <label>Credit Limit: <input type="number" placeholder="Desired limit" /></label><br />
                <button type="submit">Apply</button>
            </form>
            <p>Approval status will be displayed here.</p>
        </div>
    );
}
// Assuming you have fetched the user's current available balance somehow
let availableBalance = 5000; // This should be fetched dynamically, potentially from localStorage or a server-side API

function makePayment() {
    const paymentAmount = parseFloat(document.getElementById("payment-amount").value);
    if (!isNaN(paymentAmount) && paymentAmount > 0 && paymentAmount <= availableBalance) {
        availableBalance -= paymentAmount;

        // Update the UI
        document.getElementById("payment-status").textContent = `Payment of $${paymentAmount.toFixed(2)} successful!`;
        document.getElementById("available-balance").textContent = `$${availableBalance.toFixed(2)}`;

        // Optionally, you can save this new balance back to localStorage or send it to a server
    } else {
        document.getElementById("payment-status").textContent = "Invalid payment amount. Please try again.";
    }
}

export default CreditCardApplication;
