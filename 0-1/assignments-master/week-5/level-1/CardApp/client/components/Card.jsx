import Button from "./Button";
import mailpng from "../assets/mailpng.png";

const Card = ({
  name,
  companyName,
  exp,
  jobDescription,
  interests,
  socials,
}) => {
  let { email, linkedIn, github } = socials;
  return (
    <div>
      <h2>{name}</h2>
      <h3>{companyName}</h3>
      {jobDescription}
      <br />
      <b>Exp: {exp}</b>
      <br />
      <h4>Interests</h4>
      {interests
        ? interests.map((interest) => {
            return (
              <>
                {interest}
                <br />
              </>
            );
          })
        : null}
      {email ? <Button href={email} img={mailpng} name={"Email"} /> : null}
      {linkedIn ? <button>Email</button> : null}
      {github ? <button>Github</button> : null}
    </div>
  );
};

export default Card;
