import GreetProps from "../types/Greet.type";

const Greet = ({ name, isLoggedIn, messageCount }: GreetProps) => {
  let count: number = messageCount ? messageCount : 0;
  return (
    <div>
      <h1>
        {isLoggedIn
          ? `Hello ${name}, you have ${count} unread messages!`
          : "Welcome guest!"}
      </h1>
    </div>
  );
};

export default Greet;
