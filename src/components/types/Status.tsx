type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = ({ status }: StatusProps) => {
  let message;
  switch (status) {
    case "loading":
      message = "Loading...";
      break;
    case "success":
      message = "Data fetched successfully!";
      break;
    case "error":
      message = "Error fetching data";
      break;
    default:
      message = "Something went wrong";
      break;
  }

  return (
    <div>
      <h3>Status - {message}</h3>
    </div>
  );
};

export default Status;
