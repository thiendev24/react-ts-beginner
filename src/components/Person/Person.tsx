import PersonProps from "../types/Person.type";

const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <h1>
        {name.first} {name.last}
      </h1>
    </div>
  );
};

export default Person;
