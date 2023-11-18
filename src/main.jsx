import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThemeContextProvider from './Components/context-api/ThemeContext.jsx'
import BoxColorContextProvider from './Components/context-api/BoxColorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <BoxColorContextProvider>
      <App />
    </BoxColorContextProvider>
  </ThemeContextProvider>,
)
