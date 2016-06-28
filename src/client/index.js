import '../common/css/chatapp.css';
import React from 'react';
import { render } from 'react-dom'
// import { browserHistory } from 'react-router';
// import { Router } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from '../common/store/configureStore';
import DevTools from '../common/containers/DevTools';
// import routes from '../common/routes';

import Chat from '../common/containers/ChatContainer';


const store = configureStore();
const rootElement = document.getElementById('react');



render(
  <Provider store={store}>
   	<Chat />
  </Provider>,
  document.getElementById('root')
)