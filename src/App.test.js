import {render} from '@testing-library/react';
import App from './App';

describe('[App.js]', () => {
  it('App.js renders successfully', () => {
    const appRender = render(<App />);
    expect(appRender).toBeTruthy();
  })
})