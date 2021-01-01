import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './hooks/ScrollToTop';
import * as serviceWorker from './serviceWorker';

import App from './App';
import { GlobalStyle } from './GlobalStyle';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <GlobalStyle />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
