import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-left">

          <span className="tag">
            Build Better Habits
          </span>

          <h1>
            Small Habits.
            <br />
            Big Results.
          </h1>

          <p>
            Track your daily habits,
            build powerful streaks,
            and stay consistent every day.
          </p>

          <Link to="/dashboard">
            <button className="hero-btn">
              Start Tracking
            </button>
          </Link>

        </div>

        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700"
            alt="Habit Tracker"
          />

        </div>

      </section>

      <section className="stats">

        <div className="stat-card">
          <h2>365+</h2>
          <p>Days Tracked</p>
        </div>

        <div className="stat-card">
          <h2>1200+</h2>
          <p>Habits Completed</p>
        </div>

        <div className="stat-card">
          <h2>98%</h2>
          <p>Success Rate</p>
        </div>

      </section>

    </div>
  );
}

export default Home;