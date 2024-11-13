import { Link } from "react-router-dom";
import Button from "../../../components/Button.jsx";
import Input from "../../../components/Input.jsx";
import { AuthLayout } from "./auth.layout.jsx";
import useRegister from "../hooks/useRegister.jsx";

export default function Register() {
  const { loading, error, errorEmail, errorPassword, errorName, isRegistered, handleRegister } = useRegister();

  return (
    <div>
      <AuthLayout>
        <div className="w-[300px] space-y-4">
          <section className="space-y-2">
            <h3 className="font-bold">Register</h3>
            <p className="text-sm">Please create an account to continue</p>
          </section>
          <form className="space-y-3" onSubmit={handleRegister} noValidate>
            <Input id="name" label="Name" type="text" placeholder="Name" />
            <p className="text-xs text-red-600">{errorName}</p>
            <Input id="email" label="Email" type="email" placeholder="Email" />
            <p className="text-xs text-red-600">{errorEmail}</p>
            <Input id="password" label="Password" type="password" placeholder="Password" />
            <p className="text-xs text-red-600">{errorPassword}</p>
            <Button size="small" fullWidth type="submit" disabled={loading}>
              {loading ? "Loading..." : "Register"}
            </Button>
            {error && <p className="text-xs font-semibold text-red-600 text-center">{error}</p>}
            {isRegistered && <p className="text-xs font-semibold text-green-600 text-center">Registered successfully, go to login</p>}
          </form>
          <p className="text-sm">Already have an account? <Link to="/login" className="text-blue-600">Login</Link></p>
        </div>
      </AuthLayout>
    </div>
  )
}