// Certificates.tsx
import certificates from "../data/certificates";
import { Certificate } from "../ui/types";
import CertificateCard from "../ui/comp/certificate/certificate";
import "./certificates.css";

function Certificates() {
  return (
    <div className="certificates-container">
      <div className="certificates-grid">
        {certificates.map((certificate: Certificate, index: number) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}

export default Certificates;
