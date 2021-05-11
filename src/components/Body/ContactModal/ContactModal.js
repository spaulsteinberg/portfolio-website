import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
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
                messageSendFailure: null,
                sentMessageResponse: null,
                errorMessageResponse: null
            },
            errors: {
                firstName: null,
                lastName: null,
                message: null
            },
            valid: null
        }
        this.baseState = {...this.state}
        this.route = '/api/email/send'
        this.baseRoute = 'http://localhost:3001'
    }

    sendButtonClickHandler = event => {
        event.preventDefault();
        // validate form again and check for blank entries
        this.validateForm();
        if (this.state.firstName.trim() === "" || this.state.lastName.trim() === "" || this.state.message.trim() === ""){
            this.setState({
                valid: false
            })
            return;
        }
        // if there are errors, set as invalid form
        let required = [...Object.values(this.state.errors)].some(x => x !== null);
        if (required) {
            this.setState({valid: false})
            return;
        } else this.setState({valid: true})

        let request = new PostContactRequest(this.state.firstName, this.state.lastName, this.state.email, this.state.message);
        this.setState({submit: {messageIsSending: true, messageSendSuccess: null,messageSendFailure: null,sentMessageResponse: null,errorMessageResponse: null}}) 

        fetch(`${this.baseRoute}${this.route}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(request)
        })
        .then(response => {
            if (response.ok) return response.json()
            else return response.text().then(text => {throw new Error(text)})
        })
        .then(data => {
            this.setState({
                submit: {
                    ...this.state.submit, messageSendSuccess: true, messageSendFailure: false, sentMessageResponse: data.message
                }
            });
        })
        .catch(error => {
            this.setState({
                submit: {
                    ...this.state.submit, messageSendFailure: true, messageSendSuccess: false, errorMessageResponse: error.description ? error.description : "Something went wrong. Please try again later."
                }
            })
        })
        .finally(() => {
            this.setState({submit: {...this.state.submit, messageIsSending: false}});
        })
    }

    showSubmitResponse = () => this.state.submit.messageSendSuccess ? <div className={styles.SuccessBox}>Success! {this.state.submit.sentMessageResponse}</div>
                               : this.state.submit.messageSendFailure ? <div className={styles.ErrorBox}>{this.state.submit.errorMessageResponse}</div> : null

    // validate on input
    inputTypeChangeHandler = event => {
        let {name, value} = event.target;
        this.setState({
            [name] : value
        }, () => {
            if (name === "firstName" || name === "lastName"){
                this.validateName(name);
            } else if (name === "message") {
                this.validateMessage(value)
            }
        })
    }

    validateForm = () => {
        this.validateName("firstName");
        this.validateName("lastName");
        this.validateMessage(this.state.message);
    }

    validateName = name => {
        let numbersExist = new RegExp('[0-9]')
        if (!this.state[name] || this.state[name].trim().length < 1){
            this.setState({
                errors: { ...this.state.errors, [name]: "Cannot leave this field blank" }
            });
        }
        else if (numbersExist.test(this.state[name])) {
            this.setState({
                errors: { ...this.state.errors, [name]: "Invalid input (numerics)"}
            })
        }
        else if (this.state[name].trim().length > 40) {
            this.setState({
                errors: {...this.state.errors, [name]: "Length is too long"}
            })
        }
        else {
            this.setState({
                errors: { ...this.state.errors, [name]: null }
            })
        }
    }

    validateMessage = message => {
        if (!message || message.length === 0) this.setState({ errors: {...this.state.errors, message: "Must enter a value here"}})
        else if (message.length > 500) this.setState({ errors: {...this.state.errors, message: "Must be under 500 characters"}})
        else this.setState({errors: {...this.state.errors, message: null}})
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
            <Modal show={show} onHide={this.onHideAndCloseHandler} className="text-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <Form.Row>
                            <Col sm={{size: 5}}>
                                <Form.Label>First Name<span className="text-danger">*</span></Form.Label>
                                <FormControl type="text" name="firstName" value={this.state.firstName} onChange={this.inputTypeChangeHandler} />
                                {this.showErrorSmallBlock(this.state.errors.firstName)}
                            </Col>
                            <Col sm={{size: 5, offset: 1}}>
                                <Form.Label>Last Name<span className="text-danger">*</span></Form.Label>
                                <FormControl type="text" name="lastName" value={this.state.lastName} onChange={this.inputTypeChangeHandler} />
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
                        <Button className="mx-3" variant="primary" onClick={this.sendButtonClickHandler} disabled={this.state.submit.messageSendSuccess}>Send</Button>
                        <Button className="mx-3" variant="secondary" onClick={this.onHideAndCloseHandler}>Close</Button>
                    </div>
                    {(this.state.valid === true || this.state.valid === null) ? null : <div className="text-danger">Form contains errors. Please correct these are re-submit.</div>}                 
                </Modal.Footer>
                <div className={styles.ModalClass}>
                    {this.state.submit.messageIsSending ? <Spinner animation="border" role="status" style={{color: '#17a2b8'}}></Spinner> : null}
                    {this.showSubmitResponse()}
                </div>
            </Modal>
        )
    }
}

export default ContactModal;