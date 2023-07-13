const Link = ({ href, name }) => {
  return (
    <li>
      <a href={href}>{name}</a>
    </li>
  );
};

export default Link;
