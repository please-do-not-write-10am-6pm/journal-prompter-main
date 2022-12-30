import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AddPrompt from './AddPrompt'
import EditPrompt from './EditPrompt'
import Prompts from './Prompts'

function App () {
  return (
    <>
      <section className="main">
        <header className="header">  {/*//TODO make Header into component */}
          <h1>My Collection</h1>
        </header>
        <Routes>
          <Route path='/' element={<Prompts />}/>
          <Route path='/' element={<AddPrompt />}/>
          <Route path='/edit/:id' element={<EditPrompt />}/>
        </Routes>
        
        
      </section>
    </>
  )
}

export default App
