type ContainerProps = {
  styles: React.CSSProperties;
};

const Container = ({ styles }: ContainerProps) => {
  return (
    <div style={styles}>
      <h2>Container</h2>
    </div>
  );
};

export default Container;
