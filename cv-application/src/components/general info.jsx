import React, { useState } from 'react';
import SubmitButton from './SubmitButton';
import EditButton from './EditButton';

import '../styles/GeneralInfo.css';

function GeneralInfo() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleEdit = () => {
        // Logic to handle the edit button
    };

    const handleSubmit = () => {
        // Logic to handle the submit button
    };

    return (
        <div className="general-info-container">
            <h2>General Information</h2>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <SubmitButton onSubmit={handleSubmit} />
            <EditButton onEdit={handleEdit} />
        </div>
    );
}

export default GeneralInfo;
