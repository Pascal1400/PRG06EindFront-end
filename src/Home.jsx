import './Home.css'
import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <header className="home-header">
                <div className="home-text">
                    <h1 className="home-title">Welkom bij World Records</h1>
                    <img src="/guinness-world-record.jpg" alt="Guinness World Records" className="home-image"/>
                    <div className="home-description">
                        <p> Ontdek de meest verbazingwekkende records van over de hele wereld! </p>
                        <p> Hier kun je alle Guinness World Records bekijken en nieuwe records ontdekken. </p>
                        <button onClick={() => navigate('/records')}>Ga naar alle records</button>
                    </div>
                </div>
            </header>

        </div>
    );
}

export default Home;
