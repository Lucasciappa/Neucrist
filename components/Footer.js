import Copyright from "./footer/FooterCopyright";
import InfoLinks from "./footer/FooterInfoLinks";
import FollowUs from "./footer/FooterFollowUs";

const Footer = () => {
  return (
    <footer className="relative bg-primary-red pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-primary-red fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <FollowUs />
          <InfoLinks />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
