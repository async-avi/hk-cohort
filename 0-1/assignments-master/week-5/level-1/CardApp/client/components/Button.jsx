const Button = ({ href, img, name }) => {
  return (
    <a href={href}>
      <button style={{ background: "	#FF7F7F", border: "0px", color: "white" }}>
        <img src={img} alt="mailPng" height="25px" />
        <span style={{ margin: "10px" }}>{name}</span>
      </button>
    </a>
  );
};

export default Button;
