import { useState } from 'react'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Link } from 'react-router-dom'

export default function SignUp() {
  const [showPass, setShowPass] = useState(false)
  const [showRePass, setShowRePass] = useState(false)
  const [loading, setLoading] = useState(false)

  const [formData, setData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    password: '',
    RePass: '',
    family_name: '',
  })

  const handleChange = (e) => {
    setData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (formData.password !== formData.RePass) {
      toast.error('Both passwords do not match')
      return
    }

    if (!/^\d{10}$/.test(formData.contactNumber)) {
      toast.error('Enter a valid 10-digit contact number')
      return
    }

    const { RePass, ...dataToSend } = formData
    setLoading(true)

    try {
      const res = await fetch('http://localhost:8080/user/Usersignup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      })

      const data = await res.json()

      if (res.ok) {
        toast.success('Sign up successful!')
      } else {
        toast.error(data.message || 'Signup failed')
      }
    } catch (err) {
      toast.error('Something went wrong. Try again.')
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 flex justify-center items-start pt-28">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">User Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          
          <Input
          className="hover:bg-blue-200 text-black"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            required
          />
          <Input
          
          className="hover:bg-blue-200 text-black"
            placeholder="Middle Name"
            name="middleName"
            onChange={handleChange}
            
          />
          <Input
          
          className="hover:bg-blue-200 text-black"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            required
          />
          <Input
          
          className="hover:bg-blue-200 text-black"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            required
          />
          <Input
          
          className="hover:bg-blue-200 text-black"
            placeholder="Contact Number"
            name="contactNumber"
            onChange={handleChange}
            required
          />

          <div className="relative">
            <Input
            
          className="hover:bg-blue-200 text-black"
              type={showPass ? 'text' : 'password'}
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-2 top-2 cursor-pointer"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <div className="relative">
            <Input
            
          className="hover:bg-blue-200 text-black"
              type={showRePass ? 'text' : 'password'}
              placeholder="Confirm Password"
              name="RePass"
              onChange={handleChange}
              required
            />
            <span
              className="absolute right-2 top-2.5 cursor-pointer"
              onClick={() => setShowRePass(!showRePass)}
            >
              {showRePass ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>

          <h2 className="text-2xl font-bold text-center mt-6">Family Info</h2>
          <Input
            placeholder="Family Name"
            name="family_name"
            onChange={handleChange}
            required
          />

          <p className="text-sm text-center">
            Already have an account?<br/>
            <Link to="/login" className="text-blue-500 hover:bg-white visited:text-blue-600">
               Login
            </Link>
          </p>

          <Button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-700 flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading && <Loader2 className="animate-spin h-5 w-5" />}
            {loading ? 'Signing up...' : 'Sign Up'}
          </Button>
        </form>
      </div>
    </div>
  )
}
