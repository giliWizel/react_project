import React from 'react'
import {
    Link

} from 'react-router-dom'


export default function Home(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/Login">כניסה</Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/Register"> הרשמה </Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/ScheduleClient"> לוח זמנים  </Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/About"> אודות  </Link>
                        </div>
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/feedback"> משוב למערכת</Link>
                        </div>


                    </div>
                </div>
            </nav>

        </>

    )
}