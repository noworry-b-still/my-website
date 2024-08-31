import "./text.css";

function Text() {
  return (
    <div className="text-section main-content">
      <div className="header">
        <h1>Elixir Software Engineer Co-op @ Bose Professional</h1>
      </div>
      <ul className="cool-interests">
        <li>
          Building robust backend systems with a passion for distributed
          architecture.
        </li>
        <li>
          Enthusiast of <span className="highlight">Elixir</span>,{" "}
          <span className="highlight">functional programming</span>, and focused
          on achieving clear, impactful goals.
        </li>
      </ul>
      <div className="interests">
        <div className="interest-item">
          <p className="go-interest">
            {/* <img
              src="https://skillicons.dev/icons?i=go"
              alt="Go logo"
              className="interest-icon"
            /> */}
            Go
          </p>
        </div>
        <div className="interest-item">
          <p className="elixir-interest">
            {/* <img
              src="https://skillicons.dev/icons?i=elixir"
              alt="Elixir logo"
              className="interest-icon"
            /> */}
            Elixir
          </p>
        </div>
        <div className="interest-item">
          <p className="phoenix-interest">Phoenix</p>
        </div>
        <div className="interest-item">
          <p className="algorithms-interest">Algorithms</p>
        </div>
      </div>
    </div>
  );
}

export default Text;
