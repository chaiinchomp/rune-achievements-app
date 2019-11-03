import React from "react";
import "./styles/index.css";
import { BrowserRouter, Route } from "react-router-dom";
import TopNav from "./views/TopNav";
import "bootstrap/dist/css/bootstrap.min.css";
import AchievementLog from "./pages/AchievementLog";

export default function App(props) {
    return (
        <div className="App">
            <BrowserRouter>
                <TopNav />
                <Route exact path="/" component={AchievementLog} />
            </BrowserRouter>
        </div>
    );
}
