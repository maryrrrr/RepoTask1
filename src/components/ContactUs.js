import React from "react";
import "./styles.css";
import logohdr from "../assets/images/grandma-storytelling.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactUs= () => {
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

        
            <div className="main"> 
                <form className="contactFrm">
                    <h1 className="frmTitle">Contact Us</h1>
                    <label>Name:</label>
                    <input type="text" className="txtinput" placeholder="Enter Your Name"/><br/>
                    <label>Email:</label>
                    <input type="text" className="txtinput" placeholder="Enter Your Email"/><br/>
                    <label>Comment:</label>
                    <textarea className="txtinput" rows={5} placeholder="Write something.."></textarea><br/>
                    <input className="btnSubmit" type="submit"/>
                </form>
            </div>

        </>
    );
}
export default ContactUs;