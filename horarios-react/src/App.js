import React from 'react';

import './global.css'

import Header from './components/Header'
import MobileLayout from './components_mobile/MobileLayout'
import DesktopLayout from './components/DesktopLayout'

function App() {
  return (
    <>
      <Header />
      <DesktopLayout />
      <MobileLayout />
    </>
  )
}

export default App;
