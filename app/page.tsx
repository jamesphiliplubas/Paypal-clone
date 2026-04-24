export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <h1 className="logo">PayPal</h1>

        <input
          type="text"
          placeholder="Email or mobile number"
          className="input"
        />

        <a href="#" className="forgot">
          Forgot email?
        </a>

        <button className="btn-primary">Next</button>

        <div className="divider">
          <span>or</span>
        </div>

        <button className="btn-secondary">Sign Up</button>

        <div className="language">
          🇵🇭 English | Filipino
        </div>
      </div>
    </main>
  );
}