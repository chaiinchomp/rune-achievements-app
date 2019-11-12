import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import AchievementLog from "../pages/AchievementLog";
import About from "../pages/About";
import ExportModal from "../components/ExportModal";
import ResetModal from "../components/ResetModal";

export default function() {
    const [showExportModal, setShowExportModal] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);

    const handleCloseExportModal = () => setShowExportModal(false);
    const handleShowExportModal = () => setShowExportModal(true);

    const handleCloseResetModal = () => setShowResetModal(false);
    const handleShowResetModal = () => setShowResetModal(true);

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">RuneAchievements</Navbar.Brand>
                <Nav>
                    <Link to="/achievements" className="nav-link">
                        Achievements
                    </Link>
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text
                        onClick={handleShowResetModal}
                        className="clickable mr-4"
                    >
                        Reset
                    </Navbar.Text>
                    <Navbar.Text
                        onClick={handleShowExportModal}
                        className="clickable mr-2"
                    >
                        Import/Export
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <Navbar></Navbar>
            <Switch>
                <Route path="/achievements" component={AchievementLog} />
                <Route path="/about" component={About} />
            </Switch>
            <ExportModal
                show={showExportModal}
                onClose={handleCloseExportModal}
            />
            <ResetModal show={showResetModal} onClose={handleCloseResetModal} />
        </React.Fragment>
    );
}
