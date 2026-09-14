import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import CameraPage from './pages/CameraPage'
// import PhotoReview from './pages/PhotoReview'
import ImageReviewPage from './pages/ImageReviewPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/camera" element={<CameraPage/>} />
        <Route path="/photo-review" element={<ImageReviewPage/>} />
      </Routes>
    </div>
  )
}

export default App