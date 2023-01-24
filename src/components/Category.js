import React from "react";
import "./styles.css";
import logohdr from "../assets/images/grandma-storytelling.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Category= () => {
    return(
        <>
        <title>English Short Stories</title>
        <div className="siteHeader">
              <div className="section">
                <img className="logo" src={logohdr}/>
                <div className="menu"><a href="#">MainPage</a></div>
                <div className="menu"><a href="#">Category</a></div>
                <div className="menu"><a href="#">ContactUs</a></div>
              </div>
              <div className="topic">
                <p> English Short Stories</p>
              </div>

              <div className="section">
                <div className="sideMenu">
                    <a href="#">
                      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" size="sm" />
                    </a>
                    <a href="#">
                    <FontAwesomeIcon icon="fa-regular fa-right-to-bracket" size="sm" />
                    </a>
                </div>
              </div>
        </div>
            <div className="siteHeader">
                <ul>
                    <li><a href="#">Fairytales</a></li>
                    <li><a href="#">Educational</a></li>
                    <li><a href="#">Poem&Music</a></li>
                </ul>
            </div> 
        
        </>
    );
}
export default Category;