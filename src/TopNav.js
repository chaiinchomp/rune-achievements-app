import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default function() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">RuneAchievements</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Achievements</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                </Nav>
        </Navbar>
    )
}