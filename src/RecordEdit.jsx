import { useParams, useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import FormComponentEdit from "./components/FormRecordEdit.jsx";
import './RecordEdit.css'

function EditRecord() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recordToEdit, setRecordToEdit] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    useEffect(() => {
        async function fetchRecordDetails() {
            if (!id) {
                console.error('Geen geldig ID gevonden.');
                return;
            }
            try {
                const response = await fetch(`http://145.24.223.133:8100/records/${id}`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Fout bij ophalen van het record: ${response.status}`);
                }

                const data = await response.json();
                setRecordToEdit(data);
            } catch (error) {
                throw new Error(`Er is een fout opgetreden bij het ophalen van het record: ${error}`);
            }
        }
        fetchRecordDetails();
    }, [id]);

    const handleRecordUpdate = () => {
        setShowSuccess(true);
    };

    if (!recordToEdit) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Record bewerken</h1>
            <FormComponentEdit recordToEdit={recordToEdit} onRecordEdit={handleRecordUpdate} />

            {showSuccess && (
                <div className="success-message">
                    <p>Record is succesvol bewerkt!</p>
                    <button onClick={() => navigate('/records')}>Terug naar records</button>
                </div>
            )}
        </div>
    )
}

export default EditRecord;