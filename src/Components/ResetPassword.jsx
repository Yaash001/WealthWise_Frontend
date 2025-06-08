import { useState } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { toast } from "sonner"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const token = searchParams.get("token") // get token from URL

  const handleReset = async (e) => {
    e.preventDefault()
    if (!token) {
      toast.error("Invalid or missing token.")
      return
    }

    setLoading(true)
    try {
      const res = await fetch("http://localhost:8080/auth/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      })

      if (res.ok) {
        toast.success("Password reset successful!")
        navigate("/login")
      } else {
        const data = await res.json()
        toast.error(data.message || "Reset failed. Token may be expired.")
      }
    } catch {
      toast.error("Network error. Please try again.")
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm space-y-6">
        <h1 className="text-2xl font-bold text-center">Reset Password</h1>
        <form onSubmit={handleReset} className="space-y-4">
          <Input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <Button type="submit" disabled={loading} className="w-full bg-blue-400 hover:bg-blue-700">
            {loading ? "Resetting..." : "Reset Password"}
          </Button>
        </form>
      </div>
    </div>
  )
}