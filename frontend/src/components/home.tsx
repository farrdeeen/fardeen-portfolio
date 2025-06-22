import bgImage from '../assets/bgImage.jpg';
import profile from '../assets/profile.jpg';

const Home = () => {
  return (
    <section
      className="min-h-screen flex flex-col justify-center items-center px-4 md:flex-row md:justify-between md:px-20 py-20 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Profile Image */}
      <div className="mb-10 md:mb-0 md:mr-10">
        <img
          src={profile}
          alt="Profile"
          className="
            rounded-full 
            w-64 h-64 
            sm:w-72 sm:h-72 
            md:w-96 md:h-96 
            object-cover 
            shadow-lg 
            border-4 border-white 
            mx-auto 
            md:ml-[250px]"
        />
      </div>

      {/* Text + Buttons Block */}
      <div className="text-center md:text-left max-w-xl text-white">
        <h1 className="text-5xl font-bold">Hello</h1>
        <h2 className="text-xl font-semibold mt-4 mb-6">A Bit About Me</h2>
        <p className="mb-10">
          I'm Fardeen Khan — a web developer who loves building clean UIs and learning backend tech like FastAPI and Python. I enjoy turning ideas into real projects.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-6">
          <a
            href="#resume"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-4 rounded-full shadow-md"
          >
            Resume
          </a>
          <a
            href="#projects"
            className="bg-red-400 hover:bg-red-500 text-black font-semibold px-6 py-4 rounded-full shadow-md"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="bg-cyan-300 hover:bg-cyan-400 text-black font-semibold px-6 py-4 rounded-full shadow-md"
          >
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
