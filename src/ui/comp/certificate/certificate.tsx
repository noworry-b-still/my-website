import React from "react";
import "./certificate.css";

interface CertificateCardProps {
  certificate: {
    name: string;
    certifiedBy: string;
    tags: string[];
    certificateUrl: string;
    imageUrl?: string;
    description?: string;
    level?: string;
    issueDate?: string;
  };
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  // Function to determine the level class
  const getLevelClass = (level?: string) => {
    if (!level) return "";
    return `level-${level.toLowerCase()}`;
  };

  return (
    <div className="certificate_card">
      {certificate.level && (
        <div className={`certificate-level ${getLevelClass(certificate.level)}`}>
          {certificate.level}
        </div>
      )}

      <div className="certificate_details">


        <div className="certificate_info">
          <h2>{certificate.name}</h2>
          <p className="certified-by">Certified by: {certificate.certifiedBy}</p>
          {certificate.issueDate && (
            <p className="certificate-date">Issued: {certificate.issueDate}</p>
          )}
          {/* {certificate.description && (
            <p className="certificate-description">{certificate.description}</p>
          )} */}
        </div>

        <div className="certificate_tags">
          <p className="tags-title">#Tags</p>
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