import logo from "../../../assets/logo.png";
import FooterNav from "../navbar/FooterNav";

import fb from "../../../assets/fb.png";
import linkedin from "../../../assets/linkedin.png";
import twitter from "../../../assets/twitter.png";
import yt from "../../../assets/youtube.png";
const Footer = () => {
  return (
    <div>
      <div className="max-w-6xl mx-auto py-8 lg:py-20">
        <div className="flex items-center gap-4 justify-center">
          <img src={logo} alt="" />
          <h1 className="text-[#0F0F0F] text-2xl lg:text-3xl font-bold">
            Dr.Pathan
          </h1>
        </div>
        <div>
          <FooterNav />
        </div>
        <div className="border my-4 text-[#0F0F0F33]"></div>
        <div className="flex gap-2 justify-center items-center">
          <img src={fb} alt="" />
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
          <img src={yt} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
