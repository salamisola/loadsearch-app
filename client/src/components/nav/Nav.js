import React from "react";
import "./nav.css";

function Nav() {
    return (
        <div>
            <nav>
                <div >
                    {/* <!--h1><a href="#"><img src="C:/xampp/htdocs/sola/Website/hw2/hw2/Bootstrap-Portfolio/assets/images/adesola.jpg" alt="Adesola Salami"/></a></h1-->
				<h1><!--a href="#"><img src="C:\xampp\htdocs\sola\Website\Final\images\logo2.png" alt="Adesola Salami" /></a--> */} Load Search
                </div>
                <ul>
                    <li>
                        <a href="..\Home.js">Home</a>
                    </li>
                    <li>
                        <a href="..\Searchpage.js">Search Page</a>
                    </li>
                    <li>
                        <a href="..\Profilepage.js">Profile Page</a>
                    </li>
                </ul>
            </nav>
            <br /> <br />
        </div >
    )
}

export default Nav;