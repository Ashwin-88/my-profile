import { useState } from "react";

import {
  FaBriefcase,
  FaTasks,
  FaTools,
  FaGraduationCap,
  FaCertificate,
  FaFileAlt,
  FaUser,
  FaEnvelope,
  FaRobot,
} from "react-icons/fa";

import Tile from "./components/Tile";
import Modal from "./components/Modal";

// Sections
import WorkExperience from "./sections/WorkExperience";
import ProjectDetails from "./sections/ProjectDetails";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import Portfolio from "./sections/Portfolio";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import AIAssistant from "./sections/AIAssistant";

import "./App.css";

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (id) => setActiveModal(id);
  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <header>
        <h1 className="title">Ashwin Kumar Panda</h1>
      </header>

      <div className="container">
        <Tile icon={<FaBriefcase />} title="Work Experience" text="Companies I have worked with." onClick={() => openModal("workExperience")} />
        <Tile icon={<FaTasks />} title="Project Details" text="Information about my projects." onClick={() => openModal("projectDetails")} />
        <Tile icon={<FaTools />} title="Skills" text="My professional skillset." onClick={() => openModal("skills")} />
        <Tile icon={<FaGraduationCap />} title="Education" text="My educational background." onClick={() => openModal("education")} />
        <Tile icon={<FaCertificate />} title="Certifications" text="My certifications and training." onClick={() => openModal("certifications")} />
        <Tile icon={<FaFileAlt />} title="Portfolio" text="Click to download Resume." onClick={() => openModal("portfolio")} />
        <Tile icon={<FaUser />} title="About Me" text="Brief introduction about myself." onClick={() => openModal("aboutMe")} />
        <Tile icon={<FaEnvelope />} title="Contact Details" text="Ways to get in touch with me." onClick={() => openModal("contact")} />
        <Tile icon={<FaRobot />} title="AI Assistant" text="Interactive AI-powered help and guidance." onClick={() => openModal("aiAssistant")} 
/>
      </div>

      {/* Modals */}
      <Modal isOpen={activeModal === "workExperience"} onClose={closeModal} title="Work Experience"><WorkExperience /></Modal>
      <Modal isOpen={activeModal === "projectDetails"} onClose={closeModal} title="Project Details"><ProjectDetails /></Modal>
      <Modal isOpen={activeModal === "skills"} onClose={closeModal} title="Skills Details"><Skills /></Modal>
      <Modal isOpen={activeModal === "education"} onClose={closeModal} title="Education Details"><Education /></Modal>
      <Modal isOpen={activeModal === "certifications"} onClose={closeModal} title="Certifications Details"><Certifications /></Modal>
      <Modal isOpen={activeModal === "portfolio"} onClose={closeModal} title="Portfolio Details"><Portfolio /></Modal>
      <Modal isOpen={activeModal === "aboutMe"} onClose={closeModal} title="About Me"><AboutMe /></Modal>
      <Modal isOpen={activeModal === "contact"} onClose={closeModal} title="Contact Details"><Contact /></Modal>
      <Modal isOpen={activeModal === "aiAssistant"} onClose={closeModal} title="AI Assistant"><AIAssistant /></Modal>
    </div>
  );
}
