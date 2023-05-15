import Login from "../Login/Login";
import { ProfileProps } from "../Profile/Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="alo" />;
  } else {
    return <Login />;
  }
};

export default Private;
