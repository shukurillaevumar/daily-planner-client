import "../../assets/styles/auth.css";

function Login() {
  return (
    <div className="app-register-page">
      <h2>Login</h2>
      <form>
        <div className="form-field">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button>Login</button>
      </form>
      <p>
        If you do not have an account, <Link to="/auth/register">Register</Link>
        here
      </p>
    </div>
  );
}

export default Login;
