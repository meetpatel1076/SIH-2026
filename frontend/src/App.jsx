import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CameraPage from './pages/CameraPage'

import ImageReviewPage from './pages/ImageReviewPage'
import ResultPage from './pages/ResultPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/camera" element={<CameraPage/>} />
        <Route path="/photo-review" element={<ImageReviewPage/>} />
        <Route path="/result" element={ <ResultPage/>} />
      </Routes>
    </div>
  )
}

export default App