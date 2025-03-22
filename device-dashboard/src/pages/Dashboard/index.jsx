import "./Dashboard.css";
import { FaHome, FaChartBar, FaCog } from "react-icons/fa";
import DeviceListing from "../DeviceListing";
function DashBoard() {
    return (
        <div className="dashboard-container">
            <aside className="dashboard-sidebar">
                <h2>Dashboard</h2>
                <ul>
                    <li><FaHome /> Home</li>
                    <li><FaChartBar /> Analytics</li>
                    <li><FaCog /> Settings</li>
                </ul>
            </aside>
            <main className="main-content">
                <header className="header">
                    <h1>Welcome to the Device Listing</h1>
                </header>
                <section className="stats">
                    <DeviceListing />
                </section>
            </main>
        </div>
    );
}

export default DashBoard;