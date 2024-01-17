import Button from "./Button";
import { styles } from "../src/styles";
import mailpng from "../assets/mailpng.png";
import linkdInPng from "../assets/linkedIn.png";
import gitHubPng from "../assets/gitHub.png";

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
    <div style={styles.card}>
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
      {linkedIn ? (
        <Button href={linkedIn} img={linkdInPng} name={"linkedIn"} />
      ) : null}
      {github ? (
        <Button
          href={github}
          name={"Github"}
          img={gitHubPng}
          design={styles.button.github}
        />
      ) : null}
    </div>
  );
};

export default Card;
