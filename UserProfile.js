// UserProfile.js
import React from 'react';

function UserProfile() {
    return (
        <div className="tab-section">
            <h2>User Profile Management</h2>
            <form>
                <label>Name: <input type="text" placeholder="Enter your name" /></label><br />
                <label>Date of Birth: <input type="date" /></label><br />
                <label>Password: <input type="password" placeholder="Enter your password" /></label><br />
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default UserProfile;
