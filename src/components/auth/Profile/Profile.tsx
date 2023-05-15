export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return (
    <div>
      <h2>Profile name is {name}</h2>
    </div>
  );
};

export default Profile;
