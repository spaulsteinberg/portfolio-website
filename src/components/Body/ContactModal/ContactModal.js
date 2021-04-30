import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import styles from './ContactModal.module.css';
import PostContactRequest from '../../../models/PostContactRequest';

class ContactModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
            submit: {
                messageIsSending: null,
                messageSendSuccess: null,
                messageSendFailure: null
            },
            errors: {
                firstName: null,
                lastName: null,
                message: null
            },
            valid: null
        }
        this.baseState = {...this.state}
    }

    sendButtonClickHandler = event => {
        event.preventDefault();
        console.log("clicked submit")
        // validate one more time
        if (this.state.firstName.trim() === '' || this.state.lastName.trim() === '' || this.state.message === ''){
            this.validateName(this.state.firstName);
            this.validateName(this.state.lastName);
            this.setState({valid: false})
            return;
        }
        // check for any form errors before proceeding
        let required = [...Object.values(this.state.errors)].some(x => x !== null);
        if (required) {
            this.setState({valid: false})
            return;
        } else this.setState({valid: true})

        let request = new PostContactRequest(this.state.firstName, this.state.lastName, this.state.email, this.state.msg);
        console.log("SAMPLE REQ:", request)
        //this.setState({...this.baseState})
    }

    inputTypeChangeHandler = event => {
        let {name, value} = event.target;
        this.setState({
            [name] : value
        })
    }

    validateName = name => {
        let numbersExist = new RegExp('[0-9]')
        if (!this.state[name] || this.state[name].trim() === "null" || this.state[name].trim() === "undefined"){
            this.setState({
                errors: { ...this.state.errors, [name]: "Value cannot be null or undefined" }
            });
        }
        else if (this.state[name].trim().length < 1){
            this.setState({
                errors: {...this.state.errors, [name]: "Cannot leave this field blank."}
            })
        }
        else if (numbersExist.test(this.state[name])) {
            this.setState({
                errors: { ...this.state.errors, [name]: "Invalid input (numerics)"}
            })
        }
        else if (this.state[name].trim().length > 40) {
            this.setState({ errors: {...this.state.errors, [name]: "Length is too long"}})
        }
        else {
            this.setState({
                errors: { ...this.state.errors, [name]: null }
            })
        }
    }

    validateMessage = message => {
        if (!message || message.length === 0) this.setState({errors: {...this.state.errors, message: "Must enter a value here"}})
        else if (message.length > 500) this.setState({errors: {...this.state.errors, message: "Must be under 500 characters"}})
        else this.setState({errors: {...this.state.errors, message: null}})
    }

    // on blur check for errors in name
    blurCheckNameHandler = event => {
        let {name} = event.target;
        this.validateName(name)
    }

    validateMessageOnBlur = event => {
        let message = this.state[event.target.name].trim();
        this.validateMessage(message)
    }

    // show error block underneath fields
    showErrorSmallBlock = value => {
        return value !== null ? <small className="text-danger">*{value}</small> : null
    }

    // clear the form on close or hide and then close
    onHideAndCloseHandler = () => {
        this.setState({...this.baseState})
        this.props.close();
    }

    render() {
        let { show } = this.props;
        return (
            <Modal show={show} onHide={this.onHideAndCloseHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Form.Row>
                            <Col sm={{size: 5}}>
                                <Form.Label>First Name<span className="text-danger">*</span></Form.Label>
                                <FormControl type="text" name="firstName" value={this.state.firstName} onChange={this.inputTypeChangeHandler} onBlur={this.blurCheckNameHandler} />
                                {this.showErrorSmallBlock(this.state.errors.firstName)}
                            </Col>
                            <Col sm={{size: 5, offset: 1}}>
                                <Form.Label>Last Name<span className="text-danger">*</span></Form.Label>
                                <FormControl type="text" name="lastName" value={this.state.lastName} onChange={this.inputTypeChangeHandler} onBlur={this.blurCheckNameHandler} />
                                {this.showErrorSmallBlock(this.state.errors.lastName)}
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
                                <Form.Label>Message<span className="text-danger">*</span></Form.Label>
                                <FormControl as="textarea" name="message" value={this.state.message} onChange={this.inputTypeChangeHandler} onBlur={this.validateMessageOnBlur} />
                                {this.showErrorSmallBlock(this.state.errors.message)}
                            </Col>
                        </Form.Row>
                    </form>
                </Modal.Body>
                <Modal.Footer className={styles.ModalClass}>
                    <div>
                        <Button className="mx-3" variant="primary" onClick={this.sendButtonClickHandler}>Send</Button>
                        <Button className="mx-3" variant="secondary" onClick={this.onHideAndCloseHandler}>Close</Button>
                    </div>
                    {(this.state.valid === true || this.state.valid === null) ? null : <div className="text-danger">Form contains errors. Please correct these are re-submit.</div>}
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ContactModal;