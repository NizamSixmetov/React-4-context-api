import React, { useEffect, useState } from 'react'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import './App.css'
import PageContainer from './PageContainer'
import ColorFullBox from './Components/ColorFullBox'

const App = () => {
  return (
    <div>
      <PageContainer>
          <Header />
          <Footer />
          <ColorFullBox />
      </PageContainer>
    </div>
  )
};

export default App;