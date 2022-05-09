import SocialMediaCircle from "./FooterSocialMedia";

const FollowUs = () => {
    const infoCards = [
        {
          fontAwesome: "fab fa-instagram",
          link: "https://www.instagram.com/gransliving/",
        },
        {
          fontAwesome: "fab fa-facebook-f",
          link: "https://www.facebook.com/gransliving"
        },
        {
          fontAwesome: "fab fa-twitter",
          link: ""
        },
        {
          fontAwesome: "fab fa-github",
          link: ""
        }
      ];
  return (
    <>
      <div className="w-full text-center lg:w-6/12 px-4">
        <h4 className="text-3xl py-4 font-semibold">
          Seguinos en nuestras redes
        </h4>
        <div className="flex flex-row justify-center gap-x-6 py-2">
        {infoCards.map((data, i) => {
            return <SocialMediaCircle key={i} {...data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FollowUs;
