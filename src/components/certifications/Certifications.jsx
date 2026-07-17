import { useState } from "react";

import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";

function Certifications() {
 
    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const certificates = [
        {
          title: "Zoho Marketing Launchpad",
          issuer: "Zoho Corporation",
      
          description:
            "Completed professional training focused on digital marketing, customer engagement, brand positioning and modern marketing strategies.",
      
          code: "RTHPHBMV1PDYE",
      
          pdf: "/certificates/zoho-marketing-launchpad.pdf",
      
          available: true,
        },
      
        {
          title: "Zoho MEA Partner Technical Workshop",
          issuer: "Zoho MEA",
      
          description:
            "Participated in the Zoho MEA Partner Technical Workshop, gaining practical exposure to Zoho CRM, SalesIQ, Books, Creator, Desk, Inventory, automation concepts and business solution implementation alongside Zoho partners.",
      
          code: "Physical Credential",
      
          pdf: "/certificates/zoho-MEA-partner.pdf",
      
          available: true,
        },
      ];

  return (
    <section
      id="certifications"
      className="bg-slate-950 px-8 py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="text-center">

          <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
            CERTIFICATIONS
          </p>

          <h2 className="mt-6 text-5xl font-black">
            Workspace Credentials
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-400">
            Professional certifications, technical workshops and continuous
            learning that strengthen my skills in business technology,
            automation and digital solutions.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {certificates.map((certificate) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
              onOpen={setSelectedCertificate}
            />
          ))}

        </div>

      </div>

      <CertificateModal
        certificate={selectedCertificate}
        open={selectedCertificate !== null}
        onClose={() => setSelectedCertificate(null)}
      />

    </section>
  );
}

export default Certifications;