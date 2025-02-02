import React, { useEffect, useState } from "react";
import RecordCard from "./components/RecordCard";
import './Records.css'

function Records() {
    const [records, setRecords] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchRecords() {
            try {
                const response = await fetch('http://145.24.223.133:8100/records/', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                    }
                });

                const data = await response.json();
                setRecords(data.items)
            } catch (error) {
                console.error('Er is een fout opgetreden:', error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchRecords();
    }, []);

    return (
        <div className="home-container">
            <h1 className="Records-title">Records Overzicht</h1>

            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <ul className="Record-ul">
                    {records.map((record, index) => (
                        <RecordCard key={record.id || index} record={record} index={index} />
                    ))}
                </ul>
            )}

        </div>
    );
}

export default Records;
