const Card = ({ name, company, jobDescription, socials }) => {
  const { github, email, linkedIn } = socials;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{company}</h2>
      <h4>{jobDescription}</h4>
      {github ? (
        <a href={socials.github} type="button">
          Github
        </a>
      ) : null}
    </div>
  );
};

export default Card;
