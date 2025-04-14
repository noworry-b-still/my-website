import React, { useState } from "react";
import certificates from "../data/certificates";
import CertificateCard from "../ui/comp/certificate/certificate";
import "./certificates.css";

function Certificates() {
  const [filter, setFilter] = useState("");

  // Filter certificates based on selected tag
  const filteredCertificates = filter
    ? certificates.filter(cert => cert.tags.includes(filter))
    : certificates;

  // Get unique tags across all certificates and limit to most important ones
  const allTagsSet = new Set(certificates.flatMap(cert => cert.tags));

  // Priority tags to show (customize these based on your preference)
  const priorityTags = ["Databases", "Backend", "Certification", "Programming Languages", "ML/AI"];

  // Filter to only include priority tags that actually exist in your certificates
  const allTags = priorityTags.filter(tag => allTagsSet.has(tag));

  return (
    <div className="certificates-container">
      <div className="certificates-header">
        <h1>Certificates</h1>
        <div className="certificates-filter">
          <div
            className={`filter-tag ${filter === "" ? "active" : ""}`}
            onClick={() => setFilter("")}
          >
            All
          </div>
          {allTags.map((tag, index) => (
            <div
              key={index}
              className={`filter-tag ${filter === tag ? "active" : ""}`}
              onClick={() => setFilter(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="certificates-grid">
        {filteredCertificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

export default Certificates;