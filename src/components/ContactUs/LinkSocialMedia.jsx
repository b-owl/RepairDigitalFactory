const LinkSocialMedia = ({ icon, name, href }) => {
  return (
    <a href={href} className="flex items-center ">
      <img className="w-10" src={icon} alt="name" title="name" />
      <span>{name}</span>
    </a>
  );
};

export default LinkSocialMedia;
