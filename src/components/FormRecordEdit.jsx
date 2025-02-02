import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router";

const FormComponentEdit = ({onRecordEdit, recordToEdit, onRecordDelete }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        recordName: '',
        description: '',
    });

    useEffect(() => {
        if (recordToEdit) {
            setFormData({
                name: recordToEdit.name || '',
                recordName: recordToEdit.recordName || '',
                description: recordToEdit.description || '',
            });
        }
    }, [recordToEdit]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (recordToEdit) {
            const recordId = recordToEdit.id;
            if (recordId) {
                await updateRecord(recordId);
            }
        }
    };

    const updateRecord = async (id)=> {
        try {
            const response = await fetch(`http://145.24.223.133:8100/records/${id}`, {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error(`Fout bij updaten van record: ${response.status}`);
            }

            const data = await response.json();
            onRecordEdit(data);
        }
        catch (error) {
            throw new Error(`Er is een fout opgetreden bij het ophalen van het record: ${error}`);
        }
    }

    const handleDelete = async (id) => {
        if (window.confirm('Weet je zeker dat je dit record wilt verwijderen?')) {
            try {
                const response = await fetch(`http://145.24.223.133:8100/records/${id}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                    },
                });
                if (!response.ok) {
                    throw new Error(`Fout bij het verwijderen van locatie: ${response.status}`);
                }
                navigate(`/records`);
            } catch (error) {
                alert('Er is iets fout gegaan.');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className="Edit-form">
            <div className="Edit-edits">
                <div className="Edit-divs">
                    <label className="Edit-label" htmlFor="name">naam recordhouder:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="Edit-input"
                    />
                </div>
                <div className="Edit-divs">
                    <label className="Edit-label" htmlFor="recordName">naam record:</label>
                    <input
                        type="text"
                        id="recordName"
                        name="recordName"
                        value={formData.recordName}
                        onChange={handleInputChange}
                        className="Edit-input"
                    />
                </div>
                <div className="Edit-divs">
                    <label className="Edit-label" htmlFor="description">description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="Edit-input"
                    />
                </div>
            </div>
            <div className="Edit-buttons">
                <button type="submit" className="Button-change">Bewerken</button>
                <button type="button" onClick={() => handleDelete(recordToEdit.id)} className="Button-delete">Verwijder Record</button>
            </div>

        </form>
    );
}

export default FormComponentEdit;