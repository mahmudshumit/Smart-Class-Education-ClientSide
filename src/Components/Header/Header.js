import React from 'react';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand" href="#">Smart Class</a>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item active">
                    <a className="nav-link mr-5" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-5" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-5" href="#">Log In</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-5" href="#">Review</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link mr-5" href="#">Admin</a>
                </li>
               
               
            </ul>
        </div>
    </nav>
    );
};

export default Header;