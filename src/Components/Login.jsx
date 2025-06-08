import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useNavigate, Link } from "react-router-dom"
import { toast } from "sonner"
import { Loader2, Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

const handleLogin = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const res = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    let d;
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
     d = await res.json();
    } else {
     d = await res.text();
    }
    if (res.ok) {
      if (d.token) {
        localStorage.setItem("token", d.token);
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error("Token missing in response.");
      }
    } else {
      toast.error(typeof data === "string" ? d : d.message || "Invalid credentials");
    }
  } catch (error) {
    toast.error("Network error. Please try again.");
  }

  setLoading(false);
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <Input
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute right-3 top-2.5 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <Button
            type="submit"
            className="w-full bg-white hover:bg-blue-400 flex items-center justify-center gap-2 text-black"
            disabled={loading}
          >
            {loading && <Loader2 className="animate-spin h-10 w-10" />}
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>

        <p className="text-sm text-center">
          <Link to="/forgot" className="text-blue-500 hover:bg-white visited:text-blue-600">
            Forgot Password?
          </Link>
        </p>
        <p className="text-sm text-center">
          <Link to="/signup" className="text-blue-500 hover:bg-white visited:text-blue-600">
            New? Sign up here!
          </Link>
        </p>
      </div>
    </div>
  )
}
