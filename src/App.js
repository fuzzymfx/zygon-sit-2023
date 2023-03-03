import React from 'react'
import Homepage from './pages/Homepage'
import Events from './pages/Events'
import Faq from './pages/Faq'
import Gallery from './pages/Gallery'
import Team from './pages/Team'
import './static/css/App.css'


export default function App() {
  return (
    <>
      <Homepage />
      <Events />
      <Faq />
      <Gallery />
      <Team />
    </>
  )
}
