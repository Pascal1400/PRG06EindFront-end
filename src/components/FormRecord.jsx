import React, {useEffect, useState} from 'react';

const FormComponent = ({onRecordCreate}) => {
    const [formData, setFormData] = useState({
        name: '',
        recordName: '',
        description: '',
    });

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await saveRecord();
    };

    const saveRecord = async ()=> {
        const response = await fetch('http://145.24.223.133:8100/records/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            console.error('Fout bij opslaan van record:', response.status);
            return;
        }

        const data = await response.json();
        onRecordCreate(data);
    }

    return (
        <form onSubmit={handleSubmit} className="Add-form">
            <div className="Add-adds">
                <div className="Add-divs">
                    <label className="Add-label" htmlFor="name">naam recordhouder:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="Add-input"
                    />
                </div>
                <div className="Add-divs">
                    <label className="Add-label" htmlFor="recordName">naam record:</label>
                    <input
                        type="text"
                        id="recordName"
                        name="recordName"
                        value={formData.recordName}
                        onChange={handleInputChange}
                        className="Add-input"
                    />
                </div>
                <div className="Add-divs">
                    <label className="Add-label" htmlFor="description">description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="Add-input"
                    />
                </div>
            </div>
            <button type="submit" className="Add-button">Opslaan</button>
        </form>
    );
}

export default FormComponent;