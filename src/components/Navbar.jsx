function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 40px",
      borderBottom: "1px solid #e5e7eb"
    }}>
      
      <h1 style={{ fontWeight: "bold" }}>Neche</h1>

      <div style={{ display: "flex", gap: "30px" }}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;