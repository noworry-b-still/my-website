import React from "react";
import { Certificate } from "../../types";
import "./certificate.css";

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="certificate_card">
      <div className="certificate_details">
        <div>
          <h2>{certificate.name}</h2>
          <p>Certified by: {certificate.certifiedBy}</p>
        </div>

        <div>
          <p>{"#Tags"}</p>
          <div className="tag-container">
            {certificate.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>
        </div>

        <a
          href={certificate.certificateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="certificate_cta"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
};

export default CertificateCard;
