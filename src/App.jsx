import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <header className="navbar">
        <div className="logo">
          🍱 <span>FoodBridge</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </nav>

        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign Up</button>
        </div>
      </header>


      {/* Hero Section */}
      <main>

        <section className="hero-section" id="home">
          <div className="hero-content">

            <p className="tagline">
              🌱 Fighting Food Waste Together
            </p>

            <h1>
              Turn Surplus Food Into
              <span> Someone's Meal.</span>
            </h1>

            <p className="hero-description">
              FoodBridge connects restaurants, events, and households
              with people and organizations who need food.
              Together, we can reduce food waste and help our community.
            </p>

            <div className="hero-buttons">
              <button className="primary-btn">
                🍱 Donate Food
              </button>

              <button className="secondary-btn">
                🔎 Find Food
              </button>
            </div>

          </div>

          <div className="hero-image">
            <div className="image-card">
              <div className="food-placeholder">
                🍛
              </div>
            </div>
          </div>
        </section>


        {/* How It Works */}
        <section className="how-section" id="how-it-works">

          <div className="section-heading">
            <p>HOW FOODBRIDGE WORKS</p>
            <h2>From Surplus to Someone in Need</h2>
          </div>

          <div className="steps">

            <div className="step-card">
              <div className="step-icon">🍱</div>
              <h3>1. Donate</h3>
              <p>
                Restaurants, events and households post
                their safe surplus food.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon">🤝</div>
              <h3>2. Connect</h3>
              <p>
                FoodBridge connects available food with
                nearby receivers and NGOs.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon">🚴</div>
              <h3>3. Rescue</h3>
              <p>
                Volunteers help collect and deliver the
                food before it goes to waste.
              </p>
            </div>

          </div>

        </section>
{/* Video Section */}
<section className="video-section" id="video">
  <h2>FoodBridge in Action</h2>

  <p>
    Learn how rescuing surplus food can help people and reduce food waste.
  </p>


</section>

        {/* Impact Section */}
        <section className="impact-section" id="about">

          <div className="section-heading">
            <p>OUR IMPACT</p>
            <h2>Together We Can Make a Difference</h2>
          </div>

          <div className="impact-grid">

            <div className="impact-card">
              <h3>1,250+</h3>
              <p>KG Food Rescued</p>
            </div>

            <div className="impact-card">
              <h3>3,420+</h3>
              <p>Meals Saved</p>
            </div>

            <div className="impact-card">
              <h3>430+</h3>
              <p>Deliveries Completed</p>
            </div>

            <div className="impact-card">
              <h3>850+</h3>
              <p>People Helped</p>
            </div>

          </div>

        </section>


        {/* Call To Action */}
        <section className="cta-section">

          <h2>Have Extra Food?</h2>

          <p>
            Don't let good food go to waste.
            Someone nearby may need it.
          </p>

          <button className="primary-btn">
            Start Donating 🍱
          </button>

        </section>

      </main>


      {/* Footer */}
      <footer className="footer">

        <div className="footer-logo">
          🍱 FoodBridge
        </div>

        <p>
          Connecting surplus food with people who need it.
        </p>

        <p className="copyright">
          © 2026 FoodBridge. Together against food waste.
        </p>

      </footer>

    </div>
  )
}

export default App