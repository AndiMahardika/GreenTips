import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from "../features/landing-page/components/index.jsx"
import Login from "../features/authentication/components/login.jsx"
import Register from "../features/authentication/components/register.jsx"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}