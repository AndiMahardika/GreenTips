import { Navigate, Outlet } from 'react-router-dom';

export default function Protected() {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  if(token && user) {
    return <Outlet />
  }

  return <Navigate to="/login" />
}