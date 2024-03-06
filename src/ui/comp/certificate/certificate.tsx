import React from "react";
import { Certificate } from "../../types"; // Assuming you have a type defined for certificate
import "./certificate.css";

interface CertificateCardProps {
  certificate: Certificate;
}

const Certificate: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="certificate-card">
      <img
        className="certificate-image"
        src={certificate.imageUrl}
        alt={certificate.name}
      />
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
  );
};

export default Certificate;
