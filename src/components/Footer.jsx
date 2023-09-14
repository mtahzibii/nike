import { footerLogo } from "../assets/images";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <section id="footer" className="max-container">
      <div className="flex justify-start items-start flex-wrap gap-14 ">
        <div className="flex flex-col ">
          <img src={footerLogo} alt="Footer logo" width={140} height={140} />
          <p className="mt-6 text-base text-white-400 font-montserrat sm:max-w-sm leading-7">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-6 mt-8">
            {socialMedia.map((item, index) => (
              <img
                src={item.src}
                alt={item.alt}
                className="bg-white rounded-full p-3"
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:justify-evenly items-start gap-8  lg:ml-36 flex-wrap">
          {footerLinks.map((footerLink, idnex) => (
            <div>
              <h3 className="mb-4 text-2xl">{footerLink.title}</h3>
              <ul>
                {footerLink.links.map((item) => (
                  <li className="text-white-400 font-palanquin mb-2 text-lg leading-8">
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex max-sm:flex-col justify-between items-center mt-20 mb-0 text-white-400 text-md  font-montserrat">
        <div className="flex justify-center items-center gap-2 ">
          <img src={copyrightSign} alt="Copyright" />
          <p className="cursor-pointer">Copyright. All rights reserved.</p>
        </div>
        <p className="cursor-pointer">Terms & Conditions</p>
      </div>
    </section>
  );
};

export default Footer;
