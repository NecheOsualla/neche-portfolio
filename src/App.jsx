import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import "./App.css";

function App() {
  return (
    <div
      className="page"
      style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}
    >
      <Navbar />

      <main className="container">
        <Hero />

        <section id="about" className="section">
          <h3>About</h3>
          <p>
            I am a Computer Science student at Towson University with interests in
            artificial intelligence, software engineering, systems design, and
            data-oriented problem solving. My experiences in tutoring, research, and
            STEM leadership have strengthened both my technical skills and my ability
            to communicate complex ideas clearly. I am especially interested in
            building practical technologies that can create meaningful real-world
            impact.
          </p>
        </section>

        <section id="projects" className="section">
          <h3>Projects</h3>

          <div className="card-grid">
  <ProjectCard
    title="AI Asthma Detection Research"
    description="Exploring AI approaches for asthma detection from respiratory sound data through undergraduate research."
    github="https://github.com/yourusername/asthma-research"
  />

  <ProjectCard
    title="Math Practice Generator"
    description="A simple web app idea for generating practice problems and helping students review core math topics."
    github="https://github.com/yourusername/math-practice-generator"
    demo="https://your-demo-link.com"
  />

  <ProjectCard
    title="Portfolio Website"
    description="A personal website to showcase projects, research, tutoring, and technical skills."
    github="https://github.com/yourusername/neche-portfolio"
  />
</div>
        </section>

        <section id="experience" className="section">
          <h3>Experience</h3>

          <div className="stack">
            <div className="card">
              <h4>Math Peer Tutor</h4>
              <p>
                I support students in mathematics by breaking down complex concepts,
                guiding problem-solving, and helping learners build confidence in their
                quantitative skills.
              </p>
            </div>

            <div className="card">
              <h4>FUSE Undergraduate Researcher</h4>
              <p>
                I conducted undergraduate research on AI applications in asthma detection,
                exploring how computational methods and machine learning can support
                healthcare-focused problem solving.
              </p>
            </div>

            <div className="card">
              <h4>Hill-Lopes Scholar</h4>
              <p>
                I participate in a STEM-centered scholar community focused on leadership,
                mentorship, academic excellence, and professional growth for women in
                science, technology, engineering, and mathematics.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h3>Contact</h3>
          <div className="card">
            <p>Email: your-email-here</p>
            <p>GitHub: https://github.com/yourusername</p>
            <p>LinkedIn: add-your-linkedin-link</p>
            <p>Resume: coming soon</p>
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;