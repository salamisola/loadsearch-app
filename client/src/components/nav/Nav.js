import React from "react";
import "./nav.css";

function Nav() {
    return (
        <div>
            <nav>
                <div >
                    Load Search
                </div>
                <ul>
                    <li>
                        <a href="..">Home</a>
                    </li>
                    <li>
                        <a href="..\Searchpage">Search Page</a>
                    </li>
                    <li>
                        <a href="..\Profilepage">Profile Page</a>
                    </li>
                    <li>
                        <a href="..\Bloghome">Blogs Page</a>
                    </li>
                </ul>
            </nav>
            <br /> <br />
        </div >
    )
}

export default Nav;