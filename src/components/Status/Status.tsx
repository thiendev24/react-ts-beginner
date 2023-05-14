type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = (props: StatusProps) => {
  let message: string = "";
  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "error") {
    message = "Error fetching data";
  } else if (props.status === "success") {
    message = "Data fetched successfully";
  }
  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default Status;
