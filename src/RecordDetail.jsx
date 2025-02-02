import {Link, useParams} from "react-router";
import React, { useEffect, useState } from "react";
import RecordDetailCard from "./components/RecordDetailCard.jsx";
import './RecordDetail.css'

function RecordDetail() {
    const { id } = useParams();
    const [record, setRecord] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchRecordDetails() {
            if (!id) {
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
                setRecord(data);
            } catch (error) {
                throw new Error(`Er is een fout opgetreden bij het ophalen van de record: ${error}`);
            } finally {
                setIsLoading(false);
            }
        }
        fetchRecordDetails();
    }, [id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (!record) {
        return <div>Record niet gevonden.</div>;
    }

    return (
        <div>
            <h1>Records Overzicht</h1>
            <RecordDetailCard record={record} />
            <button className="Detail-button"><Link to={`/edit/${id}`}>Pas record aan</Link></button>
        </div>
    );
}

export default RecordDetail;
