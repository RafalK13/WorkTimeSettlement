import React from "react";
import logo from "../img/logo.png";
import '../styles/Header.scss'

const Header = () => {
    return (
        <div className='r-header'>
            <div className='r-logo'>
                <img src={logo} alt="logoGIWK" />
            </div>
            <div className='r-header-opis'>
                <p>Rozliczenie czasu pracy - panel zbiorczy</p>
            </div>
        </div>
    )
}

export default Header;