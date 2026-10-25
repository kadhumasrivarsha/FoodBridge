
import { useState } from 'react'
import './App.css'

function App() {
  const [modal, setModal] = useState(null)

  const closeModal = () => {
    setModal(null)
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  const handleSubmit = (event, message) => {
    event.preventDefault()
    alert(message)
    closeModal()
  }

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <button
          className="logo"
          onClick={() => scrollToSection('home')}
        >
          🍱 FoodBridge
        </button>

        <nav className="nav-links">
          <button onClick={() => scrollToSection('home')}>
            Home
          </button>

          <button onClick={() => scrollToSection('how-it-works')}>
            How It Works
          </button>

          <button onClick={() => scrollToSection('available-food')}>
            Find Food
          </button>

          <button onClick={() => scrollToSection('about')}>
            About
          </button>
        </nav>

        <div className="nav-actions">
          <button
            className="login-btn"
            onClick={() => setModal('login')}
          >
            Login
          </button>

          <button
            className="signup-btn"
            onClick={() => setModal('signup')}
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">
            🌱 FIGHTING FOOD WASTE TOGETHER
          </p>

          <h1>
            Good Food Should Reach
            <span> Good People.</span>
          </h1>

          <p className="hero-text">
            FoodBridge connects surplus food with people and
            communities who need it. Together, we can reduce
            food waste and help more people access good food.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => setModal('donate')}
            >
              🍲 Donate Food
            </button>

            <button
              className="outline-btn"
              onClick={() => scrollToSection('available-food')}
            >
              🔎 Find Food
            </button>
          </div>

          <div className="hero-points">
            <span>✓ Reduce food waste</span>
            <span>✓ Help local communities</span>
            <span>✓ Rescue surplus meals</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <p className="section-label">
          ABOUT FOODBRIDGE
        </p>

        <h2>What is FoodBridge?</h2>

        <p className="section-description">
          FoodBridge is a platform designed to connect people
          who have extra food with people and organizations
          that can use it.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🍱</div>
            <h3>Donate Food</h3>
            <p>
              Restaurants, homes and events can share
              safe surplus food instead of wasting it.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🤝</div>
            <h3>Connect People</h3>
            <p>
              FoodBridge helps donors connect with
              people and organizations nearby.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🌍</div>
            <h3>Reduce Waste</h3>
            <p>
              Rescue good food and keep it away from
              landfills whenever possible.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Create Impact</h3>
            <p>
              Every rescued meal can contribute to a
              stronger and more caring community.
            </p>
          </div>
        </div>
      </section>

      {/* FOODBRIDGE VIDEO */}
      <section className="video-section" id="video">
        <div className="section-heading">
          <p className="section-label">HOW IT WORKS</p>

          <h2>See How FoodBridge Works</h2>

          <p>
            Learn how FoodBridge connects food donors
            with people who need food.
          </p>
        </div>

        <div className="video-container">
          
<video
  controls
  preload="auto"
  playsInline
  muted={false}
  style={{
    width: '100%',
    maxWidth: '900px',
    display: 'block',
    margin: '0 auto',
    borderRadius: '12px'
  }}
>
  <source
    src="/foodbridge-demo.mp4"
    type="video/mp4"
  />
  Your browser does not support video playback.
</video>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">
        <div className="section-heading">
          <p className="section-label">
            SIMPLE PROCESS
          </p>

          <h2>How FoodBridge Works</h2>

          <p>
            Food sharing can be simple. FoodBridge brings
            donors and recipients together in a few steps.
          </p>
        </div>

        <div className="steps">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Share</h3>
            <p>
              A donor adds information about available
              surplus food.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Discover</h3>
            <p>
              People can view available food in their
              area.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Request</h3>
            <p>
              A person or organization can request
              available food.
            </p>
          </div>

          <div className="step-card">
            <div className="step-number">4</div>
            <h3>Connect</h3>
            <p>
              Donors and recipients arrange collection
              or delivery.
            </p>
          </div>
        </div>
      </section>

      {/* AVAILABLE FOOD */}
      <section className="food-section" id="available-food">
        <div className="section-heading">
          <p className="section-label">
            AVAILABLE FOOD
          </p>

          <h2>Find Food Near You</h2>

          <p>
            Browse examples of food that can be shared
            through the FoodBridge community.
          </p>
        </div>

        <div className="food-grid">
          {/* FOOD ITEM 1 */}
          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
              alt="Healthy food"
            />

            <div className="food-card-content">
              <span className="food-tag">Available</span>

              <h3>Fresh Meal Boxes</h3>

              <p>
                Fresh prepared meals available for
                local collection.
              </p>

              <div className="food-info">
                <span>🍱 12 meals</span>
                <span>📍 Nearby</span>
              </div>

              <button
                className="primary-btn full-btn"
                onClick={() => setModal('request')}
              >
                Request Food
              </button>
            </div>
          </div>

          {/* FOOD ITEM 2 */}
          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
              alt="Food donation"
            />

            <div className="food-card-content">
              <span className="food-tag">Available</span>

              <h3>Prepared Food</h3>

              <p>
                Good quality surplus food ready to
                be shared with the community.
              </p>

              <div className="food-info">
                <span>🍽️ 8 meals</span>
                <span>📍 Nearby</span>
              </div>

              <button
                className="primary-btn full-btn"
                onClick={() => setModal('request')}
              >
                Request Food
              </button>
            </div>
          </div>

          {/* FOOD ITEM 3 */}
          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=800&q=80"
              alt="Fresh donated food"
            />

            <div className="food-card-content">
              <span className="food-tag">Available</span>

              <h3>Community Food Pack</h3>

              <p>
                A collection of fresh food donated
                by a local community member.
              </p>

              <div className="food-info">
                <span>🥗 15 meals</span>
                <span>📍 Nearby</span>
              </div>

              <button
                className="primary-btn full-btn"
                onClick={() => setModal('request')}
              >
                Request Food
              </button>
            </div>
          </div>

          {/* FOOD ITEM 4 */}
          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80"
              alt="Fresh vegetables"
            />

            <div className="food-card-content">
              <span className="food-tag">Available</span>

              <h3>Fresh Vegetables</h3>

              <p>
                Fresh vegetables available to share
                with the community.
              </p>

              <div className="food-info">
                <span>🥕 5 kg</span>
                <span>📍 Nearby</span>
              </div>

              <button
                className="primary-btn full-btn"
                onClick={() => setModal('request')}
              >
                Request Food
              </button>
            </div>
          </div>

          {/* FOOD ITEM 5 */}
          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
              alt="Fresh bread"
            />

            <div className="food-card-content">
              <span className="food-tag">Available</span>

              <h3>Fresh Bakery Bread</h3>

              <p>
                Freshly baked bread available for
                local sharing.
              </p>

              <div className="food-info">
                <span>🍞 10 loaves</span>
                <span>📍 Nearby</span>
              </div>

              <button
                className="primary-btn full-btn"
                onClick={() => setModal('request')}
              >
                Request Food
              </button>
            </div>
          </div>

          {/* FOOD ITEM 6 */}
          <div className="food-card">
            <img
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=800&q=80"
              alt="Fresh fruit basket"
            />

            <div className="food-card-content">
              <span className="food-tag">Available</span>

              <h3>Mixed Fruit Basket</h3>

              <p>
                Fresh fruits such as apples, bananas
                and oranges.
              </p>

              <div className="food-info">
                <span>🍎 4 kg</span>
                <span>📍 Nearby</span>
              </div>

              <button
                className="primary-btn full-btn"
                onClick={() => setModal('request')}
              >
                Request Food
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / IMPACT */}
      <section className="impact-section" id="about">
        <div className="impact-content">
          <div>
            <p className="section-label">
              OUR PURPOSE
            </p>

            <h2>
              Small Actions Can Create a Big Impact
            </h2>

            <p>
              FoodBridge is built around a simple idea:
              food that would otherwise be wasted can
              potentially help someone else.
            </p>

            <p>
              The platform brings donors, community
              organizations and people together so that
              surplus food can be shared more efficiently.
            </p>
          </div>

          <div className="impact-stats">
            <div className="stat-card">
              <strong>01</strong>
              <span>Donate surplus food</span>
            </div>

            <div className="stat-card">
              <strong>02</strong>
              <span>Connect with people</span>
            </div>

            <div className="stat-card">
              <strong>03</strong>
              <span>Reduce food waste</span>
            </div>

            <div className="stat-card">
              <strong>04</strong>
              <span>Build stronger communities</span>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section">
        <div>
          <p className="section-label">
            JOIN FOODBRIDGE
          </p>

          <h2>Have Extra Food?</h2>

          <p>
            Instead of throwing good food away, consider
            sharing it with someone who can use it.
          </p>

          <button
            className="cta-button"
            onClick={() => setModal('donate')}
          >
            🍲 Donate Food
          </button>
        </div>
      </section>

      {/* LOGIN MODAL */}
      {modal === 'login' && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal-box"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="modal-icon">🔐</div>

            <h2>Welcome Back</h2>

            <p>Login to your FoodBridge account.</p>

            <form
              onSubmit={(event) =>
                handleSubmit(
                  event,
                  'Login submitted successfully!'
                )
              }
            >
              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                required
              />

              <button
                type="submit"
                className="primary-btn form-submit"
              >
                Login
              </button>
            </form>

            <p className="modal-bottom">
              Don't have an account?

              <button
                type="button"
                className="form-link"
                onClick={() => setModal('signup')}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      )}

      {/* SIGN UP MODAL */}
      {modal === 'signup' && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal-box"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="modal-icon">❤️</div>

            <h2>Create Account</h2>

            <p>Join the FoodBridge community.</p>

            <form
              onSubmit={(event) =>
                handleSubmit(
                  event,
                  'Account created successfully!'
                )
              }
            >
              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                required
              />

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />

              <label>Password</label>

              <input
                type="password"
                placeholder="Create a password"
                required
              />

              <button
                type="submit"
                className="primary-btn form-submit"
              >
                Create Account
              </button>
            </form>

            <p className="modal-bottom">
              Already have an account?

              <button
                type="button"
                className="form-link"
                onClick={() => setModal('login')}
              >
                Login
              </button>
            </p>
          </div>
        </div>
      )}

      {/* DONATE MODAL */}
      {modal === 'donate' && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal-box"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="modal-icon">🍲</div>

            <h2>Donate Food</h2>

            <p>
              Tell us about the food you would like
              to donate.
            </p>

            <form
              onSubmit={(event) =>
                handleSubmit(
                  event,
                  'Thank you! Your food donation has been submitted.'
                )
              }
            >
              <label>Food Description</label>

              <input
                type="text"
                placeholder="Example: 10 fresh meals"
                required
              />

              <label>Number of Meals</label>

              <input
                type="number"
                placeholder="Example: 10"
                min="1"
                required
              />

              <label>Pickup Location</label>

              <input
                type="text"
                placeholder="Enter pickup location"
                required
              />

              <label>Contact Number</label>

              <input
                type="tel"
                placeholder="Enter contact number"
                required
              />

              <button
                type="submit"
                className="primary-btn form-submit"
              >
                Submit Donation
              </button>
            </form>
          </div>
        </div>
      )}

      {/* REQUEST FOOD MODAL */}
      {modal === 'request' && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >
          <div
            className="modal-box"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-btn"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="modal-icon">🥗</div>

            <h2>Request Food</h2>

            <p>
              Fill in your details to request available
              food.
            </p>

            <form
              onSubmit={(event) =>
                handleSubmit(
                  event,
                  'Your food request has been submitted!'
                )
              }
            >
              <label>Your Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                required
              />

              <label>Number of Meals</label>

              <input
                type="number"
                placeholder="Example: 5"
                min="1"
                required
              />

              <label>Delivery Location</label>

              <input
                type="text"
                placeholder="Enter delivery location"
                required
              />

              <label>Contact Number</label>

              <input
                type="tel"
                placeholder="Enter contact number"
                required
              />

              <button
                type="submit"
                className="primary-btn form-submit"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
