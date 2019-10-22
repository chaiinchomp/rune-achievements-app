import React from "react";
import "./styles/index.css";
import { BrowserRouter, Route } from "react-router-dom";
import TopNav from "./components/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Achievements from "./pages/Achievements";
import About from "./pages/About";

export default function App(props) {
    return (
        <div className="App">
            <BrowserRouter>
                <TopNav />
                <Route exact path="/" component={Achievements} />
                <Route exact path="/about" component={About} />
            </BrowserRouter>
        </div>
    );
}
