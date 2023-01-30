import React from "react";
import "./styles.css";
import logohdr from "../assets/images/grandma-storytelling.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MainPage= () => {
    return(
        <>
        <title>MainPage</title>
        <div className="siteHeader">
              <div className="section">
                <img className="logo" src={logohdr}/>
              </div>
              <div className="topic">
                <p> English Short Stories</p>
              </div>
              <div className="section">
                <div className="sideMenu">
                  <a href="#">
                    <FontAwesomeIcon icon="fa-regular fa-right-to-bracket" size="sm" />
                  </a>
                  <a href="#">
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="sm" />
                  </a>
                </div>
              </div>
        </div>
        <div className="body">
          <a href="#" className="Storylist">Inspiration</a>
          <a href="#" className="Storylist">Motivation</a>
          <a href="#" className="Storylist">Fables</a>
          <a href="#" className="Storylist">Contact Us</a>
          <div className="searchBox">
            <input type="text" className="txtSearch" placeholder="Enter Something..."/>
            <button className="btn">Search</button>
          </div>
        </div>
        </>
    );
}
export default MainPage;