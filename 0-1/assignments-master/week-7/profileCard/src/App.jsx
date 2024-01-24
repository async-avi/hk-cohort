import { RecoilRoot, useRecoilValue } from "recoil";
import { peopleArr } from "../store/atoms";
import cardBg from "./assets/card bg.jpg";

const App = () => {
  return (
    <div>
      <h2 style={{ backgroundImage: `url(${cardBg})` }}>Hello world</h2>
      <RecoilRoot>
        <RenderCards />
      </RecoilRoot>
    </div>
  );
};

function RenderCards() {
  const people = useRecoilValue(peopleArr);

  return (
    <>
      {people.map((person) => (
        <Card
          image={person.img}
          key={person.id}
          name={person.username}
          age={person.age}
          followers={person.followers}
        />
      ))}
    </>
  );
}

function Card({ name, age, followers, image }) {
  return (
    <div>
      <img
        src={image}
        alt={name}
        style={{ height: "150px", borderRadius: "50%" }}
      />
      <h2>{name}</h2>
      <h3>{age}</h3>
      {followers >= 1000 && followers < 100000 ? (
        <h3>
          {followers[0]}
          {followers[1]}K
        </h3>
      ) : followers >= 100000 && followers < 1000000 ? (
        <h3>
          {followers[0]}
          {followers[1]}
          {followers[2]}K
        </h3>
      ) : (
        <h3>{followers}</h3>
      )}
    </div>
  );
}

export default App;
