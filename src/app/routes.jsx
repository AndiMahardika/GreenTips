import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./index.jsx"

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}