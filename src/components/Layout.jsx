import React from "react";
import { Link, Outlet } from "react-router";
import './Layout.css'

function Layout() {
    return (
        <div className="layout">
            <nav className="nav">
                <p><Link to="/">Home</Link></p>
                <p><Link to="/Records">Records</Link></p>
                <p><Link to="/Create">Maak record</Link></p>
            </nav>

            <main>
                <Outlet />
            </main>

            <footer>
                <p className="footer-text">© 2025 Mijn App</p>
            </footer>
        </div>
    );
}

export default Layout;
