import React from 'react'
import './Navbar.css'
import { useDate} from "../../context";

export const Navbar = ()  => {
    const {dateDispatch} =
    useDate();

    const handleSearchClick = () => {
        dateDispatch({
          type: "OPEN_SEARCH_MODAL",
        });
      };

    return (
        <header className="heading d-flex align-center">
            {/* <img className="icon mr-1" src="/assets/image.png" alt="lightbul" /> */}
            <h1 className="heading-1">
                    <a className="link" href="/">TravelPro</a>
            </h1>
            <div className="form-container d-flex align-center cursor-pointer shadow" onClick={handleSearchClick}>
                <span className="form-option">Any Where</span>
                <span className="border-right-1px"></span>
                <span className="form-option">Any Week</span>
                <span className="border-right-1px"></span>
                <span className="form-option">Any Guests</span>
                <span className="search material-icons-outlined">search</span>
            </div>
            <nav className="d-flex align-center gap-large">
                <div className="nav d-flex align-center cursor-pointer">
                    <span className="material-icons-outlined profile-option menu">menu</span>
                    <span className="material-icons-outlined profile-option person">person_2</span>
                </div>
            </nav>
        </header>
    )
}
