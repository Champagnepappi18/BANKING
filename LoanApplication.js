// LoanApplication.js
import React from 'react';

function LoanApplication() {
    return (
        <div className="tab-section">
            <h2>Loan Application</h2>
            <form>
                <label>Loan Amount: <input type="number" placeholder="Enter loan amount" /></label><br />
                <label>Loan Type: <select><option>Personal</option><option>Home</option></select></label><br />
                <button type="submit">Apply for Loan</button>
            </form>
            <p>Loan approval status will be displayed here.</p>
        </div>
    );
}

export default LoanApplication;
