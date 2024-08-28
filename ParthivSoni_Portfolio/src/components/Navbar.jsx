import logo from "../assets/kevinRushLogo.png";
import {
  FaGithub,
  FaLinkedin,
  FaSquareTwitter,
  FaInstagram,
} from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="text-slate-300 font-bold text-2xl">Parthiv Soni</h1>
        </div>

        <div className="m-8 flex text-slate-300 items-center justify-center gap-4 text-2xl">
          <a href="https://github.com/parthivsoni"><FaGithub /></a>
          <a href=""><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/parthiv-soni/"><FaLinkedin /></a>
          <a href=""><FaSquareTwitter /></a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
