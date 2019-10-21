import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Achievements from '../achievements/Achievements';
import About from '../about/About';

export default function() {
    return (
        <div>
            <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">RuneAchievements</Navbar.Brand>
                <Nav>
                    <Link to="/achievements" className="nav-link">Achievements</Link>
                    <Link to="/about" className="nav-link">About</Link>
                </Nav>
            </Navbar>
        </div>
        <div>
            <Switch>
                <Route path="/achievements" component={Achievements} />
                <Route path="/about" component={About} />
            </Switch>
            </div>
        </div>
    )
}
