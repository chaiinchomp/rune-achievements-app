import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Achievements from "../pages/Achievements";
import About from "../pages/About";

export default function() {
    return (
        <React.Fragment>
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
                </Navbar>
            </React.Fragment>
            <React.Fragment>
                <Switch>
                    <Route path="/achievements" component={Achievements} />
                    <Route path="/about" component={About} />
                </Switch>
            </React.Fragment>
        </React.Fragment>
    );
}
