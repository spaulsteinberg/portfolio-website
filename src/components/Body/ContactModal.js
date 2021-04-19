import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';

class ContactModal extends PureComponent {

    state = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    componentWillUnmount(){
        console.log("unmounting contact modal...")
        if(this.timer) clearTimeout(this.timer);
    }

    sendButtonClickHandler = event => {
        //TODO -> send request
        event.preventDefault();
        console.log("send clicked")
        // if not closed, close modal
        this.timer = setTimeout(() => {
            console.log("timing...")
            this.props.close();
            this.setState({
                firstName: '',
                lastName: '',
                email: '',
                message: ''
            })
        }, 1000)
    }

    inputTypeChangeHandler = event => {
        let {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    render() {
        let {show, close} = this.props;
        return (
            <Modal show={show} onHide={close}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Form.Row>
                            <Col sm={{size: 5}}>
                                <Form.Label>First Name</Form.Label>
                                <FormControl type="text" name="firstName" value={this.state.firstName} onChange={this.inputTypeChangeHandler}/>
                            </Col>
                            <Col sm={{size: 5, offset: 1}}>
                                <Form.Label>Last Name</Form.Label>
                                <FormControl type="text" name="lastName" value={this.state.lastName} onChange={this.inputTypeChangeHandler}/>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Label>Email</Form.Label>
                                <FormControl style={{width: '75%'}} type="email" name="email" value={this.state.email} onChange={this.inputTypeChangeHandler} />
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Col>
                                <Form.Label>Message</Form.Label>
                                <FormControl as="textarea" name="message" value={this.state.message} onChange={this.inputTypeChangeHandler} />
                            </Col>
                        </Form.Row>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.sendButtonClickHandler}>Send</Button>
                    <Button variant="secondary" onClick={close}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ContactModal;