import Greet from "../../Greet/Greet";

const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <>
      <div>{props.isLoggedIn}</div>
      <div>{props.messageCount}</div>
      <div>{props.name}</div>
    </>
  );
};

export default CustomComponent;
