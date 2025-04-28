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
          <a href="https://www.facebook.com/devenamulshikder" target="blank">
            <img src={fb} alt="" />
          </a>
          <a href="https://linkedin.com/in/enamul-shikder" target="blank">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://x.com/" target="blank">
            <img src={twitter} alt="" />
          </a>
          <a href="https://youtube.com" target="blank">
            <img src={yt} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
