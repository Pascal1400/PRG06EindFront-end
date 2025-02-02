import { Link } from "react-router";

function RecordCard({record, index}) {
    const colorSwitch = index % 2 === 0 ? "Record-li-even" : "Record-li-odd";

    return (
        <li className={colorSwitch}>
            <section className="Record-section">
                <div className="Section-left">
                    <h2 className="recordName">{record.recordName}</h2>
                    <p className="recordhouder"><strong>Recordhouder:</strong> {record.name}</p>
                </div>

                <Link to={`/record/${record.id}`} className="Section-right">
                    <button> Bekijk Record </button>
                </Link>
            </section>
        </li>
    );
}

export default RecordCard;