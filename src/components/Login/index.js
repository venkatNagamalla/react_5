// Write your code here

import './index.css'

const Login = props => {
  const {loginStatus} = props
  return (
    <button type="button" className="login-btn" onClick={loginStatus}>
      Login
    </button>
  )
}

export default Login
