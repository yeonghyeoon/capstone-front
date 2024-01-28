import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux';
import store from './Redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
