import Resume from "../assets/AshwinKumarPanda_8.8Years.pdf";

export default function Portfolio() {
  return (
    <div>
      <p>You can download my resume here:</p>
      <a href={Resume} download>
        📄 Download Resume
      </a>
    </div>
  );
}
