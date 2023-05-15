type ButtonProps = {
  variant: "primary" | "secondary";
} & React.ComponentProps<"button">;

const Button = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`btn btn-secondary class-with-${variant}`} {...rest}>
      {children} - button
    </button>
  );
};

export default Button;
