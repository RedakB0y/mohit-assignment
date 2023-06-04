import React, { lazy, Suspense } from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Header = lazy(() => import('./Header'));
const CatData = lazy(() => import('./CatData'));



const App = () => {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/" element={<div><Header /> <CatData /></div>} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App