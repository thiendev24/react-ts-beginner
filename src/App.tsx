import Greet from "./components/Greet/Greet";
import "bootstrap/dist/css/bootstrap.css";
import "./app.scss";
import Person from "./components/Person/Person";
import PersonList from "./components/Person/PersonList";
import Status from "./components/Status/Status";
import Heading from "./components/Heading/Heading";
import Oscar from "./components/Oscar/Oscar";
// import Button from "./components/event/Button/Button";
import Input from "./components/event/Input/Input";
import Container from "./components/Container/Container";
import LoggedIn from "./components/state/LoggedIn/LoggedIn";
import User from "./components/state/User/User";
import Counter from "./components/state/Counter/Counter";
import Box from "./components/context/Box/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext/ThemeContext";
import { UserContextProvider } from "./components/context/User/UserContext";
import ClassCounter from "./components/class_components/Counter/ClassCounter";
import Private from "./components/auth/Private/Private";
import Profile from "./components/auth/Profile/Profile";
import List from "./components/generic/List/List";
import RandomNumber from "./components/retriction/RandomNumber/RandomNumber";
import Toast from "./components/templateliterals/Toast/Toast";
import Button from "./components/html/Button/Button";
import Text from "./components/polymorphic/Text/Text";

function App() {
  const name: string = "test-app";
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princess", last: "Diana" },
  ];

  const items = ["Batman", "Ironman", "Superman"];

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log(event.target);
    console.log(id);
  };
  return (
    <div>
      <div className="text-primary">tutorial</div>
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someId" size="sm" color="secondary">
        Label
      </Text>
      <Button variant="primary" onClick={() => console.log("clicked")} />
      <Toast position="right-center" />
      <RandomNumber value={11} isNegative />
      <List items={items} onClick={(item) => console.log(item)} />

      <Private isLoggedIn={true} component={Profile} />
      <ClassCounter message="The count is" />
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <Counter />
      <LoggedIn />
      <Container
        styles={{
          border: "1px solid black",
          padding: "1rem",
          color: "gray",
        }}
      />
      <Greet name={name} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="error" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading children="Oscar goes to Leonardo Dicaprio!" />
      </Oscar>
      {/* <Button handleClick={handleClick} /> */}
      <Input
        handleOnChange={(event) => console.log(event.target.value)}
        value=""
      />
    </div>
  );
}

export default App;
