import { useState } from "react";

function Login({ onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim() || !password.trim()) {
      setStatusMessage({
        type: "error",
        title: "Missing Information",
        text: "Please enter both your email address and password to continue.",
      });
      return;
    }

    // Explicitly notify user about backend status as requested
    setStatusMessage({
      type: "notice",
      title: "Backend Authentication Pending",
      text: "The frontend login interface is fully connected. However, the Spring Boot backend currently provides product recommendation endpoints (/api/products); user authentication (/api/auth) is pending backend implementation.",
    });
  }

  return (
    <div className="login-page">
      <div className="login-card-container">
        <button
          type="button"
          className="login-back-link"
          onClick={() => onNavigate("/")}
        >
          ← Back to Product Recommendations
        </button>

        <div className="login-card">
          <div className="login-brand">
            <div className="brand-logo-badge">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
            </div>
            <h2>SmartPick</h2>
            <p className="login-subtitle">
              Sign in to your account for personalized tech recommendations
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field">
              <label htmlFor="login-email">Email Address</label>
              <div className="input-wrapper">
                <input
                  id="login-email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="login-field">
              <div className="field-label-row">
                <label htmlFor="login-password">Password</label>
                <a
                  href="#forgot-password"
                  className="forgot-link"
                  onClick={(e) => {
                    e.preventDefault();
                    setStatusMessage({
                      type: "notice",
                      title: "Password Reset Notice",
                      text: "Password recovery will be activated once user authentication and notification services are configured in the Spring Boot backend.",
                    });
                  }}
                >
                  Forgot password?
                </a>
              </div>
              <div className="input-wrapper">
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                      <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                      <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                      <line x1="2" x2="22" y1="2" y2="22" />
                    </svg>
                  ) : (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="login-options-row">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span>Remember me</span>
              </label>
            </div>

            <button type="submit" className="login-submit-btn">
              Sign In
            </button>

            {statusMessage && (
              <div className={`login-alert ${statusMessage.type}`}>
                {statusMessage.title && <strong>{statusMessage.title}</strong>}
                <p>{statusMessage.text}</p>
              </div>
            )}
          </form>

          <div className="login-footer">
            <p>
              Don't have an account?{" "}
              <a
                href="#register"
                className="register-link"
                onClick={(e) => {
                  e.preventDefault();
                  setStatusMessage({
                    type: "notice",
                    title: "Registration Notice",
                    text: "User registration requires authentication endpoints to be implemented in the Spring Boot backend.",
                  });
                }}
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
