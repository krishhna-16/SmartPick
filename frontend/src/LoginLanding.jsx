import { useState } from "react";
import { API_BASE_URL } from "./apiConfig";

function LoginLanding({
  onExploreDemo,
  onLoginSuccess,
  initialTab = "login",
  onNavigate,
}) {
  const [tabOverride, setTabOverride] = useState(null);
  const activeTab = tabOverride ?? initialTab ?? "login";

  // Login form state
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [loginRememberMe, setLoginRememberMe] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  // Registration form state
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [regLoading, setRegLoading] = useState(false);
  const [regError, setRegError] = useState("");
  const [regSuccess, setRegSuccess] = useState("");

  // Notice modal / message state
  const [noticeMessage, setNoticeMessage] = useState("");

  async function handleLoginSubmit(event) {
    event.preventDefault();
    setLoginError("");
    setNoticeMessage("");

    if (!loginEmail.trim() || !loginPassword) {
      setLoginError("Please enter your email and password.");
      return;
    }

    setLoginLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail.trim(),
          password: loginPassword,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        const errorMsg =
          data?.message ||
          "Invalid email or password. Please verify your credentials or register.";
        setLoginError(errorMsg);
        return;
      }

      if (data && data.success && data.user) {
        onLoginSuccess({
          isDemo: false,
          name: data.user.name,
          email: data.user.email,
        });
      } else {
        setLoginError("Login failed. Please check your credentials.");
      }
    } catch (err) {
      console.error("Login request error:", err);
      setLoginError(
        "Could not connect to the authentication service. If running locally, ensure Spring Boot is running on port 8080."
      );
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleRegisterSubmit(event) {
    event.preventDefault();
    setRegError("");
    setRegSuccess("");
    setNoticeMessage("");

    if (!regName.trim()) {
      setRegError("Please enter your full name.");
      return;
    }
    if (!regEmail.trim() || !regEmail.includes("@")) {
      setRegError("Please enter a valid email address.");
      return;
    }
    if (!regPassword || regPassword.length < 6) {
      setRegError("Password must be at least 6 characters long.");
      return;
    }
    if (regPassword !== regConfirmPassword) {
      setRegError("Passwords do not match.");
      return;
    }

    setRegLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: regName.trim(),
          email: regEmail.trim(),
          password: regPassword,
          confirmPassword: regConfirmPassword,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok) {
        setRegError(data?.message || "Registration failed. Please try again.");
        return;
      }

      setRegSuccess(
        "Account created successfully! You can now sign in with your email."
      );
      setLoginEmail(regEmail.trim());
      setLoginPassword("");
      setTabOverride("login");
      onNavigate?.("/login");
    } catch (err) {
      console.error("Registration error:", err);
      setRegError(
        "Could not connect to the backend server. Please verify Spring Boot is running."
      );
    } finally {
      setRegLoading(false);
    }
  }

  return (
    <div className="login-landing-container">
      {/* Top Header Branding */}
      <header className="landing-header">
        <div className="brand-group">
          <div className="brand-icon-box">
            <svg
              width="24"
              height="24"
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
          <div>
            <h1 className="brand-title">SmartPick</h1>
            <p className="brand-subtitle">
              Smart Product Recommendation System
            </p>
          </div>
        </div>

        <button
          type="button"
          className="quick-demo-link"
          onClick={onExploreDemo}
        >
          🚀 Quick Demo Access
        </button>
      </header>

      {/* Main Hero & Login Card Section */}
      <main className="landing-main">
        {/* Decorative Floating Category Badges */}
        <div className="floating-badge badge-top-left">
          <span className="badge-emoji">💻</span>
          <div>
            <strong>100+ Laptops</strong>
            <small>Gaming & Productivity</small>
          </div>
        </div>

        <div className="floating-badge badge-top-right">
          <span className="badge-emoji">📱</span>
          <div>
            <strong>30+ Mobiles</strong>
            <small>Flagships & Camera Phones</small>
          </div>
        </div>

        <div className="floating-badge badge-bottom-left">
          <span className="badge-emoji">📺</span>
          <div>
            <strong>30+ Smart TVs</strong>
            <small>4K UHD & OLED Displays</small>
          </div>
        </div>

        <div className="floating-badge badge-bottom-right">
          <span className="badge-emoji">⌚</span>
          <div>
            <strong>20+ Smartwatches</strong>
            <small>Fitness, GPS & Luxury</small>
          </div>
        </div>

        {/* Centered Modern Card */}
        <div className="landing-card-wrapper">
          <div className="landing-card">
            {/* Header / Tabs */}
            <div className="card-tabs">
              <button
                type="button"
                className={`card-tab ${activeTab === "login" ? "active" : ""}`}
                onClick={() => {
                  setTabOverride("login");
                  setLoginError("");
                  setRegSuccess("");
                  setNoticeMessage("");
                  onNavigate?.("/login");
                }}
              >
                Sign In
              </button>
              <button
                type="button"
                className={`card-tab ${activeTab === "register" ? "active" : ""}`}
                onClick={() => {
                  setTabOverride("register");
                  setRegError("");
                  setRegSuccess("");
                  setNoticeMessage("");
                  onNavigate?.("/register");
                }}
              >
                Register
              </button>
            </div>

            {/* 1. EXPLORE DEMO BUTTON (MOST IMPORTANT) */}
            <div className="demo-highlight-box">
              <button
                type="button"
                className="explore-demo-btn"
                onClick={onExploreDemo}
              >
                <div className="explore-demo-content">
                  <span className="rocket-icon">🚀</span>
                  <div className="explore-demo-texts">
                    <span className="explore-demo-title">
                      Explore Demo &rarr;
                    </span>
                    <span className="explore-demo-subtitle">
                      Explore SmartPick instantly — no account required.
                    </span>
                  </div>
                </div>
              </button>
              <p className="demo-hint-text">
                No registration required • Instant access to 180+ products & AI recommendations
              </p>
            </div>

            {/* OR DIVIDER */}
            <div className="or-divider">
              <span className="or-line"></span>
              <span className="or-text">
                {activeTab === "login" ? "OR SIGN IN" : "OR REGISTER"}
              </span>
              <span className="or-line"></span>
            </div>

            {/* Success message banner */}
            {regSuccess && (
              <div className="alert-box alert-success">
                <span className="alert-icon">✓</span>
                <span>{regSuccess}</span>
              </div>
            )}

            {/* Notice message banner */}
            {noticeMessage && (
              <div className="alert-box alert-info">
                <span className="alert-icon">ℹ</span>
                <span>{noticeMessage}</span>
              </div>
            )}

            {/* TAB 1: LOGIN FORM */}
            {activeTab === "login" ? (
              <form className="auth-form" onSubmit={handleLoginSubmit}>
                {loginError && (
                  <div className="alert-box alert-error">
                    <span className="alert-icon">⚠</span>
                    <span>{loginError}</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="login-email">Email or Username</label>
                  <div className="input-box">
                    <input
                      id="login-email"
                      type="text"
                      placeholder="Enter your email or username"
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      autoComplete="username"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="label-with-action">
                    <label htmlFor="login-password">Password</label>
                    <button
                      type="button"
                      className="link-btn text-muted"
                      onClick={() =>
                        setNoticeMessage(
                          "Password recovery: Please contact the system administrator or create a new registered account."
                        )
                      }
                    >
                      Forgot password?
                    </button>
                  </div>
                  <div className="input-box">
                    <input
                      id="login-password"
                      type={showLoginPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowLoginPassword(!showLoginPassword)
                      }
                      aria-label="Toggle password visibility"
                    >
                      {showLoginPassword ? (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
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
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="options-row">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={loginRememberMe}
                      onChange={(e) =>
                        setLoginRememberMe(e.target.checked)
                      }
                    />
                    <span>Remember me on this device</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="submit-auth-btn"
                  disabled={loginLoading}
                >
                  {loginLoading ? "Signing In..." : "Sign In"}
                </button>

                <div className="switch-prompt">
                  <span>New to SmartPick?</span>{" "}
                  <button
                    type="button"
                    className="link-btn highlight"
                    onClick={() => {
                      setTabOverride("register");
                      setLoginError("");
                      onNavigate?.("/register");
                    }}
                  >
                    Register Now &rarr;
                  </button>
                </div>
              </form>
            ) : (
              /* TAB 2: REGISTRATION FORM */
              <form className="auth-form" onSubmit={handleRegisterSubmit}>
                {regError && (
                  <div className="alert-box alert-error">
                    <span className="alert-icon">⚠</span>
                    <span>{regError}</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="reg-name">Full Name</label>
                  <div className="input-box">
                    <input
                      id="reg-name"
                      type="text"
                      placeholder="e.g. Alex Johnson"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="reg-email">Email Address</label>
                  <div className="input-box">
                    <input
                      id="reg-email"
                      type="email"
                      placeholder="name@example.com"
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      autoComplete="email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="reg-password">Password</label>
                  <div className="input-box">
                    <input
                      id="reg-password"
                      type={showRegPassword ? "text" : "password"}
                      placeholder="At least 6 characters"
                      value={regPassword}
                      onChange={(e) => setRegPassword(e.target.value)}
                      autoComplete="new-password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowRegPassword(!showRegPassword)
                      }
                      aria-label="Toggle password visibility"
                    >
                      {showRegPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="reg-confirm">Confirm Password</label>
                  <div className="input-box">
                    <input
                      id="reg-confirm"
                      type={showRegPassword ? "text" : "password"}
                      placeholder="Re-enter your password"
                      value={regConfirmPassword}
                      onChange={(e) =>
                        setRegConfirmPassword(e.target.value)
                      }
                      autoComplete="new-password"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="submit-auth-btn"
                  disabled={regLoading}
                >
                  {regLoading ? "Creating Account..." : "Create Account"}
                </button>

                <div className="switch-prompt">
                  <span>Already have an account?</span>{" "}
                  <button
                    type="button"
                    className="link-btn highlight"
                    onClick={() => {
                      setTabOverride("login");
                      setRegError("");
                      onNavigate?.("/login");
                    }}
                  >
                    Sign In instead &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <p>SmartPick • Multi-Attribute Electronics Recommendation System</p>
      </footer>
    </div>
  );
}

export default LoginLanding;
