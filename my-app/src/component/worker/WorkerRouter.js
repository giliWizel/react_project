import React from 'react';
import { Link, Route, Routes } from 'react-router-dom'
import Details from './details';
import Feedback from './feedback';
import ProposalsForApproval from './proposalsForApproval';
import RegisterWorker from './register';
import CalendarWorker from './schedule';
export default function WorkerRouter() {
    return (
        <div>
            <Menu />
            <Routes>
                <Route path="/registerWorker" element={<RegisterWorker />}></Route>
                <Route path="/details" element={<Details />}></Route>
                <Route path="/proposalsForApproval" element={<ProposalsForApproval />}></Route>
                <Route path="/schedule" element={<CalendarWorker />}></Route>
                <Route path="/feedback" element={<Feedback />}></Route>
            </Routes>
        </div>
    )
}

function Menu() {
    // className="navbar navbar-expand-lg navbar-light bg-light"
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" >

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto navbar-right">
                        <li className="nav-item">
                            <Link className="nav-link" to="/registerWorker">הרשמה</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/details">פרטים אישיים</Link>
                        </li>
                        <li className="nav-item navbar-right">
                            <Link className="nav-link" to="/proposalsForApproval">הצעות לאישור</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/schedule">לוח זמנים</Link>
                        </li>
                        <li className="nav-item ">
                            <Link className="nav-link" to="/feedback">משוב למערכת</Link>
                        </li>

                    </ul>

                </div>

            </nav>
        </>
    )
}