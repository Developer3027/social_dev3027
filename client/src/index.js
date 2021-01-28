import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './hooks/ScrollToTop'

import App from './App'
import { GlobalStyle } from './GlobalStyle'

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <GlobalStyle />
      <App />
    </ScrollToTop>
  </BrowserRouter>,
  document.getElementById('root')
)
