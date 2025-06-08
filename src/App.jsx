import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Navig from './Components/Navig'
import Dashboard from './Components/Dashboard'
import ForgotPassword from './Components/ForgotPassword'
import ResetPassword from './Components/ResetPassword'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <Router>
      <Navig />
      <Routes>
                <Route path="/" element={<Login />} />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Route>
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
