import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="border padding-x py-8 w-full z-10 absolute">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex space-x-4">
          <img src={headerLogo} alt="logo" />
        </a>
          <ul className="flex-1 flex justify-center items-center gap-16  max-lg:hidden text-gray-600">
            {navLinks.map((link,index) => (
                <li>
                    <a key={index} href={link.href} className="font-montserrat leading-normal text-lg">{link.label}</a>
                </li>
            ))}
          </ul>
          <div>
            <img src={hamburger} alt="menu"  width={25} height={25} className="hidden max-lg:block"/>
          </div>
      </nav>
    </header>
  );
};

export default Nav;
