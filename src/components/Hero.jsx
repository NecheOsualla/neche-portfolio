function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="eyebrow">Computer Science Student</p>

        <h2>Building with curiosity, purpose, and systems thinking.</h2>

        <p className="intro">
          I’m a Computer Science student at Towson University interested in AI,
          software engineering, and systems design. I enjoy building practical
          tools, supporting students through tutoring, and exploring how
          technology can solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-card">
        <p className="card-title">Current Focus</p>
        <ul>
          <li>AI research in asthma detection</li>
          <li>Growing software engineering skills through projects</li>
          <li>Building a stronger portfolio for internships and research roles</li>
        </ul>
      </div>
    </section>
  );
}

export default Hero;