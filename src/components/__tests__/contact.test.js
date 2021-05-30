import React from 'react';
import {cleanup, fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactModal from '../Body/ContactModal/ContactModal';

describe('Contact', () => {
  const mockClose = jest.fn();
  afterEach(cleanup)

  it('should render form correctly', () => {
    render(<ContactModal show={true} close={mockClose} />);

    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Last Name*")).toBeInTheDocument();
    expect(screen.getByLabelText("First Name*")).toBeInTheDocument();
    expect(screen.getByLabelText("Message*")).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(3)
  });

  it('click without all required fields should throw an error', () => {
      render(<ContactModal show={true} close={mockClose} />);
      const sendBtn = screen.getByRole('button', {name: 'Send'})
      fireEvent.click(sendBtn);
      expect(screen.getByText("Form contains errors. Please correct these are re-submit."))
  });

  it('click with all required fields and no email should not throw error', () => {
    render(<ContactModal show={true} close={mockClose} />);
    const firstName = screen.getByLabelText("First Name*");
    const lastName = screen.getByLabelText("Last Name*");
    const message = screen.getByLabelText("Message*");
    const sendBtn = screen.getByRole('button', {name: 'Send'});
    fireEvent.change(firstName, { 'target': {'value': 'Sam'}});
    fireEvent.change(lastName, { 'target': {'value': 'Steinberg'}});
    fireEvent.change(message, { 'target': {'value': 'hello'}});
    fireEvent.click(sendBtn);
    const errText = screen.queryByText("Form contains errors. Please correct these are re-submit.")
    expect(errText).not.toBeInTheDocument();
});
});