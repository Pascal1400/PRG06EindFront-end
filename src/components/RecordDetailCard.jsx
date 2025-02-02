import React from "react";
import Records from "../Records.jsx";

function RecordDetailCard({record}) {
    return (
        <div className="Detail">
            <h2 className="Detail-recordHouder">{record.name}</h2>
            <p className="Detail-recordName"><strong>Record:</strong> {record.recordName}</p>
            <p className="Detail-description"><strong>Beschrijving:</strong> {record.description}</p>
        </div>
    );
}

export default RecordDetailCard;