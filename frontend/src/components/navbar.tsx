import { Link, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 left-0 w-full z-50 shadow">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-6">
          {isHome ? (
            <>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-blue-400"
                  className="hover:text-blue-400 cursor-pointer"
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-blue-400"
                  className="hover:text-blue-400 cursor-pointer"
                >
                  Projects
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  spy={true}
                  activeClass="text-blue-400"
                  className="hover:text-blue-400 cursor-pointer"
                >
                  Contact
                </ScrollLink>
              </li>
            </>
          ) : (
            <li>
              <Link to="/" className="hover:text-blue-400">Back to Home</Link>
            </li>
          )}
          <li>
            <Link to="/admin" className="hover:text-yellow-400">Admin</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
