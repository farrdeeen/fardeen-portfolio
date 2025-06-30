import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaAws,
  FaRobot,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiFastapi,
  SiTensorflow,
  SiPytorch,
  SiDocker,
  SiGithubactions,
} from "react-icons/si";
import { FaLinux, FaLock } from "react-icons/fa";
import { SiJupyter, SiScikitlearn } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Me</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-10">
          Hello! I'm Fardeen Khan, a fullstack developer passionate about
          building modern, responsive web apps. I enjoy working with React,
          Tailwind, and TypeScript, and I’m expanding into backend development
          with Python and FastAPI.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          My Tech Stack
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center text-blue-600 text-4xl">
          <div className="flex flex-col items-center">
            <FaReact />
            <span className="text-sm mt-2 text-gray-700">React</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss />
            <span className="text-sm mt-2 text-gray-700">Tailwind</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript />
            <span className="text-sm mt-2 text-gray-700">TypeScript</span>
          </div>
          <div className="flex flex-col items-center">
            <FaPython />
            <span className="text-sm mt-2 text-gray-700">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <SiFastapi />
            <span className="text-sm mt-2 text-gray-700">FastAPI</span>
          </div>
          <div className="flex flex-col items-center">
            <FaHtml5 />
            <span className="text-sm mt-2 text-gray-700">HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt />
            <span className="text-sm mt-2 text-gray-700">CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <FaGitAlt />
            <span className="text-sm mt-2 text-gray-700">Git</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTensorflow />
            <span className="text-sm mt-2 text-gray-700">TensorFlow</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPytorch />
            <span className="text-sm mt-2 text-gray-700">PyTorch</span>
          </div>
          <div className="flex flex-col items-center">
            <FaRobot />
            <span className="text-sm mt-2 text-gray-700">Machine Learning</span>
          </div>
          <div className="flex flex-col items-center">
            <FaAws />
            <span className="text-sm mt-2 text-gray-700">AWS</span>
          </div>
          <div className="flex flex-col items-center">
            <SiDocker />
            <span className="text-sm mt-2 text-gray-700">Docker</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGithubactions />
            <span className="text-sm mt-2 text-gray-700">CI/CD</span>
          </div>
          <div className="flex flex-col items-center">
            <SiJupyter />
            <span className="text-sm mt-2 text-gray-700">Jupyter</span>
          </div>
          <div className="flex flex-col items-center">
            <SiScikitlearn />
            <span className="text-sm mt-2 text-gray-700">Scikit-learn</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLinux />
            <span className="text-sm mt-2 text-gray-700">Linux</span>
          </div>
          <div className="flex flex-col items-center">
            <FaLock />
            <span className="text-sm mt-2 text-gray-700">Security</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
