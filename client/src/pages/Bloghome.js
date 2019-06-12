import React, { Component } from 'react'
import Nav from "../components/nav/Nav";
/* import Sidenav from "../components/sidenav/Sidenav"; */
import Footer from "../components/footer/Footer";
import Bloghomecontainer from "../components/containers/Bloghomecontainer";

class Bloghome extends Component {
    render() {
        return (
            <div>
                <Nav />
                {/*  <Sidenav /> */}

                <Bloghomecontainer />
                <h1>Load Search App</h1>
                {/*  <h2>The time is: <Clock /> and counting! </h2>
        <p>This clock is an example of a reusable component. You can use anywhere you'd like. */}
                {/* If you would like to learn how to implement the clock component yourself, there is a tutorial
        somewhere in <a href="https://reactjs.org/docs/getting-started.html">here</a>.</p> */}
                <Footer />
            </div >
        )
    }
}

export default Bloghome;