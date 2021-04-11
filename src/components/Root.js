import React, { Component } from 'react';
import Navbar from './Navbars/NavbarTop/NavBar';
import Footer from './Navbars/Footer/Footer';

class Root extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <main>
                            {this.props.children}
                            </main>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
export default Root;