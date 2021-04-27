import React, { Component } from 'react';
import Navbar from './Navbars/NavbarTop/NavBar';
import Footer from './Navbars/Footer/Footer';
import ContactModal from './Body/ContactModal';

class Root extends Component {
    state = { showModal: false }

    openModal = () => this.setState({ showModal: true });
    closeModal = () => this.setState({ showModal: false });

    render() {
        return (
            <React.Fragment>
                <Navbar modalClick={this.openModal}/>
                <ContactModal show={this.state.showModal} close={this.closeModal}/>
                <React.StrictMode>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 m-0 p-0">
                                <main>
                                    {this.props.children}
                                </main>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </React.StrictMode>
            </React.Fragment>
        )
    }
}
export default Root;