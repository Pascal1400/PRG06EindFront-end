import React, { useState } from "react";
import { useNavigate } from "react-router"
import FormComponent from "./components/FormRecord.jsx";
import "./RecordCreate.css"

function CreateRecord() {
    const [records, setRecords] = useState([]);
    const navigate = useNavigate();
    const [showSuccess, setShowSuccess] = useState(false);

    const onRecordCreate = (newRecord) => {
        setRecords((prevRecords) => [...prevRecords, newRecord]);
        setShowSuccess(true);
    }

    return (
        <div>
            <h1>Maak een nieuwe record</h1>

            <FormComponent onRecordCreate={onRecordCreate} />

            {showSuccess && (
                <div className="success-message">
                    <p>Record is succesvol aangemaakt!</p>
                    <button onClick={() => navigate('/records')}>Ga naar overzicht</button>
                </div>
            )}

        </div>

    )
}

export default CreateRecord