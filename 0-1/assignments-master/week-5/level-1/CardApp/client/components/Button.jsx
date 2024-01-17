const Button = ({ href, img, name, design }) => {
  return (
    <a href={href}>
      <button style={design}>
        <img src={img} alt="mailPng" height="25px" />
        <span style={{ margin: "10px" }}>{name}</span>
      </button>
    </a>
  );
};

export default Button;
