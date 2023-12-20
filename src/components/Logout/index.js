// Write your code here

const Logout = props => {
  const {loginStatus} = props
  return (
    <button type="button" className="login-btn" onClick={loginStatus}>
      Logout
    </button>
  )
}

export default Logout
