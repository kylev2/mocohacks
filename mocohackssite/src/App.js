import React from 'react'
import useSticky from './hooks/useSticky.js'
import Landing from './components/Header/Landing'
import Navbar from './components/Header/Navbar'

function App() {
  const { isSticky, element } = useSticky()
    return (
      <>
          <Navbar sticky={isSticky} />
          <Landing element={element} />
      </>
  )
}

export default App