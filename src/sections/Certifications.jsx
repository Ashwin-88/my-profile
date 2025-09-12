import PatOnTheBack from "/docs/PatOnTheBack.png";
import SQLBasic from "/docs/SQL_Basic.png";
import SQLIntermediate from "/docs/SQL_Intermediate.png";

export default function Certifications() {
  const certifications = [
    {
      img: PatOnTheBack,
      alt: "Pat On the Back",
      title: "Pat On the Back",
      issuedBy: "Tech Mahindra Ltd.",
      date: "January 2024",
      description:
        "This Award received based on the performance and feedback given by the Client for Brokorage Accounting.",
      link: null,
    },
    {
      img: SQLBasic,
      alt: "SQL Server Basic",
      title: "SQL Server Basic",
      issuedBy: "Hacker Rank",
      date: "October 2023",
      description: "Link to Verify",
      link: "https://www.hackerrank.com/certificates/b26e4d37e7fc",
    },
    {
      img: SQLIntermediate,
      alt: "SQL Server Intermediate",
      title: "SQL Server Intermediate",
      issuedBy: "Hacker Rank",
      date: "October 2023",
      description: "Link to Verify",
      link: "https://www.hackerrank.com/certificates/8376b0a1d43b",
    },
  ];

  return (
    <div>
      {certifications.map((cert, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <img
            src={cert.img}
            alt={cert.alt}
            className="certificate-image"
            style={{
              maxWidth: "200px",
              display: "block",
              marginBottom: "10px",
            }}
          />
          <p>
            <strong>
              {cert.link ? "Certification Name:" : "Award Name:"}
            </strong>{" "}
            {cert.title}
          </p>
          <p>
            <strong>Issued By:</strong> {cert.issuedBy}
          </p>
          <p>
            <strong>Date:</strong> {cert.date}
          </p>
          <p>
            <strong>Description:</strong>{" "}
            {cert.link ? (
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                {cert.description}
              </a>
            ) : (
              cert.description
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
