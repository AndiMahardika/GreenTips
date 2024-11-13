import { useNavigate } from "react-router-dom";
import useUser from "../../../store/userStore.js";

export default function useLogout() {
  const navigate = useNavigate();
  const { clearUser } = useUser();

  function handleLogout() {
    clearUser();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  }

  return { handleLogout }
}