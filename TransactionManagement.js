// TransactionManagement.js
import React from 'react';

function TransactionManagement() {
    return (
        <div className="tab-section">
            <h2>Transaction Management</h2>
            <form>
                <label>Transfer Amount: <input type="number" placeholder="Enter amount" /></label><br />
                <label>Pay Credit Card Bill: <input type="text" placeholder="Enter bill amount" /></label><br />
                <button type="submit">Initiate Transaction</button>
            </form>
        </div>
    );
}

export default TransactionManagement;
