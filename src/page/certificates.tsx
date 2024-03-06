import "./certificates.css";
import certificates from "../data/certificates";

function Certificates() {
  return (
    <div className="certificates-container">
      <h1>Certificates</h1>
      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <div className="certificate-card" key={index}>
            <img src={certificate.imageUrl} alt={certificate.name} />
            <div className="certificate-details">
              <h2>{certificate.name}</h2>
              <p>Certified by: {certificate.certifiedBy}</p>
              <p>{certificate.description}</p>
              <a
                href={certificate.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
