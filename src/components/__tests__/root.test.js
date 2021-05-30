import React from 'react';
import {cleanup, render} from '@testing-library/react';
import Root from '../Root';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Root', () => {
  afterAll(cleanup)

  it('should render correctly', () => {
    const tree = render(
      <Router>
        <Root/>
      </Router>
    );
    expect(tree.getAllByRole('navigation')).toHaveLength(2);
    expect(tree.getByText("Experience")).toBeInTheDocument();
    expect(tree.getByText("About")).toBeInTheDocument();
    expect(tree.getByText("Portfolio")).toBeInTheDocument();
  });
});