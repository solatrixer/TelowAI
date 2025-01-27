import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Nav />, div);
  ReactDOM.unmountComponentAtNode(div);
});
