type InputProps = {
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ handleOnChange, value }: InputProps) => {
  const handleInputOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };
  return (
    <div>
      <hr />
      <h2>Input</h2>
      <input type="text" value={value} onChange={handleOnChange} />
    </div>
  );
};

export default Input;
