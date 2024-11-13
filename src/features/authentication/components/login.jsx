import { Link } from "react-router-dom";
import Button from "../../../components/Button.jsx";
import Input from "../../../components/Input.jsx";
import { AuthLayout } from "./auth.layout.jsx";
import useLogin from "../hooks/useLogin.jsx";

export default function Login() {
  const { loading, error, errorEmail, errorPassword, handleLogin } = useLogin();

  return (
    <div>
      <AuthLayout>
        <div className="w-[300px] space-y-4">
          <section className="space-y-2">
            <h3 className="font-bold">Login</h3>
            <p className="text-sm">Enter your email and password</p>
          </section>
          <form className="space-y-3" onSubmit={handleLogin} noValidate>
            <Input id="email" label="Email" type="email" placeholder="Email" />
            <p className="text-xs text-red-600">{errorEmail}</p>
            <Input id="password" label="Password" type="password" placeholder="Password" />
            <p className="text-xs text-red-600">{errorPassword}</p>
            <Button size="small" fullWidth type="submit" disabled={loading}>
              {loading ? "Loading..." : "Login"}
            </Button>
          </form>
          {error && <p className="text-xs font-semibold text-red-600 text-center">{error}</p>}
          <p className="text-sm">Don&apos;t have an account? <Link to="/register" className="text-blue-600">Register</Link></p>
        </div>
      </AuthLayout>
    </div>
  )
}