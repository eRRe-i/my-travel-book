import { IonIcon } from "@ionic/react";
import "./../assets/styles/Navbar.css"

export default function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbar--container">
                <IonIcon className="navbar--icon" icon="earth"></IonIcon>
                <p className="navbar--text">my travel Journal.</p>
            </div>
        </nav>

    );
}