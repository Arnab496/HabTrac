import "./About.css";

function About() {
  return (
    <div className="container">

      <div className="about">

        <h1>About Habit Tracker</h1>

        <p>
          Habit Tracker is a productivity application built using React.
          It helps users build good habits by tracking daily progress,
          streaks, and consistency.
        </p>

        <div className="tech-grid">

          <div className="tech-card">
            <h2>⚛ React</h2>
          </div>

          <div className="tech-card">
            <h2>📦 Local Storage</h2>
          </div>

          <div className="tech-card">
            <h2>🎨 CSS3</h2>
          </div>

          <div className="tech-card">
            <h2>🟨 JavaScript</h2>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;