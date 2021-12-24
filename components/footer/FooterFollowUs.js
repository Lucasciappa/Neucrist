import SocialMediaCircle from "./FooterSocialMedia";

const FollowUs = () => {
    const infoCards = [
        {
          fontAwesome: "flex fab fa-twitter",
          color: "text-blue-400"
        },
        {
          fontAwesome: "flex fab fa-facebook-square",
          color: "text-blue-600"
        },
        {
          fontAwesome: "flex fab fa-dribbble",
          color: "text-pink-400"
        },
        {
          fontAwesome: "flex fab fa-github",
          color: "text-gray-900"
        }
      ];
  return (
    <>
      <div className="w-full text-center lg:w-6/12 px-4">
        <h4 className="text-3xl py-4 font-semibold">
          Seguinos en nuestras redes
        </h4>
        <div className="py-2">
        {infoCards.map((data, i) => {
            return <SocialMediaCircle key={i} {...data} />;
          })}
        </div>
      </div>
    </>
  );
};

export default FollowUs;
