import { Name } from "../types/Person.type";

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props &&
        props.names &&
        props.names.map((person) => {
          return (
            <h3 key={person.first}>
              {person.first} {person.last}
            </h3>
          );
        })}
    </div>
  );
};

export default PersonList;
