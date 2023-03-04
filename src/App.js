import React from 'react'
import Homepage from './pages/Homepage'
// import Events from './pages/Events'
// import Faq from './pages/Faq'
// import Gallery from './pages/Gallery'
// import Team from './pages/Team'
import './static/css/App.css'


export default function App() {
  return (
    <div className='app'>
      <div className='app_body'>
        <div className='body_components'>
          <Homepage />
          {/* <Events />
          <Faq />
          <Gallery />
          <Team /> */}
        </div>
      </div>
    </div>
  )
}
