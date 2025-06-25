import bgImage from '../assets/bgImage.jpg';
import profile from '../assets/profile.jpg';

import {
  FaReact, FaPython, FaHtml5, FaCss3Alt, FaGitAlt, FaAws, FaRobot, FaLinux, FaLock,
} from 'react-icons/fa';
import {
  SiTailwindcss, SiTypescript, SiFastapi, SiTensorflow, SiPytorch,
  SiDocker, SiGithubactions, SiJupyter, SiScikitlearn,
} from 'react-icons/si';
import { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch("https://fardeen-portfolio-production.up.railway.app/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus("Error sending message");
      }
    } catch (err) {
      setStatus("Server error");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center px-4 md:flex-row md:justify-between md:px-20 py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="mb-10 md:mb-0 md:mr-10">
          <img
            src={profile}
            alt="Profile"
            className="rounded-full w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 object-cover shadow-lg border-4 border-white mx-auto md:ml-[250px]"
          />
        </div>

        <div className="text-center md:text-left max-w-xl text-white">
          <h1 className="text-5xl font-bold">Hello</h1>
          <h2 className="text-xl font-semibold mt-4 mb-6">A Bit About Me</h2>
          <p className="mb-10">
            I'm Fardeen Khan — a web developer who loves building clean UIs and learning backend tech like FastAPI and Python. I enjoy turning ideas into real projects.
          </p>

          <div className="flex justify-center md:justify-start space-x-6">
            <a href="#resume" className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-4 rounded-full shadow-md">Resume</a>
            <a href="#projects" className="bg-red-400 hover:bg-red-500 text-black font-semibold px-6 py-4 rounded-full shadow-md">Projects</a>
            <a href="#contact" className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold px-6 py-4 rounded-full shadow-md">Contact</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10">
            Hello! I'm Fardeen Khan, a frontend developer passionate about building modern, responsive web apps.
            I enjoy working with React, Tailwind, and TypeScript, and I’m expanding into backend development with Python and FastAPI.
          </p>

          <h3 className="text-2xl font-semibold text-gray-700 mb-4">My Tech Stack</h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center text-blue-600 text-4xl">
            {[
              { Icon: FaReact, label: "React" },
              { Icon: SiTailwindcss, label: "Tailwind" },
              { Icon: SiTypescript, label: "TypeScript" },
              { Icon: FaPython, label: "Python" },
              { Icon: SiFastapi, label: "FastAPI" },
              { Icon: FaHtml5, label: "HTML" },
              { Icon: FaCss3Alt, label: "CSS" },
              { Icon: FaGitAlt, label: "Git" },
              { Icon: SiTensorflow, label: "TensorFlow" },
              { Icon: SiPytorch, label: "PyTorch" },
              { Icon: FaRobot, label: "Machine Learning" },
              { Icon: FaAws, label: "AWS" },
              { Icon: SiDocker, label: "Docker" },
              { Icon: SiGithubactions, label: "CI/CD" },
              { Icon: SiJupyter, label: "Jupyter" },
              { Icon: SiScikitlearn, label: "Scikit-learn" },
              { Icon: FaLinux, label: "Linux" },
              { Icon: FaLock, label: "Security" }
            ].map(({ Icon, label }, i) => (
              <div key={i} className="flex flex-col items-center">
                <Icon />
                <span className="text-sm mt-2 text-gray-700">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h2>
          <p className="text-gray-600 mb-10">I'd love to hear from you. Fill out the form and I'll get back to you!</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 rounded border border-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full p-3 rounded border border-gray-300"
              required
            />
            <textarea
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full p-3 rounded border border-gray-300"
              required
            />
            <button type="submit" className="bg-blue-500 text-white font-semibold px-6 py-3 rounded hover:bg-blue-600">
              Send
            </button>
            {status && <p className="text-sm text-gray-600 mt-2">{status}</p>}
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
