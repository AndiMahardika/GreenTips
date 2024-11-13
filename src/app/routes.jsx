import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "../features/landing-page/components/index.jsx"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}