import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
{/*CAN YOU SEE MY CHNAGES */}
export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch("http://localhost:8080/auth/forgot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      toast.success("Reset link sent! Redirecting...check your email")
    } catch {
      toast.error("Network error. Please try again.")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-center">Forgot Password</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading} className="w-full bg-blue-500 hover:bg-blue-700">
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      </div>
    </div>
  )
}