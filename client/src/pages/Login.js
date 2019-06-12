import React, { Component } from 'react'
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";
import Homepagecontainer from "../components/containers/Homepagecontainer";

class Login extends Component {
    render() {
        return (
            <div>
                <Nav />
                <Homepagecontainer />
                <h1>Load Search App</h1>
                <Footer />
            </div >
        )
    }
}

export default Login;