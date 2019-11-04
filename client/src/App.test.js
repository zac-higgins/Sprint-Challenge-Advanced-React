import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as rtl from '@testing-library/react';
import LightButton from './components/LightButton';
import { fireEvent } from '@testing-library/react';


afterEach(rtl.cleanup);

//makes sure the app renders and logs the html that will be rendered in the browser
test('renders without crashing', () => {
  const wrapper = rtl.render(<App />);
  wrapper.debug();
});

//makes sure that the button with text 'Toggle Light/Dark Mode' is rendered in the component
test('button exists', () => {
  const wrapper = rtl.render(<LightButton />);
  expect(wrapper.getByText('Toggle Light/Dark Mode'));
})

//checks for the data-testid "unordered-list"
test('has unordered list', () => {
  const wrapper = rtl.render(<App />);
  expect(wrapper.getAllByTestId('unordered-list'))
})