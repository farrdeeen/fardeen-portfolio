const Hero = () => {
  return (
    <section className="h-screen bg-gray-100 flex items-center justify-center text-center px-4" id="hero">
      <div>
        <h1 className="text-5xl font-bold text-gray-800">Hi, I'm Fardeen Khan</h1>
        <p className="text-xl mt-4 text-gray-600">A passionate Web Developer and Python Enthusiast</p>
        <a href="#projects" className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
