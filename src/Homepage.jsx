import React from "react";
import "./Homepage.css";
// import Sidenav from "../src/timeline/Suggestions";
// import Timeline from "./../src/timeline/Timeline";

function Homepage() {
    return (
        <div className="homepage">
            <div className="homepage__navWraper">
                <Sidenav />
            </div>
            <div className="homepage__timeline">
                <Timeline />
            </div>
        </div>
    );
}

export default Homepage;