import "./text.css";
function Text() {
  return (
    <div className="text-section">
      <ul>
        <li>
          I build innovative and useful products on the web with great user
          experience.
        </li>
        <li>
          I'm curious about how things work and often try to learn by breaking
          them apart.
        </li>
      </ul>
      <p>
        <span className="namaste">Namaste!!</span> As a Redis Certified
        Developer, I bring a passion for building scalable, performant systems
        to every project. From mastering Redis and Elixir to architecting
        elegant solutions, my expertise spans the spectrum of full-stack
        development.
      </p>
      <p>
        Are you ready to elevate your team with a proven innovator who thrives
        on pushing boundaries and delivering excellence? Let's connect and
        explore the possibilities together.
      </p>
      {/* <p style={{ textDecoration: "underline", display: "inline" }}>
        Current Interests
      </p> */}
      <div className="interests">
        <p className="go-interest">Go</p>
        <p className="elixir-interest">Elixir</p>
        <p className="phoenix-interest">Phoenix</p>
        <p className="algorithms-interest">Algorithms</p>
      </div>
    </div>
  );
}

export default Text;
