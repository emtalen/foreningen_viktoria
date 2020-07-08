import React from 'react'
import StartPage from './components/StartPage'
import Purposes from './components/Purposes'
import Galleri from './components/Galleri'
import TheBoard from './components/TheBoard'
import Donations from './components/Donations'
import ApplyForm from './components/ApplyForm'

const App = () => {
  return (
    <div>
      <StartPage/>
      <Purposes/>
      <Galleri/>
      <TheBoard/>
      <Donations/>
      <ApplyForm/>
    </div>
  )
}

export default App

