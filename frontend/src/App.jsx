import { useState, useEffect } from "react";
import Login from "./Login.jsx";
import "./App.css";

const categories = [
  {
    name: "Laptops",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
  },
  {
    name: "Mobiles",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600",
  },
  {
    name: "Televisions",
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600",
  },
  {
    name: "Smartwatches",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  },
];

const categoryData = {
  Laptops: {
    dbCategory: "Laptop",
    title: "Find your perfect laptop",
    buttonText: "Find My Laptop →",
    searchingText: "Searching for matching laptops...",
    resultsTitle: "Recommended laptops",
    purposes: [
      { name: "Student", icon: "🎓" },
      { name: "Programmer", icon: "💻" },
      { name: "Developer", icon: "👨‍💻" },
      { name: "Office / Work", icon: "💼" },
      { name: "Gaming", icon: "🎮" },
      { name: "Design & Editing", icon: "🎨" },
    ],
    brands: ["Any brand", "ASUS", "HP", "Lenovo", "Dell", "Acer"],
    budgetMin: 25000,
    budgetMax: 200000,
    budgetStep: 5000,
    defaultBudget: 60000,
    ramOptions: ["8 GB", "16 GB", "32 GB"],
    storageOptions: ["256 GB", "512 GB", "1 TB"],
  },
  Mobiles: {
    dbCategory: "Mobile",
    title: "Find your perfect mobile",
    buttonText: "Find My Mobile →",
    searchingText: "Searching for matching mobiles...",
    resultsTitle: "Recommended mobiles",
    purposes: [
      { name: "Everyday Use", icon: "📱" },
      { name: "Photography", icon: "📸" },
      { name: "Gaming", icon: "🎮" },
      { name: "Business / Work", icon: "💼" },
    ],
    brands: [
      "Any brand",
      "Samsung",
      "Apple",
      "OnePlus",
      "Xiaomi",
      "Redmi",
      "Realme",
      "Vivo",
      "OPPO",
      "Motorola",
      "iQOO",
    ],
    budgetMin: 10000,
    budgetMax: 150000,
    budgetStep: 5000,
    defaultBudget: 35000,
    ramOptions: ["Any RAM", "6 GB", "8 GB", "12 GB", "16 GB"],
    storageOptions: ["Any storage", "128 GB", "256 GB", "512 GB"],
  },
  Televisions: {
    dbCategory: "TV",
    title: "Find your perfect smart TV",
    buttonText: "Find My TV →",
    searchingText: "Searching for matching TVs...",
    resultsTitle: "Recommended smart TVs",
    purposes: [
      { name: "Living Room", icon: "🛋️" },
      { name: "Bedroom", icon: "🛏️" },
      { name: "Home Theater", icon: "🍿" },
      { name: "Gaming & Sports", icon: "🎮" },
    ],
    brands: [
      "Any brand",
      "Samsung",
      "LG",
      "Sony",
      "Xiaomi",
      "TCL",
      "Hisense",
      "Acer",
    ],
    budgetMin: 12000,
    budgetMax: 250000,
    budgetStep: 5000,
    defaultBudget: 50000,
    sizeOptions: [
      "Any size",
      "32 inches",
      "43 inches",
      "50 inches",
      "55 inches",
      "65 inches",
      "75 inches",
    ],
    resolutionOptions: [
      "Any resolution",
      "HD Ready",
      "Full HD",
      "4K Ultra HD",
      "QLED",
      "OLED",
    ],
  },
  Smartwatches: {
    dbCategory: "Smartwatch",
    title: "Find your perfect smartwatch",
    buttonText: "Find My Smartwatch →",
    searchingText: "Searching for matching smartwatches...",
    resultsTitle: "Recommended smartwatches",
    purposes: [
      { name: "Daily Wear", icon: "⌚" },
      { name: "Fitness & Sports", icon: "🏃" },
      { name: "GPS & Outdoors", icon: "🧭" },
      { name: "Premium & Luxury", icon: "💎" },
    ],
    brands: [
      "Any brand",
      "Apple",
      "Samsung",
      "boAt",
      "Noise",
      "Garmin",
      "Amazfit",
      "OnePlus",
      "Redmi",
      "Realme",
    ],
    budgetMin: 1500,
    budgetMax: 80000,
    budgetStep: 1000,
    defaultBudget: 15000,
    gpsOptions: ["Any", "GPS Built-in", "No GPS Needed"],
    batteryOptions: ["Any", "2+ Days", "7+ Days", "14+ Days"],
  },
};

const FALLBACK_IMAGE = "/images/laptop-placeholder.svg";

function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    if (typeof window !== "undefined") {
      return window.location.pathname.startsWith("/login") ? "/login" : "/";
    }
    return "/";
  });

  useEffect(() => {
    function handlePopState() {
      const path = window.location.pathname.startsWith("/login") ? "/login" : "/";
      setCurrentPath(path);
    }
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigateTo(path) {
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const [category, setCategory] = useState("");
  const [purpose, setPurpose] = useState("Student");
  const [budget, setBudget] = useState(60000);
  const [brand, setBrand] = useState("Any brand");

  // Laptop & Mobile filters
  const [ram, setRam] = useState("16 GB");
  const [storage, setStorage] = useState("512 GB");

  // TV filters
  const [tvSize, setTvSize] = useState("Any size");
  const [tvResolution, setTvResolution] = useState("Any resolution");

  // Smartwatch filters
  const [watchGps, setWatchGps] = useState("Any");
  const [watchBattery, setWatchBattery] = useState("Any");

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showResults, setShowResults] = useState(false);

  function handleSelectCategory(catName) {
    setCategory(catName);
    setShowResults(false);
    setError("");
    const cfg = categoryData[catName];
    if (cfg) {
      setPurpose(cfg.purposes[0].name);
      setBudget(cfg.defaultBudget);
      setBrand("Any brand");
      if (catName === "Laptops") {
        setRam("16 GB");
        setStorage("512 GB");
      } else if (catName === "Mobiles") {
        setRam("8 GB");
        setStorage("128 GB");
      } else if (catName === "Televisions") {
        setTvSize("Any size");
        setTvResolution("Any resolution");
      } else if (catName === "Smartwatches") {
        setWatchGps("Any");
        setWatchBattery("Any");
      }
    }
  }

  function renderChoices(options, selected, setSelected) {
    return (
      <div className="choice-group">
        {options.map((option) => {
          const value = typeof option === "string" ? option : option.name;
          const icon = typeof option === "string" ? "" : option.icon;

          return (
            <button
              type="button"
              key={value}
              className={selected === value ? "choice selected" : "choice"}
              onClick={() => setSelected(value)}
            >
              {icon && <span className="choice-icon">{icon}</span>}
              {value}
            </button>
          );
        })}
      </div>
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setError("");
    setShowResults(false);

    const cfg = categoryData[category];
    const dbCategory = cfg ? cfg.dbCategory : category;

    const params = new URLSearchParams({
      category: dbCategory,
      budget: String(budget),
      brand: brand === "Any brand" ? "" : brand,
    });

    if (category === "Laptops") {
      const ramValue = Number(ram.replace(" GB", ""));
      const storageValue =
        storage === "1 TB" ? 1024 : Number(storage.replace(" GB", ""));
      params.set("ram", String(ramValue));
      params.set("storage", String(storageValue));
    } else if (category === "Mobiles") {
      if (ram !== "Any RAM") {
        params.set("ram", String(Number(ram.replace(" GB", ""))));
      }
      if (storage !== "Any storage") {
        params.set("storage", String(Number(storage.replace(" GB", ""))));
      }
    } else if (category === "Televisions") {
      if (tvSize !== "Any size") {
        params.set("displaySize", tvSize.replace(" inches", ""));
      }
      if (tvResolution !== "Any resolution") {
        params.set("resolution", tvResolution);
      }
    } else if (category === "Smartwatches") {
      if (watchGps === "GPS Built-in") {
        params.set("hasGps", "true");
      } else if (watchGps === "No GPS Needed") {
        params.set("hasGps", "false");
      }

      if (watchBattery === "2+ Days") {
        params.set("batteryLifeDays", "2");
      } else if (watchBattery === "7+ Days") {
        params.set("batteryLifeDays", "7");
      } else if (watchBattery === "14+ Days") {
        params.set("batteryLifeDays", "14");
      }
    }

    try {
      const response = await fetch(
        
      `https://smartpick-1.onrender.com/api/products/recommend?${params.toString()}`

      );

      if (!response.ok) {
        throw new Error("Could not get recommendations.");
      }

      const data = await response.json();
      setProducts(data);
      setShowResults(true);
    } catch (err) {
      console.error("Recommendation error:", err);
      setError(
        "Could not load recommendations. Please make sure Spring Boot is running."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleImageError(event) {
    event.currentTarget.onerror = null;
    event.currentTarget.src = FALLBACK_IMAGE;
  }

  const currentConfig = categoryData[category];

  return (
    <div className="app">
      <header className="header">
        <div
          className="header-brand"
          onClick={() => navigateTo("/")}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") navigateTo("/");
          }}
        >
          <h1>SmartPick</h1>
          <p>Smart Product Recommendation System</p>
        </div>
        <nav className="header-nav">
          {currentPath === "/login" ? (
            <button
              type="button"
              className="header-btn"
              onClick={() => navigateTo("/")}
            >
              ← Recommendations
            </button>
          ) : (
            <button
              type="button"
              className="header-btn login-btn"
              onClick={() => navigateTo("/login")}
            >
              Sign In
            </button>
          )}
        </nav>
      </header>

      {currentPath === "/login" ? (
        <Login onNavigate={navigateTo} />
      ) : (
        <main className="main">
        {!category ? (
          <>
            <p className="eyebrow">SMARTER SHOPPING STARTS HERE</p>
            <h2>What are you looking for?</h2>
            <p>Choose a category to find the right product for you.</p>

            <div className="categories">
              {categories.map((item) => (
                <button
                  type="button"
                  className="category-card"
                  key={item.name}
                  onClick={() => handleSelectCategory(item.name)}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    onError={handleImageError}
                  />
                  <h3>{item.name}</h3>
                  <span>Explore products →</span>
                </button>
              ))}
            </div>
          </>
        ) : currentConfig ? (
          <>
            <button
              type="button"
              className="back-button"
              onClick={() => {
                setCategory("");
                setShowResults(false);
                setError("");
              }}
            >
              ← Back to categories
            </button>

            <p className="eyebrow">PERSONALISE YOUR SEARCH</p>
            <h2>{currentConfig.title}</h2>
            <p>Tell us what matters to you.</p>

            {!showResults && (
              <form className="preference-form" onSubmit={handleSubmit}>
                <section className="form-section">
                  <label>01. What will you use it for?</label>
                  {renderChoices(
                    currentConfig.purposes,
                    purpose,
                    setPurpose
                  )}
                </section>

                <section className="form-section">
                  <div className="budget-heading">
                    <label htmlFor="budget">02. Your maximum budget</label>
                    <strong>₹{budget.toLocaleString("en-IN")}</strong>
                  </div>

                  <input
                    id="budget"
                    className="budget-slider"
                    type="range"
                    min={currentConfig.budgetMin}
                    max={currentConfig.budgetMax}
                    step={currentConfig.budgetStep}
                    value={budget}
                    onChange={(event) =>
                      setBudget(Number(event.target.value))
                    }
                  />

                  <div className="budget-limits">
                    <span>
                      ₹{currentConfig.budgetMin.toLocaleString("en-IN")}
                    </span>
                    <span>
                      ₹{currentConfig.budgetMax.toLocaleString("en-IN")}
                    </span>
                  </div>
                </section>

                {category === "Laptops" && (
                  <>
                    <section className="form-section">
                      <label>03. Preferred RAM</label>
                      {renderChoices(
                        currentConfig.ramOptions,
                        ram,
                        setRam
                      )}
                    </section>

                    <section className="form-section">
                      <label>04. Preferred storage</label>
                      {renderChoices(
                        currentConfig.storageOptions,
                        storage,
                        setStorage
                      )}
                    </section>
                  </>
                )}

                {category === "Mobiles" && (
                  <>
                    <section className="form-section">
                      <label>03. Preferred RAM</label>
                      {renderChoices(
                        currentConfig.ramOptions,
                        ram,
                        setRam
                      )}
                    </section>

                    <section className="form-section">
                      <label>04. Preferred storage</label>
                      {renderChoices(
                        currentConfig.storageOptions,
                        storage,
                        setStorage
                      )}
                    </section>
                  </>
                )}

                {category === "Televisions" && (
                  <>
                    <section className="form-section">
                      <label>03. Preferred screen size</label>
                      {renderChoices(
                        currentConfig.sizeOptions,
                        tvSize,
                        setTvSize
                      )}
                    </section>

                    <section className="form-section">
                      <label>04. Preferred resolution / panel</label>
                      {renderChoices(
                        currentConfig.resolutionOptions,
                        tvResolution,
                        setTvResolution
                      )}
                    </section>
                  </>
                )}

                {category === "Smartwatches" && (
                  <>
                    <section className="form-section">
                      <label>03. GPS Tracking</label>
                      {renderChoices(
                        currentConfig.gpsOptions,
                        watchGps,
                        setWatchGps
                      )}
                    </section>

                    <section className="form-section">
                      <label>04. Minimum battery life</label>
                      {renderChoices(
                        currentConfig.batteryOptions,
                        watchBattery,
                        setWatchBattery
                      )}
                    </section>
                  </>
                )}

                <section className="form-section">
                  <label>05. Preferred brand</label>
                  {renderChoices(currentConfig.brands, brand, setBrand)}
                </section>

                <button
                  className="submit-button"
                  type="submit"
                  disabled={loading}
                >
                  {loading
                    ? currentConfig.searchingText
                    : currentConfig.buttonText}
                </button>
              </form>
            )}

            {loading && <p>{currentConfig.searchingText}</p>}
            {error && <p className="error">{error}</p>}

            {showResults && (
              <section className="results">
                <h2>{currentConfig.resultsTitle}</h2>
                <p>{products.length} matching products found</p>

                {products.length === 0 ? (
                  <p>
                    No matching products found. Try increasing your budget or
                    changing your preferences.
                  </p>
                ) : (
                  <div className="products-grid">
                    {products.map((product) => (
                      <article className="product-card" key={product.id}>
                        <img
                          className="product-photo"
                          src={product.imageUrl || FALLBACK_IMAGE}
                          alt={product.name}
                          loading="lazy"
                          onError={handleImageError}
                        />

                        <div className="product-info">
                          <p className="product-brand">{product.brand}</p>
                          <h3>{product.name}</h3>

                          {/* Laptop specifications */}
                          {product.category === "Laptop" && (
                            <>
                              <p>{product.processor}</p>
                              <p>
                                {product.ramGb} GB RAM · {product.storageGb} GB
                                storage
                              </p>
                              <p>{product.gpu}</p>
                              <p>Display: {product.displaySize} inches</p>
                              <p>Battery: {product.batteryWh} Wh</p>
                            </>
                          )}

                          {/* Mobile specifications */}
                          {product.category === "Mobile" && (
                            <>
                              <p>⚡ {product.processor}</p>
                              <p>
                                💾 {product.ramGb} GB RAM · {product.storageGb}{" "}
                                GB storage
                              </p>
                              <p>
                                📱 {product.displaySize}″ {product.resolution || "Display"}
                              </p>
                              {product.batteryWh && (
                                <p>🔋 {product.batteryWh} mAh battery</p>
                              )}
                            </>
                          )}

                          {/* TV specifications */}
                          {product.category === "TV" && (
                            <>
                              <p>📺 Screen: {product.displaySize} inches</p>
                              <p>✨ Resolution: {product.resolution}</p>
                              <p>⚙️ {product.processor}</p>
                              {product.ramGb && (
                                <p>
                                  {product.ramGb} GB RAM · {product.storageGb} GB
                                  storage
                                </p>
                              )}
                            </>
                          )}

                          {/* Smartwatch specifications */}
                          {product.category === "Smartwatch" && (
                            <>
                              <p>⌚ Display: {product.displaySize} inches</p>
                              <p>
                                🔋 Battery: Up to {product.batteryLifeDays} days
                              </p>
                              <p>
                                {product.hasGps
                                  ? "📍 Built-in GPS"
                                  : "📍 Connected GPS"}
                              </p>
                              <p>⚙️ {product.processor}</p>
                            </>
                          )}

                          <p>⭐ {product.rating}</p>

                          <h3 className="product-price">
                            ₹
                            {Number(product.price).toLocaleString("en-IN")}
                          </h3>
                        </div>
                      </article>
                    ))}
                  </div>
                )}

                <button
                  type="button"
                  className="back-button"
                  onClick={() => setShowResults(false)}
                >
                  ← Change preferences
                </button>
              </section>
            )}
          </>
        ) : null}
      </main>
      )}

      <footer className="footer">
        SmartPick | Making smarter product choices
      </footer>
    </div>
  );
}

export default App;