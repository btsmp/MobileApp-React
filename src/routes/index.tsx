import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Details } from '../pages/Details'
import { Quiz } from '../pages/Quiz'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  )
}
